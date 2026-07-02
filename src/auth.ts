export type BasicCredentials = {
  username: string;
  password: string;
};

export function decodeBasicCredentials(header: string | null): BasicCredentials | null {
  if (!header?.startsWith("Basic ")) {
    return null;
  }

  try {
    const decoded = atob(header.slice("Basic ".length));
    const separator = decoded.indexOf(":");

    if (separator === -1) {
      return null;
    }

    return {
      username: decoded.slice(0, separator),
      password: decoded.slice(separator + 1),
    };
  } catch {
    return null;
  }
}

async function digest(value: string): Promise<Uint8Array> {
  const encoded = new TextEncoder().encode(value);
  return new Uint8Array(await crypto.subtle.digest("SHA-256", encoded));
}

function equalBytes(left: Uint8Array, right: Uint8Array): boolean {
  let diff = left.byteLength ^ right.byteLength;
  const length = Math.max(left.byteLength, right.byteLength);

  for (let index = 0; index < length; index += 1) {
    diff |= (left[index] ?? 0) ^ (right[index] ?? 0);
  }

  return diff === 0;
}

export async function verifyBasicAuth(
  authorizationHeader: string | null,
  expectedUsername: string | undefined,
  expectedPassword: string | undefined,
): Promise<boolean> {
  if (!expectedUsername || !expectedPassword) {
    return false;
  }

  const credentials = decodeBasicCredentials(authorizationHeader);

  if (!credentials) {
    return false;
  }

  const [providedUsername, providedPassword, username, password] = await Promise.all([
    digest(credentials.username),
    digest(credentials.password),
    digest(expectedUsername),
    digest(expectedPassword),
  ]);

  return equalBytes(providedUsername, username) && equalBytes(providedPassword, password);
}

export function unauthorizedResponse(): Response {
  return new Response("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Tech Interview Mastery", charset="UTF-8"',
    },
  });
}
