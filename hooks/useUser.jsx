import toast from 'react-hot-toast'
import { createUserReq } from '../api/api.js'

export const useUser = () => {
  const createUser = async(data) => {
   const res = await createUserReq(data)

   console.log(res)
   if (res.err) {
    toast.error(
      res.error?.response?.data?.message ||
      'Error registering'
    )
  }

  if (!res.err) {
    toast.success(
      res.data?.message
    )
  }
  }

  return {
    createUser
  }
}