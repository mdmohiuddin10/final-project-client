import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import SectionTitle from "../../../../shared/SectionTitle/SectionTitle";
import ProgressBar from "@ramonak/react-progress-bar";


const SuccessCenter = () => {
    const axiosPublic = useAxiosPublic()


    const { data: bioData = [] } = useQuery({
        queryKey: ['bioData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/biodata')
            return res.data;
        }
    })

    const maleData = bioData.filter(male => male.gender === 'male')

    const femaleData = bioData.filter(male => male.gender === 'female')
 

    const premiumData = bioData.filter(male => male.status === 'premium')
   





    return (
        <div className="bg-[#0B0223] text-white pt-10 pb-20">
            <SectionTitle heading={'Success Center'} subHeading={'lets See'}></SectionTitle>
            <div className="flex gap-5">
                <div className="flex-1 px-5">
                    <h2>

                        <span className="text-xl font-semibold text-[#FF42A5]">Welcome to our Success Center,</span> where dreams find their happily ever after! At our matrimony website, we take immense pride in being the architects of countless love stories. Our Success Center is a testament to the magic that unfolds when hearts connect. Here, you'll find heartwarming tales of individuals who embarked on the journey of a lifetime, discovering love, companionship, and the joy of building a future together. From the initial spark to the joyous union, these stories serve as beacons of hope and inspiration for those still on their quest for a life partner. We believe in the transformative power of love, and our Success Center is a celebration of the unique and beautiful stories that have blossomed within our community. Join us in rejoicing in the triumph of love and be inspired to create your own love story with us!
                    </h2>

                </div>
                <div className="flex-1 px-5">
                    <div className="mb-3">
                        <h2>Total:</h2>
                        <ProgressBar completed={bioData.length} maxCompleted={50} transitionDuration="5s" transitionTimingFunction="ease-in-out" animateOnRender initCompletedOnAnimation={0} />
                    </div>
                    <div className="mb-3">
                        <h2>Total:</h2>
                        <ProgressBar completed={maleData.length} maxCompleted={10} transitionDuration="5s" transitionTimingFunction="ease-in-out" animateOnRender initCompletedOnAnimation={0} />
                    </div>
                    <div>
                        <h2>Total:</h2>
                        <ProgressBar completed={femaleData.length} maxCompleted={10} transitionDuration="5s" transitionTimingFunction="ease-in-out" animateOnRender initCompletedOnAnimation={0} />
                    </div>
                    <div>
                        <h2>Total:</h2>
                        <ProgressBar completed={6} maxCompleted={10} transitionDuration="5s" transitionTimingFunction="ease-in-out" animateOnRender initCompletedOnAnimation={0} />
                    </div>

                </div>
            </div>

        </div>
    );
};

export default SuccessCenter;