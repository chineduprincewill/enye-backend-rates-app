const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

router.get('/base=:base/currency=:currency', (req, res) => {
    const base = req.params.base;
    const currency = req.params.currency;
    const conversionCurrencies = currency.split(",");

    var url = `https://api.exchangeratesapi.io/latest?base=${base}`;
    //var common = [];
    var outputCurrencies = {};

    fetch(url)
        .then(res => res.json())
        .then(results => {

            for(reslt in results.rates){

                conversionCurrencies.forEach(currency=>{
                    if(reslt.includes(currency)){
                        outputCurrencies[currency] = results.rates[reslt];
                    }
                });
            }

            res.json({ 
                "results": {
                    "base": results.base,
                    "date": results.date,
                    "rates": outputCurrencies
                }
            })
        })
        .catch(err => {
            res.send(err)
        })
    
});

module.exports = router;