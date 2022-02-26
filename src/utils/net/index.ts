import Request from './request'

const request = new Request({
  baseURL: 'https://bot.k2t3k.tk/api/',
  timeout: 3000,
  interceptorHooks: {
    requestInterceptor: (config) => {
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res.data
    },
    responseInterceptorCatch: (err) => {
      return err
    },
  },
})

export { request }
