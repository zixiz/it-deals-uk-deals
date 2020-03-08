module.exports = function ebayParse(ebayArr) {
    let items = [];
    for (let j = 0; j <ebayArr.length ; j++) {
        items.push({
            provider:'ebay',
            title:ebayArr[j].title,
            url:ebayArr[j].url,
            image:ebayArr[j].imageURL
        });
    }
    return items;
}
