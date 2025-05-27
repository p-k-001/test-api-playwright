export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  age: number;
}

export interface CreateUserRequest {
  name: string;
  email: string;
  role: UserRole;
  age: number;
}

export enum UserRole {
  Admin = "admin",
  User = "user",
  Guest = "guest",
}
