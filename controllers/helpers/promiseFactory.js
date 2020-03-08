const axios = require('axios');
module.exports = async function promiseFactory (arr) {
    let promises = [];
    for (let i = 0; i < arr.length ; i++) {
        promises.push(axios.get(arr[i]).then(r=> r.data).catch(err=> err))
    }

    return promises;

};
