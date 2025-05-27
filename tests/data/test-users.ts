import { UserRole } from "../api/types/user";

export const USER_ADULT = {
  name: "Alice Adult",
  email: "alice@icanbreakit.eu",
  role: UserRole.User,
  age: 18,
};

export const USER_CHILD = {
  name: "Ben Teenager",
  email: "ben@icanbreakit.eu",
  role: UserRole.User,
  age: 17,
};

export const ADMIN_ADULT = {
  name: "Colin Old",
  email: "colin@icanbreakit.eu",
  role: UserRole.Admin,
  age: 125,
};

export const ADMIN_CHILD = {
  name: "Dana Baby",
  email: "dana@icanbreakit.eu",
  role: UserRole.Admin,
  age: 1,
};
