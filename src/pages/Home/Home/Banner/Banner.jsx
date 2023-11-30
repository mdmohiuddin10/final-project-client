import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    const settings = {
        autoPlay: true,
        interval: 2000,
    };
    return (
        <div>
            <Carousel className="text-center" {...settings}>
                <div className="">
                    <img className="relative opacity-60" src="https://i.postimg.cc/9QgR8d7h/beautiful-wedding-couple-forest-with-yellowed-trees-almost-kissing-marriage-concept-wedding-couple-a.jpg" />
                    <div className="absolute justify-center items-center md:top-1/3 top-1/4 lg:w-1/2 w-2/3 mb-1 md:px-5 px-2">
                        <h2 className="lg:text-6xl md:text-3xl text-lg md:mb-3  font-bold">Build Lasting Bonds for a Lifetime</h2>
                        <p className="md:text-3xl text-sm mb-1 font-semibold  md:mb-3"> Your Matrimonial Destiny Awaits Right Here!</p>
                        <button className="bg-[#D1A054] text-white px-1 md:px-2 py-1 md:py-2 rounded-lg">See More</button>
                    </div>
                </div>
                <div>
                    <img className="relative opacity-70" src="https://i.postimg.cc/Y028NNFW/indian-bride-groom-s-hands-traditional-wedding-ceremony.jpg" />
                    <div className="absolute justify-center items-center md:top-1/3 top-1/4 lg:w-1/2 w-2/3 mb-1 md:px-5 px-2">
                        <h2 className="lg:text-6xl md:text-3xl text-lg md:mb-3  font-bold">Find Your Soulmate with Us Now</h2>
                        <p className="md:text-3xl text-sm mb-1 font-semibold  md:mb-3"> Your Matrimonial Destiny Awaits Right Here!</p>
                        <button className="bg-[#D1A054] text-white px-1 md:px-2 py-1 md:py-2 rounded-lg">See More</button>
                    </div>
                </div>
                <div>
                    <img className="relative opacity-60" src="https://i.postimg.cc/prgch4Xq/set-with-sofa-flowers-boquets-violet-colours.jpg" />
                      <div className="absolute justify-center items-center md:top-1/3 top-1/4 lg:w-1/2 w-2/3 mb-1 md:px-5 px-2">
                        <h2 className="lg:text-6xl md:text-3xl text-lg md:mb-3  font-bold">Discover Love, Start Your Journey Today</h2>
                        <p className="md:text-3xl text-sm mb-1 font-semibold  md:mb-3"> Your Matrimonial Destiny Awaits Right Here!</p>
                        <button className="bg-[#D1A054] text-white px-1 md:px-2 py-1 md:py-2 rounded-lg">See More</button>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;