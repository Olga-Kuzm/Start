describe('Drag and drop', ()=>{
   

    before('Open the page', async()=>{
        await browser.maximizeWindow();
        await browser.url('https://the-internet.herokuapp.com/drag_and_drop')
    })
    it('should drag A to B', async()=>{
        
        const a = await $('//*[@id="column-a"]')
        const b = await $('//*[@id="column-b"]')

        await a.dragAndDrop(b);
       
        
    })
})