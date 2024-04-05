const express = require('express');
const app = express();
const mat = require('./util/matematica')
//definindo rotas 

app.get('/', function(req, res){
    res.send('pagina inicial');
  
});

app.get('/ola', function(req, res){
   res.send('ola mundo!');
});

app.get('/ola/:n', function(req, res){
    let nome= req.params.n;
    res.send('ola mundo!' + nome);
 }); 

 app.get('/vetificar-numero-primo/:n', function(req, res){
    let n= req.params.n;
    let ehPrimo = mat.verificarNumeroPrimo(n);
    res.send(ehPrimo);
 }); 


const PORT = 8080;
app.listen(PORT, function(){
    console.log('app rodando na porta ' + PORT);
});