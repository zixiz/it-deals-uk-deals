const axios = require('axios');
const prepareDataDealsIt = require('./prepareDataDealsIt');

module.exports = function dealsItLogic (data,req, res) {

    axios.all(data)
        .then(function (responses){
            let readyData = prepareDataDealsIt(responses);
            res.json({items:readyData});
        })

};
