exports.calcular = (num1, num2, operador) => {
    switch (operador) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num1 / num2;
      default:
        throw new Error('Operador inválido');
    }
  };
  