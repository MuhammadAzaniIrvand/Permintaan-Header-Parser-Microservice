const express = require('express');
const app = express();

// Supaya IP tetap bisa dibaca meskipun di belakang proxy
app.set('trust proxy', true);

app.get('/', (req, res) => {
  res.send('Silakan akses /api/whoami untuk melihat informasi client Anda.');
});

app.get('/api/whoami', (req, res) => {
  const ipaddress = req.ip;
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];

  res.json({
    ipaddress,
    language,
    software
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
