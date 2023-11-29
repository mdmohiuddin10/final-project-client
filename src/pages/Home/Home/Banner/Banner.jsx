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
                    <div className="absolute justify-center items-center md:top-1/3 top-1/4 w-1/2 md:px-5 px-2">
                        <h2 className="lg:text-6xl md:text-3xl text-lg md:mb-3 mb-2 font-bold">Embark on Loves Journey</h2>
                        <p className="md:text-3xl text-md font-semibold mb-2 md:mb-3"> Your Matrimonial Destiny Awaits Right Here!</p>
                        <button className="bg-blue-700 px-2 py-2 rounded-lg">See More</button>
                    </div>
                </div>
                <div>
                    <img className="relative opacity-70" src="https://i.postimg.cc/Y028NNFW/indian-bride-groom-s-hands-traditional-wedding-ceremony.jpg" />
                    <div className="absolute justify-center items-center md:top-1/3 top-1/4 w-1/2 md:px-5 px-2">
                        <h2 className="lg:text-6xl md:text-3xl text-lg md:mb-3 mb-2 font-bold">Embark on Loves Journey</h2>
                        <p className="md:text-3xl text-md font-semibold mb-2 md:mb-3"> Your Matrimonial Destiny Awaits Right Here!</p>
                        <button className="bg-blue-700 px-2 py-2 rounded-lg">See More</button>
                    </div>
                </div>
                <div>
                    <img className="relative opacity-70" src="https://i.postimg.cc/7PdrPfrN/couple-altar.jpg" />
                    <div className="absolute justify-center items-center md:top-1/3 top-1/4 w-1/2 md:px-5 px-2">
                        <h2 className="lg:text-6xl md:text-3xl text-lg md:mb-3 mb-2 font-bold">Embark on Loves Journey</h2>
                        <p className="md:text-3xl text-md font-semibold mb-2 md:mb-3"> Your Matrimonial Destiny Awaits Right Here!</p>
                        <button className="bg-blue-700 px-2 py-2 rounded-lg">See More</button>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;