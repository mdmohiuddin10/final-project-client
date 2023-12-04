import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";




const SuccessStory = () => {
    const axiosPublic = useAxiosPublic()


    const { data: reviewData = [] } = useQuery({
        queryKey: ['reviewData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/review')
            return res.data;
        }
    })
    console.log(reviewData);


    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th>
                                #
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Male Biodata Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Female Biodata Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                View Story
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviewData.map((user, index) => <tr key={user._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {index + 1}
                                </th>
                                <td className="px-6 py-4">
                                    {user.selfBiodataId}
                                </td>
                                <td className="px-6 py-4">
                                    {user.partnerBiodataId}
                                </td>
                                <td className="px-6 py-4">
                                    {/* <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><FaBookOpen></FaBookOpen></button> */}
                                    <>
                                        <button data-modal-target="modalID" data-modal-toggle="modalID" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                                            Toggle modal
                                        </button>


                                     

                                    </>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default SuccessStory;






