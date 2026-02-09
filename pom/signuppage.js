class signuppage{
    constructor (page){
        this.genderdropdown=page.locator("//span[text()=' Select ']")
        this.nametextfield=page.getByPlaceholder("Name")

        this.youarearadiobutton=page.locator('#user_type-2')
        this.YourCountrydropdown=page.locator("#select2-country-container")
        this.yourcountrysearch=page.locator("//input[@class='select2-search__field']")
        this.phonetextfield=page.getByPlaceholder("Phone Number")
        this.emailtextfield=page.getByPlaceholder("Email")
        this.passwordtextfield=page.locator("#password")
        this.confirmpasswordtextfield=page.locator("#password_confirmation")
        this.tandccheckbox= page.locator("#term")
        this.submitbutton=page.getByRole("button",{name:" Register "})
    }
}
export default signuppage