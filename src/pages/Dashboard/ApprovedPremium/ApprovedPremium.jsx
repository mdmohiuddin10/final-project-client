import { FaUsers } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
// import { useState } from "react";


const ApprovedPremium = () => {
    const requestData = useLoaderData()
    const axiosSecure = useAxiosSecure()
    // const [loading, setLoading] = useState(true);
    const requsetAppove = requestData.filter(requst => requst.status === 'pending')
    // console.log(requsetAppove);


    const handleMakePremium = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/biodata/${user.email}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount > 0) {
                            // refetch()
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: `${user.name} is premium now!`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }
        });
    }


    return (
        <div>
            <SectionTitle heading={'Approve Premium'}></SectionTitle>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th>
                                #
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Biodata Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Make Premium
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            requsetAppove.map((user, index) => <tr key={user._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {index + 1}
                                </th>
                                <td className="px-6 py-4">
                                    {user.name}
                                </td>
                                <td className="px-6 py-4">
                                    {user.email}
                                </td>
                                <td className="px-6 py-4">
                                    {user.biodataId}
                                </td>
                                <td className="px-6 py-4">
                                    {user.status === 'premium' ? "Premium" :
                                        <button onClick={() => handleMakePremium(user)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><FaUsers></FaUsers></button>}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ApprovedPremium;