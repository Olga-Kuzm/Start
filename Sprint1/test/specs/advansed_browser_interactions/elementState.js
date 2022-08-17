describe('Checking element state', ()=>{
    const startButton = '#start > button';
    const resultElement = '#finish'


    it('should show "Hello World!"', async()=>{
        await browser.maximizeWindow();
        await browser.url('https://the-internet.herokuapp.com/dynamic_loading/1');

        await $(startButton).click();
        await $(resultElement).waitForDisplayed()
        const text = await $(resultElement).getText()
        expect(text).toEqual('Hello World!')

    })
})