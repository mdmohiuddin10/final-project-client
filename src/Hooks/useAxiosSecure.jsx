import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
    const navigate = useNavigate()
    const {logOut} = useContext(AuthContext)

    // request interceptor to add authorization header for every secure call to the api
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        // console.log('requset stoped by inter...', token);
        config.headers.authorization = `Bearer ${token}`;
        return config
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      })

    //   intercepts 402 and 403
    axiosSecure.interceptors.response.use(function(response) {
        return response;
    }, async (error)=>{
        const status = error.response.status;
        console.log('status error', status);
        if(status === 401 || status === 403){
            await logOut();
            navigate('/login');
        }
        return Promise.reject(error)
    })



    return axiosSecure
};

export default useAxiosSecure;