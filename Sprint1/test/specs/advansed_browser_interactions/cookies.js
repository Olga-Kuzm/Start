describe('Working with cookies', ()=>{
    const url = 'https://automationteststore.com/'

    const loginRegister = '#customernav a'
    const loginField = '#loginFrm_loginname';
    const passwordField = '#loginFrm_password';
    const loginButton = '[title="Login"]';

    async function login(login, password){
        await $(loginRegister).click(); 
        await $(loginField).setValue(login);
        await $(passwordField).setValue(password);        
        await $(loginButton).click();
        
    }

    before("Open the page", async()=>{
        await browser.maximizeWindow();
        await browser.url(url);
        await browser.waitUntil(async()=>{
            const cookie = await browser.getCookies();
            for(i of cookie){
                if(i.name === 'neowize_user'){
                    return true
                }
            }
        })
         
    })
    
    context('Check cookies after login', ()=>{
        it('should check cookies after unsuccessful login', async()=>{            
            const cookies = await browser.getCookies()
            login('testuser', 'testpassword');                    
            const cookiesAfterLogin = await browser.getCookies();            
            expect(cookies).toEqual(cookiesAfterLogin)

        })
        it('should check cookies after successful login', async()=>{
            await browser.pause(500)
            login('loginname', 'password'); 
            await browser.pause(1000)
            const cookiesAfterLogin = await browser.getCookies();
            let res
            for (i of cookiesAfterLogin){
                if(i.name === 'customer'){
                    res = true
                }else {continue}
            }
            
            expect(res).toEqual(true)
            
        })
    })
    context('Check cookies after removal', ()=>{
        it('should log out after removing cookies', async()=>{
            await browser.deleteCookies();
            await browser.refresh();            
            expect (await browser.getTitle()).toEqual('Account Login')
        })
    })



})