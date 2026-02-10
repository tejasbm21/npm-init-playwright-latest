class loginpage{
    constructor(page){
        this.emailtextfield=page.locator("#email")
        this.passwordtextfield=page.locator("#password")
        this.loginbutton=page.locator("//button[text()=' Login ']")
    }
}
export default loginpage