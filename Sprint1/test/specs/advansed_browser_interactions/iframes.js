describe('working with iframes', ()=>{
    const url = 'https://the-internet.herokuapp.com/iframe'
    const frameId = '//*[@id="mce_0_ifr"]'
    const field = '//*[@id="tinymce"]'
    const fileMenuItem = '//*[@id="content"]/div/div/div[1]/div[1]/div[1]/button[1]/span'
    const newDocument = '//div[@title="New document"]'
    


    before('open the page', async()=>{
        await browser.maximizeWindow();
        await browser.url(url);
    })
    
    context('working with iframes', ()=>{
        it('should write some text', async ()=>{           
            const frame = await browser.findElement('xpath', frameId)            
            await browser.switchToFrame(frame);
            await $(field).setValue('Some test text');            
            const text = await $(field).getText()
            expect (text).toEqual('Some test text')
            
        })
        it('should create new document',async()=>{
            await browser.switchToParentFrame()
            await $(fileMenuItem).click()            
            await $(newDocument).click()            
            const frame = await browser.findElement('xpath', frameId)            
            await browser.switchToFrame(frame)
            const text = await $(field).getText()
            expect (text).toEqual('')



        })

    })
})