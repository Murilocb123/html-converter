const express    = require("express");

/*Middleware de análise de corpo Node.js.*/

/*O temo Middleware é usado para agrupar todas as tecnologias em software que estão entre a aplicação final e os fornecedores de dados para esta aplicação final.*/
const bodyParser = require("body-parser");

const converterRouter = require("./routes/converter");
const converterTeste = require("./routes/nao-abra");

const PORT = 2424;
const HOST_NAME = "localhost";

const app = express();

/*Sobre o USE*/
/*A partir da versão 4 do Express, a extensibilidade é realizada por meio do uso de middlewares. 
Middleware é um bloco de código que é executado em todas as requisições ou nas que respeitam um certo padrão. 
E é respeitado a ordem de adição de cada um deles.*/
app.use(express.static("client")); //Pluga um modulo no express
//app.use(bodyParser.urlencoded({extended: true}));


app.use("/converter", converterRouter);
app.use("/nao-abra", converterTeste);
app.use(bodyParser.urlencoded({limit: '16mb', extended:true}))
app.use(bodyParser.json({limit: '16mb'}));

app.listen(PORT, ()=>{
    console.log(`Server running at ${HOST_NAME}:${PORT}`)
})



