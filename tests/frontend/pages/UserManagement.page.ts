import { Locator, Page, expect } from "@playwright/test";
import { User } from "../data/User.data";

export class UserManagement {
  private readonly nameInput: Locator;
  private readonly emailInput: Locator;
  private readonly ageInput: Locator;
  private readonly roleSelect: Locator;
  private readonly submitButton: Locator;
  private readonly userItem: Locator;

  constructor(private page: Page) {
    this.nameInput = page.getByTestId("name-input");
    this.emailInput = page.getByTestId("email-input");
    this.ageInput = page.getByTestId("age-input");
    this.roleSelect = page.getByTestId("role-select");
    this.submitButton = page.getByTestId("add-button");
    this.userItem = page.getByTestId("user-item");
  }

  public async goto() {
    await this.page.goto("/");
  }

  public async fillForm(user: User) {
    await this.nameInput.fill(user.name);
    await this.emailInput.fill(user.email);
    await this.ageInput.fill(user.age);
    await this.roleSelect.selectOption(user.role);
  }

  public async submitForm() {
    await this.submitButton.click();
  }
}
