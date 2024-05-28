const express = require('express');
const path = require('path');
const app = express();
const calculadoraRoutes = require('./src/routes/calculadoraRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'src', 'views')));
app.use('/', calculadoraRoutes);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
