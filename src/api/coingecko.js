// export const getTopExchanges = () => {
//   let exchanges = fetch(
//     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
//   )
//     .then((resp) => resp.text())
//     .then((result) => (exchanges = result));

// console.log(exchanges, "hey")

//   return exchanges;
// };


import axios from "axios";

const onGlobalSuccess = (response) => {
  return response.data
}

const onGlobalError = (error) => {
  return Promise.reject(error)
}

export const getTopExchanges = () => {
  const config = {
    method: 'get',
    url: 'https://api.coingecko.com/api/v3/exchanges?per_page=10',
  }

  return axios(config).then(onGlobalSuccess).catch(onGlobalError)
}

export const getExchangeById = (id) => {
  const config = {
    method: 'get',
    url: 'https://api.coingecko.com/api/v3/exchanges/' + id,
  }

  return axios(config).then(onGlobalSuccess).catch(onGlobalError)
}