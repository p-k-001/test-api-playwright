import { test as base, expect, Page } from "@playwright/test";
import { UserManagement } from "../pages/UserManagement.page";
import { ListOfUsers } from "../pages/ListOfUsers.page";

type myFixture = {
  cleanEnv: Page;
  userManagementPage: UserManagement;
  listOfUsersPage: ListOfUsers;
};

export const test = base.extend<myFixture>({
  cleanEnv: async ({ page }, use) => {
    await page.goto("/");
    await expect(page).toHaveTitle("test API");
    const userItems = page.getByTestId("user-item");
    if ((await userItems.count()) > 0) {
      await page.getByRole("button", { name: "Delete All Users" }).click();
    }
    await expect(page.getByTestId("user-item")).toHaveCount(0);
    await use(page);
  },
  userManagementPage: async ({ page }, use) => {
    await use(new UserManagement(page));
  },
  listOfUsersPage: async ({ page }, use) => {
    await use(new ListOfUsers(page));
  },
});
