
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Providers/AuthProviders";


const usePremium = () => {
    const { user } = useContext(AuthContext)
    // console.log(user.email);
    const axiosSecure = useAxiosSecure()
    const { data: isPremium, isPending: isPremiumLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/biodata/${user?.email}`);
            console.log('from premium',res.data);
            return res.data?.status
        }
    })
    return [isPremium, isPremiumLoading]
};

export default usePremium;