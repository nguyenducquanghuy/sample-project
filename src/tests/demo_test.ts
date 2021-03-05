import { TestCase, TestModule, gondola } from "@logigear/gondola";
import translatePage, { translate_page } from "../pages/demo_site/translatePage";
TestModule("Untitled Test Module");
TestCase("demo_test", async () => {
    await translatePage.translate("Hello world","English","Vietnamese");
});
