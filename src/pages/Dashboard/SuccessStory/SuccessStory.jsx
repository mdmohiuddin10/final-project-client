import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { FaBookOpen } from "react-icons/fa";



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


                                        {/* <!--Main modal-- > */}
                                        <div id="modalID" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                                            <div className="relative p-4 w-full max-w-2xl max-h-full">
                                                {/* <!-- Modal content --> */}
                                                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                                    {/* <!-- Modal header --> */}
                                                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                            Terms of Service
                                                        </h3>
                                                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="hidden">
                                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                                            </svg>
                                                            <span className="sr-only">Close modal</span>
                                                        </button>
                                                    </div>
                                                    {/* <!-- Modal body --> */}
                                                    <div className="p-4 md:p-5 space-y-4">
                                                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                                                        </p>
                                                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

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






