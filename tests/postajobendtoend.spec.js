import {test} from "@playwright/test"
//import {expect} from "../fixtures/custom fixtures/login"
import logihome from "../pom/loginhome.js"
import loggedinpage from "../pom/loogedinpage.js"
import loginpage from "../pom/loginpage.js"
import postajobpage from "../pom/postajobpage.js"
import d from "../testdata/postajob.json"


test ("postajob",async({page})=>{
    const login=new logihome(page)
    const loginp=new loginpage(page)
    const loggedin=new loggedinpage(page)
    const postajob = new postajobpage(page)

    await page.goto(d.url)    
    await login.loginbutton.click()
    await loginp.emailtextfield.fill(d.email)
    await loginp.passwordtextfield.fill(d.password)
    await loginp.loginbutton.click()
    await loggedin.postajobbutton.click()
    await postajob.categorydropdown.click()
    for(let i=0;i<4;i++){
        await page.keyboard.press("ArrowDown")
    }
    await page.keyboard.press("Enter")
    await postajob.jobtitletextfield.fill(d.Jobtitle)
    await postajob.descriptiontextfield.fill(d.Describe)
    //await postajob.jobtypedropdown.selectOption(d.Jobtype)
    await postajob.maxsalarytextfield.fill(d.Maximumsalary)
    await postajob.minsalarytextfield.fill(d.Minimumsalary)
    await postajob.timedropdown.click()
    for(let i=0;i<3;i++){
        await page.keyboard.press("ArrowDown")
    }
    await page.keyboard.press("Enter")
    await postajob.negotiablecheckbox.check()
    await postajob.startdatetextfield.fill(d.startdate)
    await postajob.companynametextfield.fill(d.Companyname)
    await postajob.companydescritiontextfield.type(d.description)
    await postajob.companywebsitetextfield.fill(d.Companywebsite)
    await postajob.locationdropdown.click()
    await page.locator(".select2-search__field").fill("Karnataka")
    await page.keyboard.press("ArrowDown")
     await page.keyboard.press("Enter")
    await postajob.sublocationdropdown.click()
    await page.locator(".select2-search__field").fill("Davanagere")
    await page.keyboard.press("ArrowDown")
     await page.keyboard.press("Enter")
    await postajob.citydropdown.click()
    await page.locator(".select2-search__field").fill("Jagalūr")
    await page.keyboard.press("ArrowDown")
     await page.keyboard.press("Enter")
    await postajob.phonenumbertextfield.fill(d.Phonenumber)
    await postajob.submitbutton.click() 




})