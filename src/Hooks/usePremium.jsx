import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";


const usePremium = () => {
    const {user} = useContext(AuthContext)
  
   // console.log(user.email);
   const axiosSecure = useAxiosSecure()
   const {data: isPremium, isPending: isPremiumLoading} = useQuery({
      queryKey: [user?.email, 'isPremium'],
      queryFn: async()=>{
         const res =await axiosSecure.get(`/biodata/admin/${user?.email}`);
         // console.log(res.data);
         return res.data?.admin
      }
   })
   return [isPremium, isPremiumLoading]
};

export default usePremium;