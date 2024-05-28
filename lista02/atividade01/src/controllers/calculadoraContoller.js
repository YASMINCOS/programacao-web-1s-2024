const calculadora = require('../model/calculadora');

exports.calcular = (req, res) => {
  const { num1, num2, operador } = req.body;

  if (isNaN(num1) || isNaN(num2)) {
    return res.redirect('/?error=Valores%20não%20numéricos');
  }

  const resultado = calculadora.calcular(Number(num1), Number(num2), operador);
  res.redirect(`/resultado.html?resultado=${resultado}`);
};
