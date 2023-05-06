const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());

const users = [
  { id: 1, username: 'john', password: 'password' },
  { id: 2, username: 'jane', password: 'password' },
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    const token = jwt.sign({ sub: user.id }, 'your-secret-key', { expiresIn: '60s' });
    res.json({ access_token: token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Protected resource' });
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, 'your-secret-key', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.listen(3000, () => console.log('Server started on port 3000'));