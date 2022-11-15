const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.listen(3000, () => {console.log('API server ready: http://localhost:3000')})

app.get('/', (req, res) => {
  res.send('API Node Online')
})