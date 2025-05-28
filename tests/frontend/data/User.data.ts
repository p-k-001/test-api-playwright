import { UserRole } from "./UserRole.enum";
import { faker } from "@faker-js/faker";

export class User {
  constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly age: string,
    public readonly role: UserRole
  ) {}

  static getRandomUser(): User {
    return new User(
      faker.person.fullName(),
      faker.internet.email(),
      faker.number.int({ min: 1, max: 120 }).toString(),
      faker.helpers.arrayElement([UserRole.Admin, UserRole.User])
    );
  }
}
