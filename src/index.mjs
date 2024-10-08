import express from 'express';

const frontend = express();

frontend.use(express.static('public'));

frontend.listen(4000, () => {
  console.log('Frontend started on port 4000');
});

const backend = express();

backend.get('/', (req, res) => {
  res.json({ message: 'hello' });
});

backend.listen(4001, () => {
  console.log('Backend started on port 4001');
});
