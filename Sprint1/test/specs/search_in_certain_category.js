describe('Search in a category', ()=>{
    const searchBar = '#filter_keyword';
    const makeupCategory = '#category_36';
    const searchButton = '.button-in-search';
    const searchResult = '.fixed_wrapper';
    const serchValue = 'lip';
    const testArr = ['LE ROUGE ABSOLU RESHAPING & REPLENISHING LIPCOLOUR SPF 15', 'VIVA GLAM LIPSTICK'];
    
    before('Open the page', async function(){
        await browser.maximizeWindow();
        await browser.url(`https://automationteststore.com/`); 
        
    })
    context('Searching items', ()=>{
        it('should find items', async()=>{
            await $(searchBar).click(); 
            await $(makeupCategory).click();   
            await $(searchBar).setValue(serchValue);
            await $(searchButton).click();
            const arr = await $$(searchResult).map(async (elem) => {
                return await elem.getText()
            });              
            expect (arr).toEqual(testArr);  
        })
    })
})