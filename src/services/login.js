import axios from '@/utils/axios.conf'

const login = data => axios.post('/user/adminlogin', data)

export { login } 