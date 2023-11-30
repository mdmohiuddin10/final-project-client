import { Helmet } from "react-helmet";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";


const About = () => {
    return (
        <div>
            <Helmet>
                <title>Porinhoy || About Us</title>
            </Helmet>
            <div className="pt-10 bg-[url('https://i.postimg.cc/Kzd3qgf0/design-space-paper-textured-background.jpg')] bg-fixed text-white pb-20 bg-black bg-opacity-10">

                <SectionTitle heading={'About Section'} subHeading={'welcome to Our'}></SectionTitle>

                <div className="flex md:flex-row gap-5 flex-col px-5">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-[#FF42A5]">Welcome to Porinhoy.com</h2>
                        <p className="text-xl font-semibold text-black mt-5 mb-5">where the journey to everlasting love begins. At [Matrimony Website Name], we believe in the power of genuine connections and the joy that comes from finding your perfect life partner. Our platform is more than just a matrimony website; it's a community built on trust, respect, and the shared desire for a lifelong companionship.</p>
                        <h2 className="text-3xl font-bold text-[#FF42A5]">Our Mission:</h2>
                        <p className="text-xl font-semibold text-black mt-5 mb-5">Empowering individuals to discover and build meaningful connections leading to lasting marriage</p>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-[#FF42A5]">Who We Are:</h2>
                        <p className="text-xl font-semibold text-black mt-5 mb-5">[Matrimony Website Name] is a dedicated space for those who believe in the beauty of committed relationships. Our team is committed to creating an environment that fosters genuine connections, understanding, and compatibility. Whether you're looking for love, companionship, or a lifelong partner, we are here to guide you through your journey.</p>
                        <h2 className="text-3xl font-bold text-[#FF42A5]">Why Choose Us:</h2>
                        <p className="text-xl font-semibold text-black mt-5 mb-5">Diverse Community: Our platform brings together individuals from diverse backgrounds, cultures, and walks of life, promoting inclusivity and understanding.</p>
                        <p className="text-xl font-semibold text-black mt-5 mb-5">Advanced Matching Algorithms: Utilizing cutting-edge technology, our advanced matching algorithms help you find compatibility beyond the surface, ensuring meaningful connections.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;