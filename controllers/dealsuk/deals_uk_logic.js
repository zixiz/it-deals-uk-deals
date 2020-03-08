const axios = require('axios');
const amazonParse = require('../helpers/amazonParse');
module.exports = function dealsUkLogic (url ,req, res) {

    axios.get(url).then(function (resonse) {
        let amazon = resonse.data;
        let finalData = amazonParse(amazon.offers);
        res.json({items:finalData});
    }).catch(function (err) {

    })

};
