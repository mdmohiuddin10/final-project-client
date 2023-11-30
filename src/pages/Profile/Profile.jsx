import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import { ThreeCircles } from "react-loader-spinner";


const Profile = () => {

    const { user } = useContext(AuthContext)
    return (
        <div>
            <SectionTitle heading={'My Profile'} subHeading={'keep rocking'}></SectionTitle>
            <h2 className="text-3xl text-center font-bold">{user.displayName}</h2>
            <h2 className="text-3xl text-center font-bold">Will Update in next Day</h2>

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
        </div>
    );
};

export default Profile;