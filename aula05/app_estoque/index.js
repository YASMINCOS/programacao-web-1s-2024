const express = require('express');
const estoque = require('./src/estoque')
const app = express();

//MVC
app.get('/adicionar/:id/:nome/:qtd', function(req, resp){
      let id = req.params.id;
      let nome = req.params.nome;
      let qtd = req.params.qtd;
      let p = estoque.criarProduto(id,nome,qtd);
      estoque.adicionar(p);
      resp.send(p);
});

app.get('/listar', function(req,resp){
    resp.send(estoque.listarProdutos());
});

app.get('/remover/:id', function(req,resp){
    let id = req.params.id;
    estoque.removerProdutos(id);
    resp.send(id)
});

const PORT = 8080;
app.listen(PORT, function(){
    console.log(`app rodando na porta ${PORT}`);
});