import { Link, useLoaderData, useParams } from "react-router-dom";
import usePremium from "../../Hooks/usePremium";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const DetailsData = () => {
    const { id } = useParams()
    const details = useLoaderData()
    const [isPremium] = usePremium()
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const { user } = useContext(AuthContext)


    // const [isPremium] = usePremium()
    const newData = details.filter(detail => detail._id == id)
    // console.log(newData);

    // Relevant data based on gender
    const gender = newData.length > 0 ? newData[0].gender : "";
    const relevantData = details.filter((data) => data.gender === gender).slice(0, 4);
    // console.log('relavent data', relevantData);


    const { data: bioData = [] } = useQuery({
        queryKey: ['bioData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/biodata')
            return res.data;
        }
    })
    const selectedData = bioData.filter(data => data.email === user?.email)
    //    console.log(selectedData);

    // add data to server(favorute data)
    const handleAddFavourite = async (data) => {
        const favouriteData = {
            favname: data.name,
            favbiodataId: data.biodataId,
            permanentDivision: data.permanentDivision,
            occupation: data.occupation,
            selfName: user?.displayName,
            selfEmail: user?.email,
            selfBiodataId: selectedData.biodataId
        }
        // console.log(favouriteData);
        const res = await axiosSecure.post('/favourite', favouriteData)
        if (res.data.insertedId) {
            // reset()
            Swal.fire({
                title: "Added!",
                text: `${data.name} added successfully`,
                icon: "success",
                timer: 1500
            });
        }
    }


    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 mt-10">
            <div className="flex">
                {
                    newData.map(data => <div key={data._id} className="px-5">
                        <div>
                            <img className="py-5 md:px-10" src={data.image} alt="" />
                        </div>
                        <div className="flex-1">
                            <div className="relative px-5 rounded-lg overflow-x-auto">
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
                                                {data.name}
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Gender
                                            </th>
                                            <td className="px-6 py-4">
                                                {data.gender}
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Date of birth
                                            </th>
                                            <td className="px-6 py-4">
                                                {data.date}
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Height
                                            </th>
                                            <td className="px-6 py-4">
                                                {data.height}
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Weight
                                            </th>
                                            <td className="px-6 py-4">
                                                {data.weight}
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Age
                                            </th>
                                            <td className="px-6 py-4">
                                                {data.age}
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Occupation
                                            </th>
                                            <td className="px-6 py-4">
                                                {data.occupation}
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Race
                                            </th>
                                            <td className="px-6 py-4">
                                                {data.race}
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Father Name
                                            </th>
                                            <td className="px-6 py-4">
                                                {data.fathersName}
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Mothers Name
                                            </th>
                                            <td className="px-6 py-4">
                                                {data.mothersName}
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Permanent Division
                                            </th>
                                            <td className="px-6 py-4">
                                                {data.permanentDivision}
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Present Division
                                            </th>
                                            <td className="px-6 py-4">
                                                {data.presentDivision}
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Expected Partner Height
                                            </th>
                                            <td className="px-6 py-4">
                                                {data.expectedHeight}
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Expected Partner Age
                                            </th>
                                            <td className="px-6 py-4">
                                                {data.partnerAge}
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Expected Partner Weight
                                            </th>
                                            <td className="px-6 py-4">
                                                {data.expectedWeight}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {
                                isPremium ? <>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Contact Email
                                        </th>
                                        <td className="px-6 py-4">
                                            {data.email}
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Mobile Number
                                        </th>
                                        <td className="px-6 py-4">
                                            {data.number}
                                        </td>
                                    </tr>
                                    <div>

                                    </div>
                                    <button onClick={() => handleAddFavourite(data)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-5 ">Add to Favourite</button>
                                </> : <>
                                <Link to={`/request/${data._id}`}>
                                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-5 ">Make Request</button>
                                    </Link>
                                    {/* <Link to={'/Bio data'}>
                                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-5 ">Make Request</button>
                                    </Link> */}
                                </>
                            }


                        </div>
                    </div>)
                }
            </div>
            {/* relavent data */}
            <div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mt-10 px-5">
                    {
                        relevantData.map(relavant =>
                            <div key={relavant._id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img className="rounded-t-lg h-[300px] w-full bg-contain" src={relavant.image} alt="" />
                                </a>
                                <div className="p-5">

                                    <div className="flex justify-evenly">
                                        <div>
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Biodata Id: {relavant.biodataId}</h5>
                                        </div>
                                        <div>
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Gender: {relavant.gender}</h5>
                                        </div>

                                    </div>

                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xl">Permanent Division name : {relavant.permanentDivision}</p>

                                    <div className="flex justify-evenly">
                                        <div>
                                            <h5 className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xl">Age: {relavant.age}</h5>
                                        </div>
                                        <div>
                                            <h5 className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xl">Occupation: {relavant.occupation}</h5>
                                        </div>

                                    </div>
                                    <Link to={'/bio data'}>
                                        <button type="button" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            View Profile
                                        </button>
                                    </Link>
                                </div>
                            </div>)
                    }

                </div>
                <div className="flex justify-center items-center mt-10">
                    <button>
                        <Link to={'/bio data'}>
                            <button type="button" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                See More
                            </button>
                        </Link></button>
                </div>
            </div>
        </div>
    );
};

export default DetailsData;






