# Automação de Clipagem jornalística # 

O processo de clipagem demanda tempo, principalmente por ser necessário acessar a vários sites de para coletar as informações. Nesta aplicação, com o uso do robô Puppeter, será possível realizar um Web scraping coletando as páginas principais de cada site de notícia. Sendo possível ter o resultado no formato png ou pdf.

PNG: o usuário será direcionado para as últimas notícias publicadas em cada site 

PDF: Será coletada todas as notícias da paǵina incial do site e retornar em um arquivo pdf onde cada matéria será clicável, sendo possível acessar o conteúdo no navegador. 

# Ações #

- [x] Acessar sites de notícia;
- [x] Salvar no formato png;
- [x] Salvar no formato pdf;
- [x] Pdf com notíciais clicáveis.

# Tecnologias usadas: #

- NodeJS
- Puppeteer
- VS Code


# Iniciar aplicação: #

Clonar repositório:

$ git clone https://github.com/KarllaNascimento/webScrapingNoticias.git

Instalar dependências:

- 1 - npm init -y 
- 2 - npm i puppeteer
