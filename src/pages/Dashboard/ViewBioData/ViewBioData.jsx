import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
// import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const ViewBioData = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    // const axiosPublic = useAxiosPublic()

    const { data: data = [] } = useQuery({
        queryKey: ['data', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/biodata/${user?.email}`)
            // console.log(res.data);
            return res.data
        }
    })


    const handleUpdate = d => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, send it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/biodata/admin/${d._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount > 0) {
                            // refetch()
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "ok, request send to the admin",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }
        });
    }





    return (
        <div className="">
            {
                data.map(d => <div key={d._id} className="flex pt-10 gap-8 bg-gradient-to-r from-pink-500 to-violet-500">
                    <div>
                        <img className="px-5 py-5" src={d.image} alt="" />
                    </div>
                    <div className="flex-1">
                        <div className="relative px-10 rounded-lg overflow-x-auto">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Title
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Value
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Name
                                        </th>
                                        <td className="px-6 py-4">
                                            {d.name}
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Gender
                                        </th>
                                        <td className="px-6 py-4">
                                            {d.gender}
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Date of birth
                                        </th>
                                        <td className="px-6 py-4">
                                            {d.date}
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Height
                                        </th>
                                        <td className="px-6 py-4">
                                            {d.height}
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Weight
                                        </th>
                                        <td className="px-6 py-4">
                                            {d.weight}
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Age
                                        </th>
                                        <td className="px-6 py-4">
                                            {d.age}
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Occupation
                                        </th>
                                        <td className="px-6 py-4">
                                            {d.occupation}
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Race
                                        </th>
                                        <td className="px-6 py-4">
                                            {d.race}
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Father Name
                                        </th>
                                        <td className="px-6 py-4">
                                            {d.fathersName}
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Mothers Name
                                        </th>
                                        <td className="px-6 py-4">
                                            {d.mothersName}
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Permanent Division
                                        </th>
                                        <td className="px-6 py-4">
                                            {d.permanentDivision}
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Present Division
                                        </th>
                                        <td className="px-6 py-4">
                                            {d.presentDivision}
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Expected Partner Height
                                        </th>
                                        <td className="px-6 py-4">
                                            {d.expectedHeight}
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Expected Partner Age
                                        </th>
                                        <td className="px-6 py-4">
                                            {d.partnerAge}
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Expected Partner Weight
                                        </th>
                                        <td className="px-6 py-4">
                                            {d.expectedWeight}
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Contact Email
                                        </th>
                                        <td className="px-6 py-4">
                                            {d.email}
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Mobile Number
                                        </th>
                                        <td className="px-6 py-4">
                                            {d.number}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <button onClick={() => handleUpdate(d)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-5 "> Make biodata to premium</button>
                    </div>

                </div>
                )
            }
        </div>
    );
};

export default ViewBioData;