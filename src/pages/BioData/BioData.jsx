import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const BioData = () => {
    const [genderFilter, setGenderFilter] = useState("");
    const [divisionFilter, setDivisionFilter] = useState("");

    const allBiodata = useLoaderData();

    // Filter data based on selected filters
    const filteredBiodata = allBiodata.filter((biodata) => {
        const genderFilterMatch =
            !genderFilter || biodata.gender.toLowerCase() === genderFilter.toLowerCase();
        const divisionFilterMatch =
            !divisionFilter || biodata.permanentDivision.toLowerCase() === divisionFilter.toLowerCase();

        return genderFilterMatch && divisionFilterMatch;
    });

    return (
        <div className="mt-10">
            <div className="flex gap-5">
                <div className="relative mb-6 w-1/2">
                    <label className="sr-only">Labels range</label>
                    <input id="labels-range-input" type="range" value="1" min="18" max="40" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                    <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">Min ($18)</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$19</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$20</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">Max ($40)</span>
                </div>

                <div>


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
                <div>
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

            <div className="grid lg:grid-cols-3 gap-5">
                <h2>hlw {filteredBiodata.length} </h2>
                {filteredBiodata.map((biodata) => (
                    <div key={biodata._id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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

export default BioData;
