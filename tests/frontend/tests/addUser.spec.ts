import { test } from "../fixtures/frontend-fixtures";
import { User } from "../data/User.data";

test.only("should add a user to an empty db", async ({
  //   cleanEnv,
  listOfUsersPage,
  userManagementPage,
}) => {
  await userManagementPage.goto();
  await listOfUsersPage.cleanEnv();
  await userManagementPage.fillForm(User.getRandomUser());
  await userManagementPage.submitForm();
  await listOfUsersPage.expectUserCount(1);
});
