import axios from 'axios'
// import store from '@/store'
// import { getToken } from '@/utils/auth'


const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, 
  timeout: 5000 
})

// request interceptor
service.interceptors.request.use(
  config => {
  console.log(config)
    
    //if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
     // config.headers['X-Token'] = getToken()
   // }
    return config
  },
  error => {
 
    console.log(error) 
    return Promise.reject(error)
  }
)


service.interceptors.response.use(
  response => {
    const res = response.data
    return res

  },
  error => {
    console.log('err' + error) 
    return Promise.reject(error)
  }
)

export default service
