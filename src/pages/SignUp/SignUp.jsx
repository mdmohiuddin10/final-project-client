import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link, useNavigate } from "react-router-dom";
import Socail from "../../shared/SocailLogin/Socail";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";


const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm()
    const { creatUser, updateUserProfile } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const onSubmit = data => {
        creatUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {

                        // create user entry in the database
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    reset()
                                    Swal.fire({
                                        position: "center",
                                        icon: "success",
                                        title: "User Created Successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/')
                                }
                            })

                    })

                    .catch(error => console.log(error))
            })
            .then(error => {
                console.log(error);
            })

    };

    return (
        <div>
            <div className="flex">
                <div>
                    <img src="https://i.postimg.cc/D0JhKf1j/5423351-Mobile-login.jpg" alt="" />
                </div>
                <div className="w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h1 className="text-3xl font-bold mb-5">Sign Up now!</h1>
                        <div className="form-control mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                            <input {...register("name", { required: true })} type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required></input>
                            {errors.name && <span>This field is required</span>}
                        </div>
                        <div className="form-control mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                            <input {...register("email", { required: true })} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required></input>
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="form-control mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo URL</label>
                            <input {...register("photoURL", { required: true })} type="text" id="photoURL" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required></input>
                            {errors.photoURL && <span>This field is required</span>}
                        </div>
                        <div className="form-control mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /[a-zA-Z0-9!@#$%^&*]{6,20}/
                            })} type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required></input>
                            {errors.password && <span>This field is required</span>}
                            {errors.password?.type === 'minLength' && <span>password must be 6 characters</span>}
                            {errors.password?.type === 'maxLength' && <span>password must be less than 20 characters</span>}
                            {errors.password?.type === 'pattern' && <span>password must have one uppercase, one lowercase, one number and one special number</span>}
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' value="Sign Up" />
                        </div>


                        <p className='text-center'>Already registered? <Link className='text-orange-400 font-semibold' to={'/login'}>Go to log in</Link></p>
                        <Socail></Socail>

                    </form>

                </div>
            </div >
        </div >
    );
};

export default SignUp;




