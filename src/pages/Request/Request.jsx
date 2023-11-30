import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import CheckoutForm from "../payments/CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_gatway_PK);
const Request = () => {
    const { id } = useParams()
    const requestData = useLoaderData()
    const { user } = useContext(AuthContext)


    const biodataId = requestData.filter(data => data._id === id)
    console.log('biodataId',biodataId);
    const newData = requestData.filter(data => data.email === user?.email)
    console.log(newData);

    return (
        <div>
            <SectionTitle heading={'Checkout'}></SectionTitle>

            <h2 className="text-xl font-semibold mb-5 text-center">You have to pay 500 tk For every Request</h2>

            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Requested Id:</label>
                <input
                    defaultValue={biodataId[0].biodataId} readOnly type="text" id="requestedId" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Requester Id:</label>
                <input
                    defaultValue={newData[0]?.biodataId} readOnly type="text" id="requestedId" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
            </div>

            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Requester Id:</label>
                <input
                    defaultValue={user?.email} readOnly type="text" id="requesterEmail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
            </div>
            <Elements stripe={stripePromise}>
                <CheckoutForm biodataId={biodataId[0]} newData={newData[0]}></CheckoutForm>
            </Elements>

        </div>
    );
};

export default Request;