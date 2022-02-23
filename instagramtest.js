const { Builder, By, Key } = require("selenium-webdriver")
let chrome = require('selenium-webdriver/chrome')

require("chromedriver")

async function main() {

    try {
        let driver = await new Builder().forBrowser("chrome").build()
        await driver.get("https://www.instagram.com/")
        await driver.manage().window().maximize();
        await new Promise(res => setTimeout(res, 1000));

        let submitButton = await driver.findElement(By.xpath("//button[@type='submit']")).getText().then(function (value) {
            return value;
        })

        if (submitButton == "Log In") {
            console.log("User is not logged in")

            let IgLogo = await driver.findElement(By.xpath("//h1[@class='NXVPg Szr5J  coreSpriteLoggedOutWordmark  ']")).getText().then(function (value) {
                return value;
            })

            console.log(IgLogo == "Instagram" ? "Logo Found" : "Logo not found")

            await new Promise(res => setTimeout(res, 1000));

            await driver.findElement(By.name("username")).sendKeys("ryuninyuri@gmail.com")

            await new Promise(res => setTimeout(res, 1000));

            let usernamevalue = await driver.findElement(By.name("username")).getAttribute("value").then(function (value) {
                return value;
            })

            console.log(usernamevalue == "ryuninyuri@gmail.com" ? "Username is correct" : "Username is not correct")

            await new Promise(res => setTimeout(res, 1000));

            await driver.findElement(By.name("password")).sendKeys("Test12")

            await new Promise(res => setTimeout(res, 1000));

            let passwordvalue = await driver.findElement(By.name("password")).getAttribute("value").then(function (value) {
                return value;
            })

            console.log(passwordvalue == "Test11" ? "Password is correct" : "Password is not correct")

            await new Promise(res => setTimeout(res, 1000));

            let buttonvalue = await driver.findElement(By.xpath("//button[@type='submit']")).getText().then(function (value) {
                return value;
            })

            console.log("Data fields are present")

            console.log(buttonvalue == "Log In" ? "Button is present" : "Button is not present")

            await new Promise(res => setTimeout(res, 1000));

            let linkispresent = await driver.findElement(By.xpath("//a[@data-testid='sign-up-link']")).getAttribute("href").then(function (value) {
                return value;
            })

            console.log(linkispresent == "https://www.instagram.com/accounts/emailsignup/" ? "Link is correct" : "Link is not correct")

            await driver.findElement(By.xpath("//button[@type='submit']")).click()

            await new Promise(res => setTimeout(res, 1000));


        } else {
            console.log("User is logged in")
            const actions = driver.actions()
            await new Promise(res => setTimeout(res, 1000));
            await actions.moveToElement('//img[@alt="test11x1\'s profile picture"]').click().perform();
            await new Promise(res => setTimeout(res, 1000));
            await actions.moveToElement("//div[contains(text(),'Log Out')]").click().perform();
            console.log("Successfully logged out user.")

        }

        await new Promise(res => setTimeout(res, 2000));
        await driver.quit()
    } catch {

    }

}

main()
