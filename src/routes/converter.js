const express = require("express");
const puppetterUtils = require("../utils/puppeteer_utils.js");

const converterRoute = express.Router();

converterRoute.post("/", async (req, res)=>{
    const iIni = new Date().getTime(); 
    console.log('Data incial ' + new Date().toString());
    console.log("Inciando conversão");
    console.log(req.body.base64)
    const result = await puppetterUtils(req);
    res.send('deu boa');
    console.log('Data Final ' + new Date().toString());
    console.log('Tempo de execução '+ parseInt((new Date().getTime() - iIni) / 10) / 100 +'s');
})


module.exports = converterRoute;