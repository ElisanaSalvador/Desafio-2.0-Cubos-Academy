const { Router } = require('express');
const { listarProdutos, detalharProduto, calcularFreteProduto } = require('./controladores/controladores');

const rotas = Router();

rotas.get('/produtos', listarProdutos);
rotas.get('/produtos/:id', detalharProduto);
rotas.get('/produtos/:id/frete/:cep', calcularFreteProduto);

module.exports = rotas;