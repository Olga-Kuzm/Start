
describe('Shopping cart flow', function(){
    const loginRegister = '#customernav a'
    const loginField = '#loginFrm_loginname';
    const passwordField = '#loginFrm_password';
    const loginButton = '[title="Login"]';    
    const accessoriesMenuItem = '.nav-pills > li:nth-child(2)';
    const shoesMenuItem = '#categorymenu > nav > ul > li:nth-child(2) > div > ul:nth-child(1) > li:nth-child(1) > a';
    const shoeTitle = '[title="Ruby Shoo Womens Jada T-Bar"]';
    const sizeOption = '#option346';
    const sizeValue = 'option[value="758"]';
    const addToCartButton = '.cart';
    const cartTitle = '.align_left > a';
    const carttitleSmall = '.align_left small';
    const shoeNameForCheck = 'Ruby Shoo Womens Jada T-Bar';
    const shoeSizeForCheck = 'Color&Size UK 6 / White';
    const cartQuantity = 'input#cart_quantity117c392653d989af6c2fb05fa89d0ad4da9'
    const cartUpdateButton = '#cart_update'
    const shoppingCart = '.contentpanel'
    const emptyCartText = 'Your shopping cart is empty!\nContinue'
   
    

    
    before('login', async function(){
        await browser.maximizeWindow()
        await browser.url(`https://automationteststore.com/`);        
        await $(loginRegister).click(); 
        await $(loginField).setValue('loginname');
        await $(passwordField).setValue('password');        
        await $(loginButton).click();

    })
    context('Adding goods', function(){
        it('should add goods to cart', async function(){
            await $(accessoriesMenuItem).moveTo();
            await $(shoesMenuItem).click();        
            await $(shoeTitle).click()
            await $(sizeOption).click();
            await $ (sizeValue).click();        
            await $(addToCartButton).click();
            await expect ($(cartTitle)).toHaveText(shoeNameForCheck);
            await expect ($(carttitleSmall)).toHaveText(shoeSizeForCheck)
    
        });

    })
    context('Deleting goods', function(){
        it('should delete goods from cart', async function(){
            await $(cartQuantity).setValue('0');
            await $(cartUpdateButton).click();            
            await expect ($(shoppingCart)).toHaveText(emptyCartText)
        })

    })
    
})