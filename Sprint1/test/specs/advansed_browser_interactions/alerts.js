describe('working with alerts', ()=>{
const url = 'https://the-internet.herokuapp.com/javascript_alerts'
const jsAlert = 'button[onclick="jsAlert()"]'
const jsConfirm = 'button[onclick="jsConfirm()"]'
const jsPrompt = 'button[onclick="jsPrompt()"]';
const result = '#result'

before('open the page', async()=>{
    await browser.maximizeWindow()
    await browser.url(url)
})
context('Clicking an alert', ()=>{
    it('should click an alert', async()=>{
        await $(jsAlert).click();
        await browser.dismissAlert();     
        const resAlert = await $(result).getText();
        expect (resAlert).toEqual('You successfully clicked an alert')
   
   })
})

context('Accept and dismiss alert', ()=>{
    it('should accept alert', async()=>{
        await $(jsConfirm).click();
        await browser.acceptAlert();
        const resConfirm = await $(result).getText();
        expect (resConfirm).toEqual('You clicked: Ok')
    })
    it('should decline alert', async()=>{
        await $(jsConfirm).click();
        await browser.dismissAlert()
        const resConfirm = await $(result).getText();
        expect (resConfirm).toEqual('You clicked: Cancel')
    })
})
context('Js Prompt', ()=>{
    it('should get text from alert', async()=>{
        await $(jsPrompt).click();
        const resPrompt = await browser.getAlertText();
        expect (resPrompt).toEqual('I am a JS prompt')
    })
    it('should send text', async()=>{
        const text = 'some text'
        await browser.sendAlertText(text);
        await browser.acceptAlert()
        const res = await $(result).getText()
        expect (res).toEqual(`You entered: ${text}`)
    })
})


})