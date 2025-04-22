const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');  // Caminho do banco de dados JSON
const middlewares = jsonServer.defaults();

// Usando CORS para expor o cabeçalho Content-Range
server.use(cors({
  exposedHeaders: ['Content-Range']  // Expondo o cabeçalho Content-Range
}));

// Usando middlewares padrão e o seu middleware customizado
server.use(middlewares);
server.use(require('./range'));  // Aplica o middleware range.js

// Configura a rota do json-server para o banco de dados
server.use(router);

// Inicia o servidor na porta 5000
server.listen(5000, () => {
  console.log('JSON Server is running on http://localhost:5000');
});
