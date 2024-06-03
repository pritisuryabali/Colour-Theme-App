
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
let preferences = {}; // This will act as an in-memory "database"

app.get('/api/preferences/:userId', (req, res) => {
  const userId = req.params.userId;
  res.json({ color: preferences[userId] || 'default' });
});

app.post('/api/preferences/:userId', (req, res) => {
  const userId = req.params.userId;
  const { color } = req.body;
  preferences[userId] = color;
  res.json({ status: 'success', color: preferences[userId] });
});

"scripts";
 {
  "start"; "concurrently \"npm run server\" \"npm run client\"",
  "server"; "node server.js",
  "client"; "cd client && npm start"
}

