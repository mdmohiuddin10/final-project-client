import { ThreeCircles } from "react-loader-spinner";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2 className="text-3xl font-semibold mt-10 text-center">No Data Found</h2>
            <div className="flex justify-center items-center mt-10">
                <ThreeCircles
                    height="100"
                    width="100"
                    color="#4fa94d"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="three-circles-rotating"
                    outerCircleColor=""
                    innerCircleColor=""
                    middleCircleColor=""
                />
            </div>
            <div className="flex justify-center items-center mt-10">
                <Link to={'/'}>
                    <button className="text-white bg-orange-300 px-2 py-2 rounded-lg">Back</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;