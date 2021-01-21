const express =  require('express');
const bodyParser = require('body-parser');
const serverless = require('serverless-http');

const rates = require('./routes/api/rates');

const app =  express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/api/rates', rates);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));