const puppeteer = require('puppeteer');

console.log("Olá! Estou acessando os sites e coletanado as informações. 🤖📔");

(async () => {
const browser = await puppeteer.launch();
const page = await browser.newPage();
const page2 = await browser.newPage();
const page3 = await browser.newPage();
const page4 = await browser.newPage();
const page5 = await browser.newPage();

await page.setViewport({
   width: 1920,
   height: 1080,
   deviceScaleFactor: 1,
});

await page.goto('https://www.folhape.com.br/noticias/ultimas-noticias/');
await page2.goto('https://www.diariodepernambuco.com.br/ultimas/capa_ultimas.html');
await page3.goto('https://g1.globo.com/pe/pernambuco/');
await page4.goto('https://brasil.elpais.com/');
await page5.goto('https://www.nytimes.com/');


await page.screenshot({ path: 'folha.png' });
await page2.screenshot({ path: 'diario.png' });
await page3.screenshot({ path: 'cartacapital.png' });
await page4.screenshot({ path: 'elpais.png' });
await page5.screenshot({ path: 'nytimes.png' });

await browser.close();
})();
