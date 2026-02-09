import {test} from "@playwright/test"
import homepage  from "../pom/homepage.js"
import signuppage from "../pom/signuppage.js"
import data from "../testdata/signupdata.json"
test("signup",async({page})=>{
    let home=new homepage(page)
    let signup=new signuppage(page)
    await page.goto(data.url)
    await home.signupbutton.click()
    await signup.genderdropdown.click()
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("Enter")
    await signup.nametextfield.fill(data.Name)
    await signup.youarearadiobutton.click()
    await signup.YourCountrydropdown.click()
    await signup.yourcountrysearch.fill(data.YourCountry)
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("Enter")
    await signup.phonetextfield.fill(data.Phone)
    await signup.emailtextfield.fill(data.Email)
    await signup.passwordtextfield.fill(data.Password)
    await signup.confirmpasswordtextfield.fill(data.Password)
    await signup.tandccheckbox.click()
    await signup.submitbutton.click()


})