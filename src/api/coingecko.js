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
//This file is used to do an API call to coingecko.com using AJAX to GET top 10 crypto exchanges and a specific exchange in more details.