
module.exports = function chooseEnv (DOMAIN_CODE) {
    switch (DOMAIN_CODE) {
        case 'DEALS_IT':
            return {data:'DEALS_IT',
                url:[`https://2btgsxpsm0.execute-api.us-east-1.amazonaws.com/dev/amazon_it?userName=${process.env.DEALS_IT_AMAZON_USER_NAME}&password=${process.env.DEALS_IT_AMAZON_PASSWORD}&keyword=sony`,
                        `https://2btgsxpsm0.execute-api.us-east-1.amazonaws.com/dev/ebay_it?userName=${process.env.DEALS_IT_EBAY_USER_NAME}&password=${process.env.DEALS_IT_EBAY_PASSWORD}&q=sony`]};
            break;

        case 'DEALS_UK':
            return {data:'DEALS_UK',
                        url: `https://2btgsxpsm0.execute-api.us-east-1.amazonaws.com/dev/amazon_uk?userName=${process.env.DEALS_UK_AMAZON_USER_NAME}&password=${process.env.DEALS_UK_AMAZON_PASSWORD}&q=sony`};
            break;


        default:
            return {data:"Unknown Env",
            url: ""};
    }
};
