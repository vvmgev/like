const express = require('express');
const bodyParser = require('body-parser');
const PORT = require('./config').PORT;
const app = express();

app.use(bodyParser.json());

app.get('/', function (req, res) {
   res.send('Hello World');
})
app.listen(PORT, () => console.log(`app listening at port ${PORT}`));