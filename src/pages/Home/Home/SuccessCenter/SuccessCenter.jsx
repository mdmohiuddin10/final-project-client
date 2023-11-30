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









    return (
        <div className="bg-[#0B0223] text-white pt-10 pb-20">
            <SectionTitle heading={'Success Center'} subHeading={'lets See'}></SectionTitle>
            <div className="flex lg:flex-row flex-col-reverse gap-5">
                <div className="flex-1 px-8">
                    <h2 className="text-2xl text-center mb-5 font-semibold text-[#FF42A5]">Welcome to our Success Center,</h2>
                    <p className="text-xl font-serif">where dreams find their happily ever after! At our matrimony website, we take immense pride in being the architects of countless love stories. Our Success Center is a testament to the magic that unfolds when hearts connect. Here, you'll find heartwarming tales of individuals who embarked on the journey of a lifetime, discovering love, companionship, and the joy of building a future together. From the initial spark to the joyous union, these stories serve as beacons of hope and inspiration for those still on their quest for a life partner.</p>
                </div>
                <div className="flex-1 px-5">
                    <div className="mb-3">
                        <h2>Total Biodata:</h2>
                        <ProgressBar completed={bioData.length} maxCompleted={50} transitionDuration="5s" transitionTimingFunction="ease-in-out" animateOnRender initCompletedOnAnimation={0} />
                    </div>
                    <div className="mb-3">
                        <h2>Total Male:</h2>
                        <ProgressBar completed={maleData.length} maxCompleted={10} transitionDuration="5s" transitionTimingFunction="ease-in-out" animateOnRender initCompletedOnAnimation={0} />
                    </div>
                    <div className="mb-3">
                        <h2>Total Female:</h2>
                        <ProgressBar completed={femaleData.length} maxCompleted={10} transitionDuration="5s" transitionTimingFunction="ease-in-out" animateOnRender initCompletedOnAnimation={0} />
                    </div>
                    <div className="mb-3">
                        <h2>Wedding Completed:</h2>
                        <ProgressBar completed={60} maxCompleted={100} transitionDuration="5s" transitionTimingFunction="ease-in-out" animateOnRender initCompletedOnAnimation={0} />
                    </div>

                </div>
            </div>

        </div>
    );
};

export default SuccessCenter;