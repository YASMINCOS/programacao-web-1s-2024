const express = require('express');
const app = express();
const mat = require('./utils/calculadora');

// Definindo rota inicial
app.get('/', function(req, res){
    res.send('Calculadora');
});

// Rota para soma
app.get('/somar/:a/:b', function(req, res){
    let a = parseInt(req.params.a);
    let b = parseInt(req.params.b);
    let soma = mat.somar(a, b);
    res.send('Valor da soma: ' + soma);
});

// Rota para subtração
app.get('/subtrair/:a/:b', function(req, res){
    let a = parseInt(req.params.a);
    let b = parseInt(req.params.b);
    let subtracao = mat.subtrair(a, b);
    res.send('Valor da subtração: ' + subtracao);
});

// Rota para multiplicação
app.get('/multiplicar/:a/:b', function(req, res){
    let a = parseInt(req.params.a);
    let b = parseInt(req.params.b);
    let multiplicacao = mat.multiplicar(a, b);
    res.send('Valor da multiplicação: ' + multiplicacao);
});

// Rota para divisão
app.get('/dividir/:a/:b', function(req, res){
    let a = parseInt(req.params.a);
    let b = parseInt(req.params.b);
    let divisao = mat.dividir(a, b);
    res.send('Valor da divisão: ' + divisao);
});

const PORT = 8080;
app.listen(PORT, function(){
    console.log('App rodando na porta ' + PORT);
});
