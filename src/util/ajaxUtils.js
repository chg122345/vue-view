import axios from 'axios'

// create an axios instance
const ajax = axios.create({
  baseURL: '/api', // api 的 base_url
  timeout: 5000 ,// request timeout
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'  //请求头
  },
})

// request interceptor
ajax.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
ajax.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default ajax
