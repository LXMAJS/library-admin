import Axios from 'axios'

const axios = Axios.create({
    baseURL: '/api',
    timeout: 10000
})
// axios 基本配置
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

axios.interceptors.response.use(
    error => {
        console.error("捕获到了新的异常！")
        // 捕获异常并打印到控制台
        console.error(error)
    }
)

export default axios 