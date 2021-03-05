"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartPage = void 0;
const gondola_1 = require("@logigear/gondola");
let cartPage = class cartPage {
    constructor() {
        this.lblCartHeader = "//h1[text()='Cart']";
        this.ifrPaymentFrame = "//div[@id='card']//iframe";
        this.txtPaymentEmail = "#email";
        this.txtPaymentCardNumber = "input[name='cardnumber']";
        this.txtPaymentExpDate = "input[name='exp-date']";
        this.txtPaymentCVC = "input[name='cvc']";
        this.txtPaymentPostal = "input[name='postal']";
        this.btnPayment = "//button[@class='pay-with-stripe']";
    }
    async checkItemDisplayed(productName) {
        let patternLocator = "//div[@class='cartitems']//h4[text()='%s']";
        var realItemLocator = patternLocator.replace('%s', productName);
        await gondola_1.gondola.checkControlExist(realItemLocator);
    }
    async checkPaymentButtonEnabled() {
        let attribute = await gondola_1.gondola.getControlProperty(this.btnPayment, "disabled");
        await gondola_1.gondola.checkEqual(attribute, false);
    }
    async fillPaymentInfo(payment) {
        await gondola_1.gondola.waitForElement(this.txtPaymentEmail, 5);
        await gondola_1.gondola.enter(this.txtPaymentEmail, payment.email);
        await gondola_1.gondola.switchFrame(this.ifrPaymentFrame);
        await gondola_1.gondola.waitForElement(this.txtPaymentCardNumber, 5);
        await gondola_1.gondola.enter(this.txtPaymentCardNumber, payment.cardNumber);
        await gondola_1.gondola.enter(this.txtPaymentExpDate, `${payment.month}${payment.year}`);
        await gondola_1.gondola.enter(this.txtPaymentCVC, payment.cvc);
        await gondola_1.gondola.enter(this.txtPaymentPostal, payment.zipCode);
        await gondola_1.gondola.switchFrame("");
    }
};
__decorate([
    gondola_1.locator
], cartPage.prototype, "lblCartHeader", void 0);
__decorate([
    gondola_1.locator
], cartPage.prototype, "ifrPaymentFrame", void 0);
__decorate([
    gondola_1.locator
], cartPage.prototype, "txtPaymentEmail", void 0);
__decorate([
    gondola_1.locator
], cartPage.prototype, "txtPaymentCardNumber", void 0);
__decorate([
    gondola_1.locator
], cartPage.prototype, "txtPaymentExpDate", void 0);
__decorate([
    gondola_1.locator
], cartPage.prototype, "txtPaymentCVC", void 0);
__decorate([
    gondola_1.locator
], cartPage.prototype, "txtPaymentPostal", void 0);
__decorate([
    gondola_1.locator
], cartPage.prototype, "btnPayment", void 0);
__decorate([
    gondola_1.action("check item displayed", "Check item displayed in shopping cart.")
], cartPage.prototype, "checkItemDisplayed", null);
__decorate([
    gondola_1.action("check payment button enabled", "Check whether Payment button is enabled or not.")
], cartPage.prototype, "checkPaymentButtonEnabled", null);
__decorate([
    gondola_1.action("fill payment information", "Enter payment information")
], cartPage.prototype, "fillPaymentInfo", null);
cartPage = __decorate([
    gondola_1.page
], cartPage);
exports.cartPage = cartPage;
exports.default = new cartPage();
//# sourceMappingURL=cartPage.js.map