const express =  require('express');
const bodyParser = require('body-parser');
const serverless = require('serverless-http');

const rates = require('./routes/api/rates');

const app =  express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const welcome = '<h3>Welcome to Enye 2021 Backend Task 1</h3><p>Click <a href="https://enye-rates-app.herokuapp.com/api/rates/base=USD/currency=EUR,CZK,GBP">here</a> or copy this link <b>https://enye-rates-app.herokuapp.com/api/rates/base=USD/currency=EUR,CZK,GBP</b> and make a GET request on Postman to check your rates</p><p>You can modify the <b>base</b> and <b>currency</b> parameters in the url to check your rates</p><p>Thanks!</p>';

app.get('/', (req, res) => res.send(welcome));

app.use('/api/rates', rates);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));