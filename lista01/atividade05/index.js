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

app.get('/editar/:id/:qtd', function(req, resp){
    const id = req.params.id;
    const qtd = parseInt(req.params.qtd); 
    estoque.editarProduto(id, qtd);
    resp.send(`Quantidade do produto com ID ${id} alterada para ${qtd}.`);
});

const PORT = 8080;
app.listen(PORT, function(){
    console.log(`app rodando na porta ${PORT}`);
});