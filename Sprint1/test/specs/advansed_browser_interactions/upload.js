describe('Uploading file', ()=>{
    const path = 'Upload/fileToUpload.txt'
    const uploadInput = '#file-upload'
    const uploadButton = '#file-submit'
    const uploadedFiles = '#uploaded-files'


    before('Open the page', async()=>{
        await browser.maximizeWindow();
        await browser.url('https://the-internet.herokuapp.com/upload');
    })
    context('Uploading', ()=>{
        it('should upload file', async()=>{
            const remoteFilePath = await browser.uploadFile(path);
            await $(uploadInput).setValue(remoteFilePath);
            await $(uploadButton).click();            
            const result = await $(uploadedFiles).getText()
             expect(result).toEqual('fileToUpload.txt')
        })
    })
})