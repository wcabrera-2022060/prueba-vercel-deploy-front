import axios from 'axios'

const apiUrl = axios.create({
  baseURL: 'https://prueba-vercel-deploy-back.vercel.app/',
  timeout: 5000
})

export const createUserReq = async(data) => {
  try {
    return await apiUrl.post('/create', data)
  } catch (error) {
    return {
      err: true,
      error
    }
  }
}