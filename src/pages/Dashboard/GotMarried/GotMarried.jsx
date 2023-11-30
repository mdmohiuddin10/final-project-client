import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const GotMarried = () => {
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const {user} = useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors }, } = useForm()

  
    const { data: favouriteData = []} = useQuery({
        queryKey: ['favouriteData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/biodata')
            return res.data;
        }
    })

    const marriedData = favouriteData.filter(data=> data.email === user?.email)
    
    const onSubmit = async (data) => {
        // image upload to image bb and then get url
        const imageInput = { image: data.image[0] }
        console.log(imageInput);
        const res = await axiosPublic.post(image_hosting_api, imageInput, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })

        if (res.data.success) {
            // create user entry in the database
            const biodataInfo = {
                selfBiodataId: data.selfBiodataId,
                partnerBiodataId: data.partnerBiodataId,
                date: data.date,
                image: res.data.data.display_url,
                message: data.message,
                rating: data.rating
            }
            console.log(biodataInfo);
            // send data to database
            const menuRes = await axiosSecure.post('/review', biodataInfo);
            console.log(menuRes.data);

            if(menuRes.data.insertedId){
                reset()
                Swal.fire({
                    title: "Added!",
                    text: 'Review added successfully',
                    icon: "success",
                    timer: 1500
                });
            }
        }
    }


    return (
        <div>
            <SectionTitle heading={'Review Section'} subHeading={'Got Merried'}></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className="w-3/4 mx-auto">
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Self Biodata Id*</label>
                    <input defaultValue={marriedData[0]?.biodataId}  readOnly {...register("selfBiodataId", { required: true })} type="text" id="selfBiodataId" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Partner Biodata Id*</label>
                    <input {...register("partnerBiodataId", { required: true })} type="text" id="partnerBiodataId" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                </div>
                <div className="">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Couple Image</label>
                    <input  {...register("image", { required: true })} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="image" type="file" required />
                </div>


                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                    <textarea {...register("message", { required: true })} id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                </div>

                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date*</label>
                    <input {...register("date", { required: true })} type="date" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                </div>

                <div className="">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rating*</label>
                    <select {...register("rating", { required: true })} id="rating" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option disabled selected>Rating</option>
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                    </select>
                </div>
                <div className="form-control mt-6">
                    <input type="submit" className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' value="Save And Publish Now" />
                </div>
            </form>
        </div>
    );
};

export default GotMarried;