import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Socail from "../../shared/SocailLogin/Socail";
import Swal from "sweetalert2";


const Login = () => {

    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        // console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "User Logged Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true })
            })
            .then(error => {
                console.log(error.message);
            })
    }
    return (
        <div>
            <div className="flex md:flex-row flex-col-reverse">
                <div className="md:w-1/2 w-full">
                    <img src="https://i.postimg.cc/D0JhKf1j/5423351-Mobile-login.jpg" alt="" />
                </div>
                <div className="md:w-1/2 w-full shadow-2xl bg-base-100 px-5 mt-20">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-3xl font-bold mb-5">Login now!</h1>
                        <div className="form-control mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Your Email" required></input>
                        </div>
                     
                        <div className="form-control mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input  type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Password" required></input>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' value="Login" />
                        </div>


                        <p className='text-center'>New Here? <Link className='text-orange-400 font-semibold' to={'/Sign up'}>Create a new Account</Link></p>
                        <Socail></Socail>

                    </form>

                </div>
            </div >
        </div >
    );
};

export default Login;