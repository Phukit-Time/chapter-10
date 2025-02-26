const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/ads', (req, res) => {
  res.json({ message: 'List of advertisements' });
});

app.listen(port, () => {
  console.log(`Advertise service running on port ${port}`);
});
