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

function editarProduto(id, novaQtd){
    produtos.forEach((p) => {
        if (p.id === id) {
            p.qtd = novaQtd;
        }
    });
};

module.exports={
    criarProduto,
    adicionar,
    listarProdutos,
    removerProdutos,
    editarProduto
};