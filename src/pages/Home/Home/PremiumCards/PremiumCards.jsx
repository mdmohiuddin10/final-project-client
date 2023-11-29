import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const PremiumCards = () => {
    const axiosSecure = useAxiosSecure()
    const { data: biodata = [] } = useQuery({
        queryKey: ['biodata'],
        queryFn: async () => {
            const res = await axiosSecure.get('/biodata')
            return res.data;
        }
    })

    const sortData = biodata.sort((a, b) => b.age - a.age);
 

    const premiumCards = sortData.filter(data => data.status === 'premium').slice(0, 6);


    return (
        <div>
            <div className="grid lg:grid-cols-3 gap-5">
              
                {premiumCards.map((biodata) => (
                    <div key={biodata._id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <img className="rounded-t-lg h-[300px] w-full bg-contain" src={biodata.image} alt="" />
                        <div className="p-5">

                            <div className="flex justify-evenly">
                                <div>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Biodata Id: {biodata.biodataId}</h5>
                                </div>
                                <div>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Gender: {biodata.gender}</h5>
                                </div>

                            </div>

                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xl">Permanent Division name : {biodata.permanentDivision}</p>

                            <div className="flex justify-evenly">
                                <div>
                                    <h5 className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xl">Age: {biodata.age}</h5>
                                </div>
                                <div>
                                    <h5 className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xl">Occupation: {biodata.occupation}</h5>
                                </div>

                            </div>
                            <Link to={`/details/${biodata._id}`}>
                                <button type="button" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    View Profile
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default PremiumCards;
