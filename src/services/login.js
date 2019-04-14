import axios from '@/utils/axios.conf'

const login = data => axios.post('/admin/login', data)

export { login } 