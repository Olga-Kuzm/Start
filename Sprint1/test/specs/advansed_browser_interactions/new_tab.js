describe('Handling tabs', ()=>{
    const url = 'https://the-internet.herokuapp.com/windows'
    const link = '#content > div > a'
    
    before('open the page', async()=>{
        await browser.maximizeWindow();
        await browser.url(url)

    })

    context('Handling tabs', ()=>{
        it('should return to first tab', async()=>{
            await $(link).click();
            const tabs = await browser.getWindowHandles()
            await browser.switchToWindow(tabs[0]);            

        });
        it('should close first tab', async()=>{
            await browser.closeWindow();
            
        })
    })

})