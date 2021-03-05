import { action, gondola, locator, page } from "@logigear/gondola";

@page
export class repoPage {
    @locator
    private codeTab = "//li[@class='d-flex']//span[@data-content='Code']";
    @locator
    private btnBranch = "//summary[@class='btn css-truncate']";
    @action("getRepo", "")
    public async getRepo() {
        await gondola.navigate("https://github.com/nguyenducquanghuy/sample-project");
        await gondola.waitForElement(this.codeTab, 10);
        await gondola.click(this.codeTab);
        await gondola.waitForElement(this.btnBranch, 10);
        await gondola.click(this.btnBranch);    
    }
}
export default new repoPage();
