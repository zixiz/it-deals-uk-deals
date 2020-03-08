module.exports = function amazonParse(offers) {
    let items = [];
    for (let j = 0; j <offers.length ; j++) {
        items.push({
            provider:'amazon',
            title:offers[j].product_title,
            url:offers[j].product_url,
            image:offers[j].img
        });
    }
    return items;
}
