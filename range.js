// range.js
module.exports = (req, res, next) => {
  if (req.method === 'GET' && req.url.startsWith('/posts')) {
    const totalPosts = 100;  // Substitua pelo número real de posts ou uma lógica dinâmica
    const range = req.headers.range || '0-19';  // Valor padrão de range

    // Separa o range fornecido e converte para números
    const [start, end] = range.split('-').map(Number);

    // Adiciona o cabeçalho Content-Range
    res.set('Content-Range', `posts ${start}-${end}/${totalPosts}`);
    res.set('Access-Control-Expose-Headers', 'Content-Range');  // Expondo o Content-Range para CORS
  }

  if (req.method === 'GET' && req.url.startsWith('/users')) {
    const totalPosts = 100;  // Substitua pelo número real de posts ou uma lógica dinâmica
    const range = req.headers.range || '0-19';  // Valor padrão de range

    // Separa o range fornecido e converte para números
    const [start, end] = range.split('-').map(Number);

    // Adiciona o cabeçalho Content-Range
    res.set('Content-Range', `posts ${start}-${end}/${totalPosts}`);
    res.set('Access-Control-Expose-Headers', 'Content-Range');  // Expondo o Content-Range para CORS
  }

  next();  // Passa para o próximo middleware ou rota
};
