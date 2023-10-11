const express = require("express");
const properties = require("../package.json");

const converterRoute = express.Router();

converterRoute.get("/", (req, res)=>{
    res.send('<h1>Tu é gay mano?</h1>')
})


module.exports = converterRoute;