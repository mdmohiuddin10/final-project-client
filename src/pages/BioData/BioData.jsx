import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet";

const BioData = () => {
    const [genderFilter, setGenderFilter] = useState("");
    const [ageFilter, setAgeFilter] = useState("");
    const [divisionFilter, setDivisionFilter] = useState("");

    const allBiodata = useLoaderData();
    const { user } = useContext(AuthContext)
    const selectedBiodata = allBiodata.filter(biodata => biodata.email !== user?.email)
    // console.log(selectedBiodata);

    // Filter data based on selected filters
    const filteredBiodata = selectedBiodata.filter((biodata) => {
        const genderFilterMatch =
            !genderFilter || biodata.gender.toLowerCase() === genderFilter.toLowerCase();
        const divisionFilterMatch =
            !divisionFilter || biodata.permanentDivision.toLowerCase() === divisionFilter.toLowerCase();
        const ageFilterMatch = !ageFilter || biodata.age == parseInt(ageFilter, 10);
        console.log(`ageFilter: ${ageFilter}, biodata.age: ${biodata.age}, ageFilterMatch: ${ageFilterMatch}`);



        return genderFilterMatch && divisionFilterMatch && ageFilterMatch;
    });

    return (
        <div className="mt-10">
            <Helmet>
                <title>Porinhoy || All Data</title>
            </Helmet>

            <SectionTitle heading={'All Biodata'} subHeading={'lets see'}></SectionTitle>
            <div className="flex gap-5 md:mb-20 mb-10 w-full mx-auto">
                <div className="flex-1">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Filter By Age
                    </label>
                    <input
                        type="number" // Change the input type to number
                        id="age"
                        value={ageFilter}
                        onChange={(e) => setAgeFilter(e.target.value)}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Filter By Age"
                        required
                    />
                </div>
                <div className="flex-1">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Biodata Type*
                    </label>
                    <select
                        id="gender"
                        value={genderFilter}
                        onChange={(e) => setGenderFilter(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option disabled value="">
                            Filter by Gender
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="flex-1">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Present Division name
                    </label>
                    <select
                        id="presentDivision"
                        value={divisionFilter}
                        onChange={(e) => setDivisionFilter(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option disabled value="">
                            Filter by division
                        </option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chattogram">Chattogram</option>
                        <option value="Rangpur">Rangpur</option>
                        <option value="Barisal">Barisal</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Maymansign">Maymansign</option>
                        <option value="Sylhet">Sylhet</option>
                    </select>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 px-5">
                {filteredBiodata.map((biodata) => (
                    <div key={biodata._id} className="max-w-sm bg-[#F3F3F3] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg h-[300px] w-full bg-contain" src={biodata.image} alt="" />
                        </a>
                        <div className="p-5">

                            <div className="flex justify-evenly">
                                <div>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Biodata Id: {biodata.biodataId}</h5>
                                </div>
                                <div>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Gender: {biodata.gender}</h5>
                                </div>

                            </div>

                            <div className="flex justify-center">
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xl">Permanent Division: {biodata.permanentDivision}</p>
                            </div>

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

export default BioData;
