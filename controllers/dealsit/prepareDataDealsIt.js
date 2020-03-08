const amazonParse = require('../helpers/amazonParse');
const ebayParse = require('../helpers/ebayParse');
module.exports = function prepareDataDealsIt (data) {
    let items = [];
    let offers;
    for (let i = 0; i <data.length ; i++) {
        if(data[i].hasOwnProperty('offers')){
            offers = data[i].offers;
            let amazonParseData = amazonParse(offers);
            items.push(...amazonParseData);
        }else {
            let ebayArr = data[i];
            let ebayParseData = ebayParse(ebayArr);
            items.push(...ebayParseData);
        }
    }

    return items;
};
