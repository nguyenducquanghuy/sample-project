"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gondola_1 = require("@logigear/gondola");
const translatePage_1 = __importDefault(require("../pages/demo_site/translatePage"));
gondola_1.TestModule("Untitled Test Module");
gondola_1.TestCase("demo_test", async () => {
    await translatePage_1.default.translate("Hello world", "English", "Vietnamese");
});
//# sourceMappingURL=demo_test.js.map