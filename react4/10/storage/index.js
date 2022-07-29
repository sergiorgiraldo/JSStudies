const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3100 || process.env.PORT;
const statsRouter = require('./routes/stats');

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.use(bodyParser.urlencoded({extended:true})); //THIS IS ESSENTIAL TO POST, NEED THIS TO RECEIVE THE JSON FROM THE BODY

app.use('/stats', statsRouter);

app.listen(port, () => {
  console.log(`Stats app listening at http://localhost:${port}`);
});