import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const EditBioData = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm()
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()

    const onSubmit = async (data) => {

        // image upload to image bb and then get url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })

        if (res.data.success) {

            // create user entry in the database
            const biodataInfo = {
                name: data.name,
                email: data.email,
                age: data.age,
                date: data.date,
                expectedHeight: data.expectedHeight,
                expectedWeight: data.expectedWeight,
                fathersName: data.fathersName,
                gender: data.gender,
                height: data.height,
                image: res.data.data.display_url,
                mothersName: data.mothersName,
                number: data.number,
                occupation: data.occupation,
                partnerAge: data.partnerAge,
                permanentDivision: data.permanentDivision,
                presentDivision: data.presentDivision,
                race: data.race,
                weight: data.weight
            }

            // send data to database
            const menuRes = await axiosSecure.post('/biodata', biodataInfo);
            console.log(menuRes.data);

            if(menuRes.data.insertedId){
                reset()
                Swal.fire({
                    title: "Added!",
                    text: `${data.name} added successfully`,
                    icon: "success",
                    timer: 1500
                });
            }
        }
    }

    return (
        <div>
            <h2 className="text-3xl font-semibold text-center">Create Your Bio Data</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="w-3/4 mx-auto">
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name*</label>
                        <input {...register("name", { required: true })} type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                    </div>
                    <div className="grid lg:grid-cols-4 grid-cols-2 mb-5 gap-3">
                        <div className="">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Biodata Type*</label>
                            <select {...register("gender", { required: true })} id="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option disabled selected>Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className="">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of birth* </label>
                            <input {...register("date", { required: true })} type="date" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Profile Image</label>
                            <input  {...register("image", { required: true })} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="image" type="file" required/>
                        </div>
                        <div className="">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age*</label>
                            <input {...register("age", { required: true })} type="number" id="age" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>

                    </div>
                    <div className="grid lg:grid-cols-4 grid-cols-2 mb-5 gap-3">
                        <div className="">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Height*</label>
                            <select {...register("height", { required: true })} id="height" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option disabled selected>Height</option>
                                <option value="5 feet 0 inches">5 feet 0 inches</option>
                                <option value="5 feet 1 inches">5 feet 1 inches</option>
                                <option value="5 feet 2 inches">5 feet 2 inches</option>
                                <option value="5 feet 3 inches">5 feet 3 inches</option>
                                <option value="5 feet 4 inches">5 feet 4 inches</option>
                                <option value="5 feet 5 inchesA">5 feet 5 inches</option>
                                <option value="5 feet 6 inches">5 feet 6 inches</option>
                                <option value="5 feet 7 inches">5 feet 7 inches</option>
                                <option value="5 feet 8 inches">5 feet 8 inches</option>
                                <option value="5 feet 9 inches">5 feet 9 inches</option>
                                <option value="5 feet 10 inches">5 feet 10 inches</option>
                                <option value="5 feet 11 inches">5 feet 11 inches</option>
                                <option value="6 feet 0 inches">6 feet 0 inches</option>
                                <option value="6 feet 1 inches">6 feet 1 inches</option>
                                <option value="6 feet 2 inches">6 feet 2 inches</option>
                                <option value="6 feet 3 inches">6 feet 3 inches</option>
                                <option value="6 feet 4 inches">6 feet 4 inches</option>
                            </select>
                        </div>
                        <div className="">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weight* </label>
                            <select {...register("weight", { required: true })} id="weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option disabled selected>Weight</option>
                                <option value="45 kg">45 kg</option>
                                <option value="46 kg">46 kg</option>
                                <option value="47 kg">47 kg</option>
                                <option value="48 kg">48 kg</option>
                                <option value="49 kg">49 kg</option>
                                <option value="50 kg">50 kg</option>
                                <option value="51 kg">51 kg</option>
                                <option value="52 kg">52 kg</option>
                                <option value="53 kg">53 kg</option>
                                <option value="54 kg">54 kg</option>
                                <option value="55 kg">55 kg</option>
                                <option value="56 kg">56 kg</option>
                                <option value="57 kg">57 kg</option>
                                <option value="58 kg">58 kg</option>
                                <option value="59 kg">59 kg</option>
                                <option value="60 kg">60 kg</option>
                                <option value="60 kg above">60 kg above</option>
                            </select>
                        </div>
                        <div className="">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Occupation*</label>
                            <select {...register("occupation", { required: true })} id="occupation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option disabled selected>Occupation</option>
                                <option value="Software Engineer">Software Engineer</option>
                                <option value="Teacher">Teacher</option>
                                <option value="Doctor">Doctor</option>
                                <option value="Nurse">Nurse</option>
                                <option value="ShopKeeper">ShopKeeper</option>
                                <option value="Worker">Worker</option>
                                <option value="Student">Student</option>
                                <option value="Sales Executive">Sales Executive</option>
                                <option value="Lawyer/Attorney">Lawyer/Attorney</option>
                            </select>
                        </div>
                        <div className="">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Race*</label>
                            <select {...register("race", { required: true })} id="race" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option disabled selected>Race</option>
                                <option value="Black">Black</option>
                                <option value="White">White</option>
                                <option value="Mixer">Mixer</option>
                            </select>
                        </div>

                    </div>
                    <div className="flex mb-5 gap-5">
                        <div className="flex-1">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fathers Name</label>
                            <input {...register("fathersName", { required: true })} type="text" id="fathersName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="flex-1">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mothers Name</label>
                            <input {...register("mothersName", { required: true })} type="text" id="mothersName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                    </div>
                    <div className="flex mb-5 gap-5">
                        <div className="flex-1">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Permanent Division name </label>
                            <select {...register("permanentDivision", { required: true })} id="permanentDivision" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option disabled selected>Division Name</option>
                                <option value="Dhaka">Dhaka</option>
                                <option value="Chattogram">Chattogram</option>
                                <option value="Rangpur">Rangpur</option>
                                <option value="Barisal">Barisal</option>
                                <option value="Khulna">Khulna</option>
                                <option value="Maymansign">Maymansign</option>
                                <option value="Sylhet">Sylhet</option>
                            </select>
                        </div>
                        <div className="flex-1">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Present Division name </label>
                            <select {...register("presentDivision", { required: true })} id="presentDivision" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option disabled selected>Division Name</option>
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
                    <div className="grid md:grid-cols-3 grid-cols-2 gap-3 mb-5">
                        <div className="">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expected Partner Age</label>
                            <input {...register("partnerAge", { required: true })} type="number" id="partnerAge" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expected Partner Height*</label>
                            <select {...register("expectedHeight", { required: true })} id="expectedHeight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option disabled selected>Height</option>
                                <option value="5 feet 0 inches">5 feet 0 inches</option>
                                <option value="5 feet 1 inches">5 feet 1 inches</option>
                                <option value="5 feet 2 inches">5 feet 2 inches</option>
                                <option value="5 feet 3 inches">5 feet 3 inches</option>
                                <option value="5 feet 4 inches">5 feet 4 inches</option>
                                <option value="5 feet 5 inchesA">5 feet 5 inches</option>
                                <option value="5 feet 6 inches">5 feet 6 inches</option>
                                <option value="5 feet 7 inches">5 feet 7 inches</option>
                                <option value="5 feet 8 inches">5 feet 8 inches</option>
                                <option value="5 feet 9 inches">5 feet 9 inches</option>
                                <option value="5 feet 10 inches">5 feet 10 inches</option>
                                <option value="5 feet 11 inches">5 feet 11 inches</option>
                                <option value="6 feet 0 inches">6 feet 0 inches</option>
                                <option value="6 feet 1 inches">6 feet 1 inches</option>
                                <option value="6 feet 2 inches">6 feet 2 inches</option>
                                <option value="6 feet 3 inches">6 feet 3 inches</option>
                                <option value="6 feet 4 inches">6 feet 4 inches</option>
                            </select>
                        </div>
                        <div className="">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expected Partner Weight* </label>
                            <select {...register("expectedWeight", { required: true })} id="expectedWeight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option disabled selected>Weight</option>
                                <option value="45 kg">45 kg</option>
                                <option value="46 kg">46 kg</option>
                                <option value="47 kg">47 kg</option>
                                <option value="48 kg">48 kg</option>
                                <option value="49 kg">49 kg</option>
                                <option value="50 kg">50 kg</option>
                                <option value="51 kg">51 kg</option>
                                <option value="52 kg">52 kg</option>
                                <option value="53 kg">53 kg</option>
                                <option value="54 kg">54 kg</option>
                                <option value="55 kg">55 kg</option>
                                <option value="56 kg">56 kg</option>
                                <option value="57 kg">57 kg</option>
                                <option value="58 kg">58 kg</option>
                                <option value="59 kg">59 kg</option>
                                <option value="60 kg">60 kg</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex mb-5 gap-5">
                        <div className="flex-1">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile Number</label>
                            <input {...register("number", { required: true })} type="text" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="flex-1">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact Email</label>
                            <input {...register("email", { required: true })} readOnly defaultValue={user?.email} type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' value="Save And Publish Now" />
                    </div>

                   
                </form>
            </div >
        </div >
    );
};

export default EditBioData;