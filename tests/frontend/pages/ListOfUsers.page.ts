import { Locator, Page, expect } from "@playwright/test";

export class ListOfUsers {
  private readonly userItem: Locator;
  private readonly deleteAllButton: Locator;

  constructor(private page: Page) {
    this.userItem = page.getByTestId("user-item");
    this.deleteAllButton = page.getByTestId("deleteAll-button");
  }

  public async expectUserCount(count: number) {
    await expect(this.userItem).toHaveCount(count);
  }

  public async cleanEnv() {
    if ((await this.userItem.count()) > 0) {
      await this.deleteAllButton.click();
    }
    this.expectUserCount(0);
  }
}
