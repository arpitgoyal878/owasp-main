import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import EventData from '../data/EventData';
import { Link } from 'react-router-dom';

const UpcomingEv = () => {
    return (
        <div className='h-screen w-full flex justify-center pt-20 bg-gradient-to-bl from-zinc-950 to-blue-950 relative'>
            <div className='w-[95%] h-[95%] overflow-hidden'>
                <Swiper
                    breakpoints={{
                        1024: {
                            direction: 'vertical',
                        }
                    }}
                    effect={"coverflow"}
                    mousewheel={{
                        clickable: true,
                        forceToAxis: true
                    }}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false
                    }}
                    centeredSlides={true}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                    }}

                    speed={500}
                    spaceBetween={30}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: true,
                    }}
                    modules={[Mousewheel, Pagination, Navigation, Autoplay, EffectCoverflow]}
                    shortSwipes={true}
                    className="mySwiper"
                >
                    {EventData.map((data, index) => {
                        return (
                            <SwiperSlide>
                                <div className='h-full glass-morph w-full lg:p-8 p-4 lg:gap-6 gap-3 grid grid-rows-2 direc lg:grid-cols-2 lg:grid-rows-1 bg-transparent'>
                                    <img className='h-full w-full  object-cover rounded-lg' src={data.image} alt="" />
                                    <div className="coming-event-imf h-full text-white lg:py-10 flex flex-col items-center justify-between  gap-6 text-sm lg:text-base">
                                        <div className='flex flex-col lg:gap-6 items-center justify-center'>
                                            <h1 className='event-name lg:text-[50px] text-[30px] py-3 font-bold lg:py-6'>{data.name}</h1>
                                            <p className="event-details  max-h-[35vw] text-xl lg:max-h-full overflow-hidden my-3 py-1 overflow-y-scroll scroll-bar lg:h-auto lg:w-4/5 lg:my-6">{data.details}</p>
                                            {/* <div className="date italic font-medium">Date: <span>{data.date} </span>Time:  <span>{data.time}</span></div> */}
                                        <button className='h-fit text-black mb-5 font-bold hover:scale-95 box-shadow transition-all duration-500 w-fit py-2 px-6  rounded-lg bg-white'><Link to={data.link}>Register</Link></button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default UpcomingEv