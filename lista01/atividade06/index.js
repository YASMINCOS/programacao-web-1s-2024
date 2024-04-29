const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({ extended: true })); // Middleware para processar dados de formulário

app.get('/', (req, res) => {
    res.render('index.html');
});

app.post('/dados', (req, res) => {
    const { nome, endereco, telefone, data } = req.body;
    res.render('dados.html', { nome, endereco, telefone, data });
});

const PORT = 3080;
app.listen(PORT, function(){
    console.log(`app rodando na porta ${PORT}`);
});

