const express = require('express');
const app = express();

// Gunakan trust proxy jika Anda menjalankan server di belakang proxy (seperti di Replit atau Vercel)
app.set('trust proxy', true);

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
