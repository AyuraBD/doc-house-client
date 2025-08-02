import axios from "axios"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import useAuth from '../../Hooks/useAuth/useAuth'

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,   
})
const useAxiosSecure = () => {
  const {logOut} = useAuth();
  const navigate = useNavigate();
  
  useEffect(()=>{
    axiosSecure.interceptors.response.use(res =>{
      return res;
    },err =>{
      if(err.status === 401 || err.status === 403){
        logOut()
        .then(() =>{
          navigate('/signin')
        })
        .catch(()=>{})
      }
      return Promise.reject(err);
    })
  },[])
  
  return axiosSecure
}

export default useAxiosSecure