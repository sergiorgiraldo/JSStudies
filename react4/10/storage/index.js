const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const port = 3100 || process.env.PORT;
const statsRouter = require('./routes/stats');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})); 

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.use('/stats', statsRouter);

app.listen(port, () => {
  console.log(`Stats app listening at http://localhost:${port}`);
});