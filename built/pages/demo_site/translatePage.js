"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.translate_page = void 0;
const gondola_1 = require("@logigear/gondola");
let translate_page = class translate_page {
    constructor() {
        this.btnChangeLanguage1 = "//div[@class='aCQag']//div[2]/button[@class='VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ q7sDqe KY3GZb szLmtb']";
        this.btnChangeLanguage2 = "//div[@class='aCQag']//div[5]/button[@class='VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ q7sDqe KY3GZb szLmtb']";
        this.btnChangeLanguage3 = "//div[@class='aCQag']//button[@class='VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ q7sDqe KY3GZb szLmtb']";
        this.txbSearchLanguage1 = "//c-wiz[@class='bvzp8c Tht3fc']/div[@class='OoYv6d']//input[@class='KskmCc']";
        this.txbSearchLanguage2 = "//c-wiz[@class='bvzp8c DlHcnf']/div[@class='ykTHSe']//input[@class='KskmCc']";
        this.txareaSearch1 = "//textarea[@class='er8xn']";
    }
    async translate(text, language1, language2) {
        await gondola_1.gondola.navigate("https://translate.google.com/");
        await gondola_1.gondola.waitForClickable(this.btnChangeLanguage1);
        await gondola_1.gondola.click(this.btnChangeLanguage1);
        await gondola_1.gondola.enter(this.txbSearchLanguage1, language1);
        await gondola_1.gondola.pressKey(gondola_1.KeyCode.Enter);
        await gondola_1.gondola.waitForClickable(this.btnChangeLanguage2);
        await gondola_1.gondola.click(this.btnChangeLanguage2);
        await gondola_1.gondola.enter(this.txbSearchLanguage2, language2);
        await gondola_1.gondola.pressKey(gondola_1.KeyCode.Enter);
        await gondola_1.gondola.enter(this.txareaSearch1, text);
        await gondola_1.gondola.pressKey(gondola_1.KeyCode.Enter);
    }
};
__decorate([
    gondola_1.locator
], translate_page.prototype, "btnChangeLanguage1", void 0);
__decorate([
    gondola_1.locator
], translate_page.prototype, "btnChangeLanguage2", void 0);
__decorate([
    gondola_1.locator
], translate_page.prototype, "btnChangeLanguage3", void 0);
__decorate([
    gondola_1.locator
], translate_page.prototype, "txbSearchLanguage1", void 0);
__decorate([
    gondola_1.locator
], translate_page.prototype, "txbSearchLanguage2", void 0);
__decorate([
    gondola_1.locator
], translate_page.prototype, "txareaSearch1", void 0);
__decorate([
    gondola_1.action("translate", "")
], translate_page.prototype, "translate", null);
translate_page = __decorate([
    gondola_1.page
], translate_page);
exports.translate_page = translate_page;
exports.default = new translate_page();
//# sourceMappingURL=translatePage.js.map