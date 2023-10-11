const puppeteer = require("puppeteer");
const { decode } = require("base-64");
const fs = require('fs');

const printPage = async(fileContentBase64) =>{
    const browser  = await puppeteer.launch({
        args: [ 
            '--no-sandbox',
            '--disable-setuid-sandbox'
        ]}
    );
    console.log('print page');
    const page = await browser.newPage();
    await page.setContent(decode(fileContentBase64));
    await page.emulateMediaType('screen');
    console.log('Gerando PDF');
    const pdf = await page.pdf({
        printBackground: true,
        format: 'A4'
    });
    await browser.close();

    fs.writeFileSync(path.join(__dirname, '/test/resultado.pdf'), pdf);
    return true;

}

module.exports = printPage;
