
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Providers/AuthProviders";


const useAdmin = () => {
    const { user } = useContext(AuthContext)
    // console.log(user.email);
    const axiosSecure = useAxiosSecure()
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            // console.log(res.data);
            return res.data?.admin
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;