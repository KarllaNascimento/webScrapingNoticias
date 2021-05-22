const puppeteer = require('puppeteer');

console.log("Olá! Estou acessando os sites e coletanado as informações. 🤖📔");

(async () => {
const browser = await puppeteer.launch();
const page = await browser.newPage();
const page2 = await browser.newPage();
const page3 = await browser.newPage();
const page4 = await browser.newPage();
const page5 = await browser.newPage();



await page.goto('https://www.folhape.com.br/');
await page2.goto('https://www.diariodepernambuco.com.br/');
await page3.goto('https://g1.globo.com/pe/pernambuco/');
await page4.goto('https://brasil.elpais.com/');
await page5.goto('https://www.nytimes.com/');


await page.pdf({ path:'folha.pdf'});
await page2.pdf({ path:'diario.pdf'});
await page3.pdf({ path:'cartacapital.pdf'});
await page4.pdf({ path:'elpais.pdf'});
await page5.pdf({ path:'nytimes.pdf'});

await browser.close();
})();
