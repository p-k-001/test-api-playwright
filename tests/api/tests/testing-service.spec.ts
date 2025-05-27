import { test, expect } from "@playwright/test";

test("testing endpoint returns hello", async ({ request }) => {
  const response = await request.get("/hello");

  expect(response.ok()).toBeTruthy();

  const body = await response.json();
  expect(body).toMatchObject({
    message: "Hello, API Testing!",
  });
});
