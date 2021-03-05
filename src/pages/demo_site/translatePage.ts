import { action, gondola, KeyCode, locator, page } from "@logigear/gondola";

@page
export class translate_page {
    static translate: any;
    @locator
    public btnChangeLanguage1 = "//div[@class='aCQag']//div[2]/button[@class='VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ q7sDqe KY3GZb szLmtb']";
    @locator
    public btnChangeLanguage2 = "//div[@class='aCQag']//div[5]/button[@class='VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ q7sDqe KY3GZb szLmtb']";
    @locator
    public btnChangeLanguage3 = "//div[@class='aCQag']//button[@class='VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ q7sDqe KY3GZb szLmtb']";
    @locator
    public txbSearchLanguage1 = "//c-wiz[@class='bvzp8c Tht3fc']/div[@class='OoYv6d']//input[@class='KskmCc']";
    @locator
    public txbSearchLanguage2 = "//c-wiz[@class='bvzp8c DlHcnf']/div[@class='ykTHSe']//input[@class='KskmCc']";
    @locator
    public txareaSearch1 = "//textarea[@class='er8xn']";
    @action("translate", "")
    public async translate(text: string, language1: string, language2: string) {
        await gondola.navigate("https://translate.google.com/");
        await gondola.waitForClickable(this.btnChangeLanguage1);
        await gondola.click(this.btnChangeLanguage1);
        await gondola.enter(this.txbSearchLanguage1, language1);
        await gondola.pressKey(KeyCode.Enter);
        await gondola.waitForClickable(this.btnChangeLanguage2);
        await gondola.click(this.btnChangeLanguage2);
        await gondola.enter(this.txbSearchLanguage2, language2);
        await gondola.pressKey(KeyCode.Enter);
        await gondola.enter(this.txareaSearch1, text);
        await gondola.pressKey(KeyCode.Enter);
    }
}
export default new translate_page();
