import {test} from "@playwright/test"
test("job",async({page})=>{
    await page.goto("http://202.83.16.221:9003/")
    await page.getByRole("link",{name:"Signup"}).click()
    await page.locator("#select2-gender-container").click()
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("Enter")
    await page.getByPlaceholder("Name").fill("suhas")
    await page.locator("#user_type-2").check()
    await page.locator("#select2-country-container").click()
    await page.locator("//input[@class='select2-search__field']").fill("India")
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("Enter")
    await page.getByPlaceholder("Phone Number").fill("9988776655")
    await page.getByPlaceholder("Email").fill("suhas@gamil.com")
    await page.locator("#password").type("Suhas@123")
    await page.locator("#password_confirmation").fill("Suhas@123")
    await page.locator("#term").check()
    await page.getByRole("button",{name:" Register "}).click

})