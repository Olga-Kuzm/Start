/*download file (also you can change the download folder in chrome capabilities, and then check file in the folder) -*/
const fs = require ('fs')
describe('Downloading file', ()=>{
    
    const elem = '[href="download/fileToUpload.txt"]'
    const pathToDirectory = 'TemporaryDownloads'

    before('Open the page', async ()=>{
        await browser.maximizeWindow()
        await browser.url('https://the-internet.herokuapp.com/download  ')
        

    })
    context('Downloading and checking file', ()=>{
        it('should download file',async()=>{
            await $(elem).click()
            await browser.pause(1000)
        })
        it('should check downloaded file', async()=>{
            fs.readdir(pathToDirectory, function(err, items) {
                expect(items.length).toEqual(1)
                expect(items[0]).toEqual('fileToUpload.txt')
            });
        })
    })
})