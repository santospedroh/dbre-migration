// importando dependencia express
const express = require("express")
const app = express()

// host - port
const port = 8000
const host = "0.0.0.0"

// pegar banco de dados
const con = require("./database/db")

// habilitar o uso do re.body na aplicação
app.use(express.urlencoded({ extended: true }))

// utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: app,
    noCache: true
})

// configurar caminhos da aplicação (Rotas)
// página inicial
// req : Requisição
// res : Resposta

// rota index
app.get("/", (req, res) => {
    //res.send("Cheguei aqui") -- Hello World
    return res.render("index.html")
})

// rota save-book
app.post("/save-book", (req, res) => {
    
    //req.body: O corpo do form
    // console.log(req.body)

    //inserir dados no banco de dados
    const query = `
        INSERT INTO books (
            capa,
            nome,
            editora,
            link
        ) VALUES (?,?,?,?);
    `
    const values = [
        req.body.capa,
        req.body.nome,
        req.body.editora,
        req.body.link
    ]

    function afterInsertDate(err) {
        if(err) {
            console.log(err)
            return res.send("Erro no cadastro!")
        }

        console.log("Cadastrado com sucesso")
        console.log(this)

        return res.render("index.html", {saved: true})
    }

    con.query(query, values, afterInsertDate)

})

// rota search-results
app.get("/search", (req, res) => {

    const search = req.query.search

    if(search == "") {
        // pesquisa vazia
        return res.render("index.html", {total: 0})
    }

    // pegar os dados do banco de dados
    con.query(`SELECT * FROM books`, function (err, result) {
        if (err) {
            console.error('Erro ao conectar no banco de dados: ' + err.stack);
            return;
        }
        console.log("Registros encontrados: ")
        console.log(result)

        const total = result.length

        // mostrar a página html com os dados do banco de dados
        return res.render("index.html", {books: result, total: total})
    })

 })

// iniciar aplicacao
app.listen(port, host)
console.log(`Aplicacao executando em http://${host}:${port}`)