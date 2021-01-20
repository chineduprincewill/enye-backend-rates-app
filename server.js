const express =  require('express');

const rates = require('./routes/api/rates');

const app =  express();

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/api/rates', rates);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));