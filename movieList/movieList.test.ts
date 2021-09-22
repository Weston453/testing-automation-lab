const {Capabilities, Builder, By} = require('selenium-webdriver')

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


beforeAll(async ()=> {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async ()=>{
    await driver.quit()
})

describe('movie list functionallity', ()=>{

    test('add a movie to the page', async ()=> {
        let movieInput = await driver.findElement(By.xpath('//input[@placeholder="Add Movie"]'))
        
        await movieInput.sendKeys('Legally Blonde\n')
        await movieInput.sendKeys('Legally Blonde\n')
        await movieInput.sendKeys('Legally Blonde\n')
        await driver.sleep(4000)
        
        // console.log(movieInput)
    });
    

    test('cross movie off', async ()=> {

        let crossOff = await driver.findElements(By.xpath('//li/span'))
        // crossOff.click()
        crossOff.forEach(async (el)=>{
            await el.click()
        })

        await driver.sleep(4000)
    });
});