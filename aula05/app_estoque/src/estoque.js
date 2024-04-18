let produtos = [];

function criarProduto(id, nome, qtd){
    let p ={
        id: id,
        nome: nome,
        qtd: qtd
    };
    return p;
};

function adicionar(p){
    produtos.push(p);
};

function listarProdutos(){
    return produtos;
};

function removerProdutos(id){
    produtos = produtos.filter((p) =>{
       return p.id != id;
    });
};

module.exports={
    criarProduto,
    adicionar,
    listarProdutos,
    removerProdutos
};