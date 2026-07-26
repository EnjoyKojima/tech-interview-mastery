import { readdirSync } from "node:fs";
import { fileURLToPath, URL as NodeUrl } from "node:url";
import { describe, expect, it, vi } from "vitest";
import app from "../src/index";
import { questions } from "../src/questions";

const publicDirectory = fileURLToPath(new NodeUrl("../public/explanations/", import.meta.url));

function imageIds(level: 6 | 7): string[] {
  return readdirSync(`${publicDirectory}/level${level}`)
    .filter((filename) => filename.endsWith(".webp"))
    .map((filename) => filename.slice(0, -".webp".length))
    .toSorted();
}

describe("advanced explanation images", () => {
  it.each([6, 7] as const)("has exactly one image for every level %i question", (level) => {
    const questionIds = questions
      .filter((question) => question.level === level)
      .map((question) => question.id)
      .toSorted();

    expect(questionIds).toHaveLength(20);
    expect(imageIds(level)).toEqual(questionIds);
  });

  it("serves only an image whose directory matches its question level", async () => {
    const assetsFetch = vi.fn<(request: Request) => Promise<Response>>(async (request) => {
      return new Response(new URL(request.url).pathname);
    });
    const env = {
      BASIC_AUTH_USERNAME: "user",
      BASIC_AUTH_PASSWORD: "pass",
      ASSETS: { fetch: assetsFetch },
    } as unknown as Env;
    const headers = { Authorization: `Basic ${btoa("user:pass")}` };

    const response = await app.request(
      "/explanations/level6/l6-computer-scheduler.webp",
      { headers },
      env,
    );
    const mismatched = await app.request(
      "/explanations/level7/l6-computer-scheduler.webp",
      { headers },
      env,
    );

    expect(response.status).toBe(200);
    expect(await response.text()).toBe("/explanations/level6/l6-computer-scheduler.webp");
    expect(assetsFetch).toHaveBeenCalledOnce();
    expect(mismatched.status).toBe(404);
  });
});
