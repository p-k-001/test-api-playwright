import { APIRequestContext, APIResponse } from "@playwright/test";
import { CreateUserRequest } from "../types/user";

export class UserApi {
  constructor(private request: APIRequestContext) {}

  async getAllUsers(): Promise<APIResponse> {
    return this.request.get("/users");
  }

  async postUser(data: CreateUserRequest): Promise<APIResponse> {
    return this.request.post("/users", { data });
  }

  async deleteAllUsers(): Promise<APIResponse> {
    return this.request.delete("/users");
  }

  // TODO:
  async getUserById() {}
  async updateUserById() {}
  async deleteUserById() {}
}
