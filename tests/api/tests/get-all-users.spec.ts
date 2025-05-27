import { test, expect } from "@playwright/test";
import { UserApi } from "../apis/UsersApi";
import { USER_ADULT } from "../../data/test-users";

let userApi: UserApi;

test.beforeEach(async ({ request }) => {
  userApi = new UserApi(request);
  await userApi.deleteAllUsers();
});
test.afterEach(async () => {
  await userApi.deleteAllUsers();
});

test("get all users from the empty db", async () => {
  const getAllUsersResponse = await userApi.getAllUsers();
  const getAllUsersResponseBody = await getAllUsersResponse.json();

  expect(Array.isArray(getAllUsersResponseBody)).toBeTruthy();
  expect(getAllUsersResponseBody).toHaveLength(0);
});

test("get all users - one user in db", async () => {
  // post a new user
  const postResponse = await userApi.postUser(USER_ADULT);
  expect(postResponse.ok()).toBeTruthy();

  const postResponseBody = await postResponse.json();
  expect(postResponseBody).toMatchObject({
    id: 1,
    name: USER_ADULT.name,
    email: USER_ADULT.email,
    role: USER_ADULT.role,
    age: USER_ADULT.age,
  });

  // check all users
  const getAllUsersResponse = await userApi.getAllUsers();
  const getAllUsersResponseBody = await getAllUsersResponse.json();
  expect(getAllUsersResponseBody).toHaveLength(1);
  expect(getAllUsersResponseBody[0]).toMatchObject({
    id: 1,
    name: USER_ADULT.name,
    email: USER_ADULT.email,
    role: USER_ADULT.role,
    age: USER_ADULT.age,
  });
});

test("add a user", async () => {
  const postResponse = await userApi.postUser(USER_ADULT);
  expect(postResponse.ok()).toBeTruthy();

  const postResponseBody = await postResponse.json();
  expect(postResponseBody).toMatchObject({
    id: 1,
    name: USER_ADULT.name,
    email: USER_ADULT.email,
    role: USER_ADULT.role,
    age: USER_ADULT.age,
  });
});

test("delete all users", async () => {});
// test("get a user - first one", async () => {});
// test("get a user - last one", async () => {});
// test("update a user - first one", async () => {});
// test("update a user - last one", async () => {});
// test("delete a user - first one", async () => {});
// test("delete a user - last one", async () => {});
