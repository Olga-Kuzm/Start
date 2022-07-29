describe('Login', () => {
    const loginField = '#loginFrm_loginname';
    const passwordField = '#loginFrm_password';
    const loginButton = '[title="Login"]';

    before('open the page', async function(){
        await browser.maximizeWindow()
        await browser.url(`https://automationteststore.com/`);
        await browser.waitUntil(
            async ()=>{
                return await browser.getTitle() === 'A place to practice your automation skills!'
            }
        )
    })

    it('should login with valid credentials', async () => {

        await $('#customer_menu_top > li > a').click();              
        await $(loginField).setValue('loginname');
        await $(passwordField).setValue('password');        
        await $(loginButton).click();       
        expect (await browser.getTitle()).toBe('My Account');   

    });
});
