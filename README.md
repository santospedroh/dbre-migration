# Trabalho sobre Migrations 🎲

Trabalho sobre Migrations para a disciplina DBRE ministrada pelo professor [Walter Pereira de Carvalho](https://www.linkedin.com/in/walterpcarvalho/) no curso DevOps Engineering and Cloud Solutions da Mackenzie.

## Sobre o projeto 💻

Trata-se de uma aplicação simples para cadastro e consulta de catálogo de livros onde será apresentado o contexto de database migrations.
Foi utilizado a biblioteca [mysql-migration](https://www.npmjs.com/package/mysql-migrations) neste projeto.

## Tecnologias usadas 👨‍💻

- Node.js
- Docker
- NPM
  - Express
  - Nodemon
  - Nunjucks
  - MySQL

## Instalação 🛠

### Node.js

1. Vá ao site <https://nodejs.org/en/download/>;
2. Escolha a versão que deseja de acordo com o seu Sistema Operacional;
3. Abra o executável e prossiga no processo de instalação.
    - OBS: O NPM já vem acompanhado do Node.js

### Dependências do Node.js

1. Express: $ `npm install express`
2. Nodemon: $ `npm install nodemon`
3. Nunjucks: $ `npm install nunjucks`
4. MySQL: $ `npm install mysql`
5. Migrations: $ `npm install mysql-migrations`

## Executando  🚀

### Docker container MySQL
* Executar o container do MySQL5.6: $ `docker run --rm -p 3306:3306 --name mysql --net=my-net -e MYSQL_ROOT_PASSWORD=rootpass -e MYSQL_USER=db_user -e MYSQL_PASSWORD=db_pass -e MYSQL_DATABASE=library -d mysql:5.6.51`
### Migration
* Executar a migration para criar a base de dados: $ `node ./src/migration.js up`
### Running Aplication
* Executar a aplicação subindo o servidor express: $ `node ./src/app_books.js` 

---

Made with ♥ by Pedro Santos :wave: [Get in touch!](https://www.linkedin.com/in/santospedroh/)