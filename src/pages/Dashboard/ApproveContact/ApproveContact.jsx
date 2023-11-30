import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";


const ApproveContact = () => {
    const axiosSecure = useAxiosSecure()


    const { data: requestData = [], refetch } = useQuery({
        queryKey: ['requestData'],
        queryFn: async () => {
            const res = await axiosSecure.get('/requset')
            return res.data;
        }
    })

    console.log('request',requestData);


    const handleApprove = (user) => {
        axiosSecure.patch(`/requset/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "ok, request is Approved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }



    return (
        <div className="">
            <SectionTitle heading={'Approve Contact Request'}></SectionTitle>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-5">
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
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            requestData.map((user, index) => <tr key={user._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {index + 1}
                                </th>
                                <td className="px-6 py-4">
                                    {user.RequesterName}
                                </td>
                                <td className="px-6 py-4">
                                    {user.RequesterEmail}
                                </td>
                                <td className="px-6 py-4">
                                    {user.RequesterBiodataId}
                                </td>
                                <td className="px-6 py-4">
                                    {user.status === 'approved' ? "Approved" :
                                        <button onClick={() => handleApprove(user)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Approve request</button> }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ApproveContact;