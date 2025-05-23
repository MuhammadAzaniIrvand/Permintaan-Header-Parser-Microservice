const express = require('express');
const app = express();

// Set port dari environment variable atau default ke 3000
const port = process.env.PORT || 3000;

// Route untuk /api/whoami
app.get('/api/whoami', (req, res) => {
  const ipaddress = req.ip || req.connection.remoteAddress;
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];

  res.json({
    ipaddress,
    language,
    software
  });
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
