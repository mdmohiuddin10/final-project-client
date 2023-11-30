import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { FaDollarSign } from "react-icons/fa";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';


const AdminHome = () => {
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()

    const { data: requestData = [] } = useQuery({
        queryKey: ['requestData'],
        queryFn: async () => {
            const res = await axiosSecure.get('/requset')
            return res.data;
        }
    })



    const { data: bioData = [] } = useQuery({
        queryKey: ['bioData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/biodata')
            return res.data;
        }
    })

    const maleData = bioData.filter(male => male.gender === 'male')

    const femaleData = bioData.filter(male => male.gender === 'female')
    console.log(femaleData)

    const premiumData = bioData.filter(male => male.status === 'premium')
    console.log(femaleData)

    const revenue = requestData.reduce((total, payment) => total + payment.price, 0)


    return (
        <div>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
                <div className="rounded-lg  px-3 py-3 bg-gradient-to-r from-pink-500 to-violet-500">
                    <div className="text-secondary text-3xl mt-3">
                        <FaDollarSign></FaDollarSign>
                    </div>
                    <div className="flex gap-1 text-2xl mt-3 mb-3 font-bold">
                        <div className="stat-title">Total Biodata: </div>
                        <div className="stat-value">0{bioData.length}</div>
                    </div>
                </div>
                <div className="rounded-lg  px-3 py-3 bg-gradient-to-r from-pink-500 to-violet-500">
                    <div className="text-secondary mt-3 text-3xl">
                        <FaDollarSign></FaDollarSign>
                    </div>
                    <div className="flex gap-1 text-2xl mt-3 mb-3 font-bold">
                        <div className="stat-title">Total Male: </div>
                        <div className="stat-value">0{maleData.length}</div>
                    </div>
                </div>
                <div className="rounded-lg  px-3 py-3 bg-gradient-to-r from-pink-500 to-violet-500">
                    <div className="text-secondary mt-3 text-3xl">
                        <FaDollarSign></FaDollarSign>
                    </div>
                    <div className="flex gap-1 text-2xl mt-3 mb-3 font-bold">
                        <div className="stat-title">Total Female: </div>
                        <div className="stat-value">0{femaleData.length}</div>
                    </div>
                </div>
                <div className="rounded-lg  px-3 py-3 bg-gradient-to-r from-pink-500 to-violet-500">
                    <div className="text-secondary mt-3 text-3xl">
                        <FaDollarSign></FaDollarSign>
                    </div>
                    <div className="flex gap-1 text-2xl mt-3 mb-3 font-bold">
                        <div className="stat-title">Premium: </div>
                        <div className="stat-value">0{premiumData.length}</div>
                    </div>
                </div>
                <div className="rounded-lg  px-3 py-3 bg-gradient-to-r from-pink-500 to-violet-500">
                    <div className="text-secondary mt-3 text-3xl">
                        <FaDollarSign></FaDollarSign>
                    </div>
                    <div className="flex gap-1 text-2xl mt-3 mb-3 font-bold">
                        <div className="stat-title">Revenue: </div>
                        <div className="stat-value">${revenue}</div>
                    </div>
                </div>
            </div>

            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={maleData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                    <Pie dataKey="value" data={maleData} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AdminHome;



