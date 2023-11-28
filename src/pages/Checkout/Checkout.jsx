import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../payments/CheckoutForm";

// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_gatway_PK);


const Checkout = () => {
    const biodata = useLoaderData()
    const [data, setData] = useState()
    const { user } = useContext(AuthContext)
    // const axiosSecure = useAxiosSecure()

  
   
    useEffect(()=>{
        fetch('http://localhost:5000/biodata')
        .then(res=> res.json())
        .then(data => setData(data))
    },[])

    const newData = data?.find(datam =>datam.email === user?.email)
    // console.log(newData);

    


    return (
        <div>
            <h2>hlew</h2>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Requested Id:</label>
                    <input
                    defaultValue={biodata.biodataId} readOnly type="text" id="requestedId" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Requester Id:</label>
                    <input 
                    defaultValue={newData?.biodataId} readOnly type="text" id="requesterId" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Requester Id:</label>
                    <input
                    defaultValue={newData?.email} readOnly type="text" id="requesterEmail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                </div>
                <Elements stripe={stripePromise}>
                  <CheckoutForm biodata={biodata} newData={newData}></CheckoutForm>
                </Elements>
        
        </div>
    );
};

export default Checkout;