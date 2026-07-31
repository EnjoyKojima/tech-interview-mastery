import { describe, expect, it } from "vitest";
import app from "../src/index";

describe("status route", () => {
  it("redirects legacy status URLs to the home page", async () => {
    const env = {
      BASIC_AUTH_USERNAME: "user",
      BASIC_AUTH_PASSWORD: "pass",
    } as unknown as Env;
    const headers = { Authorization: `Basic ${btoa("user:pass")}` };

    const response = await app.request("/status", { headers }, env);

    expect(response.status).toBe(302);
    expect(response.headers.get("Location")).toBe("/");
  });
});
