describe('Login with invalid credentials', function(){
    const loginField = '#loginFrm_loginname';
    const passwordField = '#loginFrm_password';
    const loginButton = '[title="Login"]';
    const alertMsg = '.alert-danger'

    before('Open the page', async function(){
        await browser.maximizeWindow()
        await browser.url('https://automationteststore.com/');
        await browser.waitUntil(
            async ()=>{
                return await browser.getTitle() === 'A place to practice your automation skills!'
            }
        )

    });
    it('should not login with invalid credentials', async ()=>{
        await $('#customer_menu_top > li > a').click(); 
        await $(loginField).setValue('invalidloginname');
        await $(passwordField).setValue('password');        
        await $(loginButton).click();
        await expect ($(alertMsg)).toBeDisplayed();
        await expect ($(alertMsg)).toHaveTextContaining('Error: Incorrect login or password provided.')

    })
})