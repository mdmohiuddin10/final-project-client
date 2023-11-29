import SectionTitle from "../../../../shared/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { FaCalendarAlt, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

// react rating
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


const SuccessStory = () => {

    const axiosSecure = useAxiosSecure()
    const { data: reviewData = [] } = useQuery({
        queryKey: ['reviewData'],
        queryFn: async () => {
            const res = await axiosSecure.get('/review')
            return res.data;
        }
    })

    console.log(reviewData);



    return (
        <div>
            <SectionTitle heading={'Success Story'} subHeading={'welcome to'}></SectionTitle>
            <>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <div>
                        {
                            reviewData.map(data =>
                                <SwiperSlide key={data._id}>
                                    <div className="max-w-sm bg-[#F3F3F3] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <img src={data.image} alt="" />
                                        <div className="p-5">
                                            <span><FaQuoteLeft className="mt-2 mb-2"></FaQuoteLeft></span>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.message}</p>
                                            <h2 className="flex justify-center items-center gap-2 ml-20"><FaCalendarAlt ></FaCalendarAlt><span>{data.date}</span></h2>
                                            <span><FaQuoteRight className="ml-64 mt-2 mb-2"></FaQuoteRight></span>

                                        </div>
                                        <div className="flex justify-center items-center mb-5">
                                            <Rating
                                                style={{ maxWidth: 180 }}
                                                value={data?.rating}
                                                readOnly

                                            ></Rating>
                                        </div>
                                    </div>

                                </SwiperSlide>)
                        }
                    </div>
                </Swiper>
            </>
        </div>
    );
};

export default SuccessStory;

