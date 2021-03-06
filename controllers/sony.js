const dealsItLogic = require('./dealsit/deals_it_logic');
const dealsUkLogic = require('./dealsuk/deals_uk_logic');
const chooseEnv = require("../constant");
const promiseFactory = require('./helpers/promiseFactory');
const errorNotFound = require('./404');
module.exports = async function sony (req, res) {

    let environmentVar = chooseEnv(process.env.DOMAIN_CODE);

    switch (environmentVar.name) {
        case 'DEALS_IT':
            let promises = await promiseFactory(environmentVar.url);
            dealsItLogic(promises,req, res);
            break;
        case 'DEALS_UK':
            dealsUkLogic(environmentVar.url,req, res);
            break;

        default:
            errorNotFound(req,res);
    }



};
