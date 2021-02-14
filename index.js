const { default: axios } = require("axios")

const api = 'https://api.huobi.pro'
const getKline = '/market/history/kline'

axios.get(`${api}${getKline}`, {
  params: {
    symbol: 'mdxusdt',
    period: '5min',
    size: 288
  }
}).then(res => {
  let total = 0
  res.data.data.forEach(val => {
    total += val.low
  })
  console.log(total/288)
}).catch(err => {
  console.log(err)
})