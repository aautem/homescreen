const axios = require('axios')

// axios
// .get('https://api.iextrading.com/1.0/stock/market/crypto')
// .then(({ data }) => (
//   data
//   .filter(({ symbol }) => (
//     symbol === 'BTCUSDT'
//   ))
//   .forEach(currency => console.log({ currency }))
// ))
// .catch(error => console.log(error))

axios
.get('https://api.iextrading.com/1.0/stock/oprx/price')
.then(({ data }) => (
  console.log({ data })
))
.catch(error => console.log(error))
