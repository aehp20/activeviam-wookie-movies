import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    'Authorization': 'Bearer Wookie2019'
  }
})

export default axiosInstance
