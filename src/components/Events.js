import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const Events = () => {
  return (
    <div className='h-screen w-full flex justify-center pt-20 bg-gradient-to-bl from-zinc-950 to-blue-950 relative'>
      <div className='w-[95%] h-[95%] overflow-hidden'>
        <Swiper
             breakpoints={{
              1024: {
                  direction: 'vertical',
                  mousewheel: {
                      clickable: true
                  }
              }
          }}
          effect={"coverflow"}
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
          mousewheel={{
              clickable: true,
              forceToAxis: true
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
          <SwiperSlide>
            <div className='h-full glass-morph relative w-full bg-transparent'>
              <img className='h-full w-full object-cover rounded-lg' src="https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png" alt="" />
              <div className=" absolute inset-0 w-full h-full flex justify-center items-center text-3xl font-extrabold text-white bg-zinc-900 bg-opacity-70 event-imf bg-transparent rounded-lg">WORKSHOP</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-full glass-morph relative w-full bg-transparent'>
              <img className='h-full w-full object-cover rounded-lg' src="https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png" alt="" />
              <div className=" absolute inset-0 w-full h-full flex justify-center items-center text-3xl font-extrabold text-white bg-zinc-900 bg-opacity-70 event-imf bg-transparent rounded-lg">Owasp Event</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-full glass-morph relative w-full bg-transparent'>
              <img className='h-full w-full object-cover rounded-lg' src="https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png" alt="" />
              <div className=" absolute inset-0 w-full h-full flex justify-center items-center text-3xl font-extrabold text-white bg-zinc-900 bg-opacity-70 event-imf bg-transparent rounded-lg">Owasp Event</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-full glass-morph relative w-full bg-transparent'>
              <img className='h-full w-full object-cover rounded-lg' src="https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png" alt="" />
              <div className=" absolute inset-0 w-full h-full flex justify-center items-center text-3xl font-extrabold text-white bg-zinc-900 bg-opacity-70 event-imf bg-transparent rounded-lg">Owasp Event</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-full glass-morph relative w-full bg-transparent'>
              <img className='h-full w-full object-cover rounded-lg' src="https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png" alt="" />
              <div className=" absolute inset-0 w-full h-full flex justify-center items-center text-3xl font-extrabold text-white bg-zinc-900 bg-opacity-70 event-imf bg-transparent rounded-lg">Owasp Event</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Events