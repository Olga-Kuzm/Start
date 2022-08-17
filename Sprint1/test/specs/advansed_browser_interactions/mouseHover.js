describe('Mouse hover on element', ()=>{
    before('Open the page', async()=>{
        await browser.maximizeWindow();
        await browser.url('https://the-internet.herokuapp.com/hovers')
    })
    it('should show user: name3', async()=>{        
        await $$('.figure')[2].moveTo()
        await expect($$('h5')[2]).toBeDisplayed()

    })
})