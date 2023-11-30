import { FaEnvelope, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";


const Contact = () => {
    return (
        <div className="px-5 md:mt-20 md:mb-20 mb-10 mt-10">
            <SectionTitle heading={'Our Contact'} subHeading={'lets Knock'}></SectionTitle>
            <div className="md:flex flex-row  gap-5">

                <div className="flex-1">
                    <h2 className="text-3xl font-semibold mt-10 mb-10">GET IN TOUCH WITH US</h2>
                    <span className="mb-10 text-black"><hr /></span>
                    <p className="mt-10">Get in touch to discuss your employee wellbeing needs today. Please give us a call, drop us an email or fill out the contact form and we’ll get back to you.</p>
                    <h2 className="flex gap-2 items-center mt-10 mb-10"><span><FaLocationArrow></FaLocationArrow></span>
                        21 Chawkbazar, Chittagong, Bangladesh
                    </h2>
                    <hr />
                    <h2 className="flex gap-2 items-center mb-10 mt-10"><span><FaEnvelope></FaEnvelope></span>
                        <a href="">hmmohiuddinctg1997@gmail.com</a>
                    </h2>
                    <hr />
                    <h2 className="flex gap-2 items-center mb-10 mt-10"><span><FaPhoneAlt></FaPhoneAlt></span>
                        <a href="">01836-414220, 01580-821078</a>
                    </h2>
                </div>
                <div className="flex-1">
                    <div>
                        <div>
                            <h2 className="text-2xl font-semibold mb-10 text-center mt-10">WE WOULD LOVE TO HEAR FROM YOU</h2>
                            <p className="text-sm mt-3">Your email address will not be published. Required fields are marked * </p>


                            <form className=" mt-10 px-5 py-5 rounded-md mx-auto bg-base-200">
                                <div className="form-control">

                                    <input type="text" name="name" placeholder="Enter your name" className="input input-bordered mt-5" required />
                                </div>
                                <div className="form-control">

                                    <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered mt-5" required />
                                </div>
                                <div className="form-control">

                                    <input type="text" name="password" placeholder="Enter your Phone Number.." className="input input-bordered mt-5" required />
                                </div>
                                <div>
                                    <textarea className="mt-5 w-full" name="" placeholder="Your Message" id="" cols="30" rows="10"></textarea>
                                </div>
                                <NavLink to={'./'}>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Submit</button>
                                    </div>
                                </NavLink>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <SectionTitle heading={'Find Ours in Maps'}></SectionTitle>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236153.75658880244!2d91.65422540320962!3d22.35731206162862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a64095dfd3%3A0x5015cc5bcb6905d9!2sChattogram!5e0!3m2!1sen!2sbd!4v1701282127399!5m2!1sen!2sbd" width="100%" height="450" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    );
};

export default Contact;