const express = require('express');
const app = express();
const port = 3100 || process.env.PORT;
const statsRouter = require('./routes/stats');

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.use('/stats', statsRouter);

app.listen(port, () => {
  console.log(`Stats app listening at http://localhost:${port}`);
});