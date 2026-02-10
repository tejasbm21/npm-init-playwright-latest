class postajobpage{
    constructor(page){
        this.categorydropdown=page.locator("#select2-category-container")
        this.jobtitletextfield=page.locator("#title")
        this.descriptiontextfield=page.locator("#description")
        this.jobtypedropdown=page.locator("#select2-ad_type-container")
          this.maxsalarytextfield=page.locator("#salary_max")
        this.minsalarytextfield=page.locator("#salary_min")
        this.timedropdown=page.locator("#select2-salary_type-container")
        this.negotiablecheckbox=page.locator("#negotiable")
        this.startdatetextfield=page.locator("#start_date")
        this.companynametextfield=page.locator("#company_name")
        this.companydescritiontextfield=page.locator("#company_description")
        this.companywebsitetextfield=page.locator("#company_website")
        this.locationdropdown=page.locator("#select2-location-container")
        this.sublocationdropdown=page.locator("#select2-sub_location-container")
        this.citydropdown=page.locator("#select2-city-container")
        this.phonenumbertextfield=page.locator("#contact_phone")
        this.submitbutton=page.locator("#createAdBtn")
        //this.successmessage=page.locator(".alert-success")
        //this.errormessage=page.locator(".alert-danger")

    }
}
export default postajobpage