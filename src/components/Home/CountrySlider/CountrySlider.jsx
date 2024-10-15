import React, { useRef } from 'react';
import './CountrySlider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Kwuit from '../../../Assets/kuwait (1).png'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function CountrySlider() {

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return <section className='CountrySlider px-5'>
        <div className="Slider_Container">
            <Swiper
                spaceBetween={10}
                loop={true}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 5,
                    },
                }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}

                onSwiper={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="flex gap-5 justify-center items-center SliderCard">
                        <img src={Kwuit} alt="Kwuit Flag" loading='lazy' className='rounded-full' width={36} height={37} />
                        <span>Kuwait</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex gap-5 justify-center items-center SliderCard">
                        <img src={Kwuit} alt="Kwuit Flag" loading='lazy' className='rounded-full' width={36} height={37} />
                        <span>Kuwait</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex gap-5 justify-center items-center SliderCard">
                        <img src={Kwuit} alt="Kwuit Flag" loading='lazy' className='rounded-full' width={36} height={37} />
                        <span>Kuwait</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex gap-5 justify-center items-center SliderCard">
                        <img src={Kwuit} alt="Kwuit Flag" loading='lazy' className='rounded-full' width={36} height={37} />
                        <span>Kuwait</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex gap-5 justify-center items-center SliderCard">
                        <img src={Kwuit} alt="Kwuit Flag" loading='lazy' className='rounded-full' width={36} height={37} />
                        <span>Kuwait</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex gap-5 justify-center items-center SliderCard">
                        <img src={Kwuit} alt="Kwuit Flag" loading='lazy' className='rounded-full' width={36} height={37} />
                        <span>Kuwait</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex gap-5 justify-center items-center SliderCard">
                        <img src={Kwuit} alt="Kwuit Flag" loading='lazy' className='rounded-full' width={36} height={37} />
                        <span>Kuwait</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex gap-5 justify-center items-center SliderCard">
                        <img src={Kwuit} alt="Kwuit Flag" loading='lazy' className='rounded-full' width={36} height={37} />
                        <span>Kuwait</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex gap-5 justify-center items-center SliderCard">
                        <img src={Kwuit} alt="Kwuit Flag" loading='lazy' className='rounded-full' width={36} height={37} />
                        <span>Kuwait</span>
                    </div>
                </SwiperSlide>
            </Swiper>
            <button ref={prevRef} className="custom-prev-arrow">
                <FaAngleLeft />
            </button>
            <button ref={nextRef} className="custom-next-arrow">
                <FaAngleRight />
            </button>

        </div>


        <p>
            We have recruitment services for all global countries, just contact us.
        </p>
    </section>

}
