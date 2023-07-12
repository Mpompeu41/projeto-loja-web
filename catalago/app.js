const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// Configurar a pasta "public" como pasta estática
app.use(express.static(path.join(__dirname, 'public')));

// Definir as rotas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/cadastro', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'cadastro.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contato.html'));
});

app.get('/compras', (req, res) => {
  fs.readFile(path.join(__dirname, 'views', 'compras.html'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao ler o arquivo de compras.');
    } else {
      res.send(data);
    }
  });
});

app.get('/caduser', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'caduser.html'));
});

app.get('/deletar', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'deletar.html'));
});

app.get('/detalhes', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'detalhes.html'));
});

app.get('/editar', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'editar.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.get('/sobre', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'sobre.html'));
});

app.post('/cadastro', (req, res) => {
  // Lógica para processar o formulário de cadastro
  res.send('Formulário de cadastro enviado!');
});

app.post('/compras', (req, res) => {
  // Lógica para processar os dados do formulário de compra e enviar e-mail
  // ...
  // Envie uma resposta confirmando a compra
  res.send('Compra confirmada!');
});

app.post('/caduser', (req, res) => {
  // Lógica para processar o formulário de cadastro de usuário
  res.send('Formulário de cadastro de usuário enviado!');
});

app.post('/deletar', (req, res) => {
  // Lógica para processar a exclusão de um item
  res.send('Item deletado!');
});

app.post('/editar', (req, res) => {
  // Lógica para processar o formulário de edição
  res.send('Formulário de edição enviado!');
});

app.post('/login', (req, res) => {
  // Lógica para processar o formulário de login
  res.send('Formulário de login enviado!');
});

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
