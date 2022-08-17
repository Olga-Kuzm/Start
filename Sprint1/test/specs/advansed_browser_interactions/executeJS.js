/* execute JS (e.g.: hide the animated banner, click on some elements, set search input value using JS)  */

describe('Execute JS', ()=>{
    const category = '.maintext';
    const searchInput = '#filter_category_id'
    const product = '[title="Gucci Guilty"]'
    const searchButton = '.button-in-search'
    const animatedBanner = '.slider'
    const quantity = '#product_quantity'
    const addToCartButton = '.cart'

    const unitPrice = '//*[@id="cart"]/div/div[1]/table/tbody/tr[2]/td[4]'
    const total = '//*[@id="cart"]/div/div[1]/table/tbody/tr[2]/td[6]'
    
before('open page', async()=>{
    await browser.maximizeWindow();
    await browser.url('https://automationteststore.com/');

})

    it('should hide banner', async()=>{
        const banner = await $(animatedBanner)
        await browser.execute((element)=>{
            element.remove()
        }, banner)
        await expect(banner).not.toBeDisplayed()
    })
    it('should click on Fragrance', async()=>{
        const fragrMenuItem = await $('[href="https://automationteststore.com/index.php?rt=product/category&path=49"]');        
        await browser.execute((item)=>{
            item.click();
        }, fragrMenuItem,)
        const categoryValue = await $(category).getText()
        expect(categoryValue).toEqual('FRAGRANCE')
        
    })
    it('should change quantity in product card', async()=>{
       await $(product).click()
       const quantityInput = await $(quantity)
       await browser.execute((quantity)=>{
        quantity.value = 3
       }, quantityInput)
       await $(addToCartButton).click()
      let price = await $(unitPrice).getText();    
      let sum = await $(total).getText();      
      price = Number(price.slice(1));
      sum = Number(sum.slice(1))
     
      expect(sum).toEqual(price * 3)

    })
    // it ('should set search input value', async()=>{
    //     const search = await $(searchInput);
    //     buttonS = await $(searchButton)
    //     await browser.execute((input, button)=>{
    //         input.value = "333"
    //         button.click()
            
    //     }, search, buttonS)

    //     await browser.pause(3000)
    // })
})