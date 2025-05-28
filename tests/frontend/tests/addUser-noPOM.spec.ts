import { test } from "../fixtures/frontend-fixtures";
import { expect } from "@playwright/test";

test.only("Should add a user to empty db", async ({ cleanEnv }) => {
  await cleanEnv.getByTestId("name-input").click();
  await cleanEnv.getByTestId("name-input").fill("Josef");
  await cleanEnv.getByTestId("email-input").click();
  await cleanEnv.getByTestId("email-input").fill("a@b.cz");
  await cleanEnv.getByTestId("age-input").click();
  await cleanEnv.getByTestId("age-input").fill("18");
  await cleanEnv.getByTestId("role-select").selectOption("user");
  await cleanEnv.getByTestId("add-button").click();

  await expect(cleanEnv.getByTestId("user-item")).toHaveCount(1);
});
