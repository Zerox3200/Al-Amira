import React from 'react'
import './Companies.scss'
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Company1 from '../../../Assets/791fe52d-12f7-4e99-9052-53d5447edcac (2).png'
import Company2 from '../../../Assets/5883dd29-3d0e-49db-bde6-56b449cc3153 (2).png'
import Company3 from '../../../Assets/441354ad-9e37-4237-a790-067623b2022c (2).png'
import Company4 from '../../../Assets/783c376d-4f4b-4cd9-bd9b-49614c6efa6d (2).png'
import Company5 from '../../../Assets/73bce5c7-50ab-4252-a67f-ff2950f8aa0c (2).png'

export default function Companies() {

    return <section className='Companies'>
        <div className="w-full flex justify-center items-center p-5 mt-4">
            <h1>Contracting companies</h1>
        </div>
        <div className="w-full Companies_Slider">
            <Swiper
                pagination={{
                    clickable: true,
                }}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20, // Increase space here
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20, // Increase space here
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 30, // Increase space here to make it more noticeable
                    },
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="Company_Card">

                        <div className="CoverImageOfCompany" style={{ backgroundImage: `url("${Company1}")` }}></div>
                        <div className="flex justify-center items-center">
                            <p>شركة محاور النقل للنقليات</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Company_Card">
                        <div className="CoverImageOfCompany" style={{ backgroundImage: `url("${Company2}")` }}></div>
                        <div className="flex justify-center items-center">
                            <p>شركة محاور النقل للنقليات</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Company_Card">
                        <div className="CoverImageOfCompany" style={{ backgroundImage: `url("${Company3}")` }}></div>
                        <div className="flex justify-center items-center">
                            <p>شركة محاور النقل للنقليات</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Company_Card">
                        <div className="CoverImageOfCompany" style={{ backgroundImage: `url("${Company4}")` }}></div>
                        <div className="flex justify-center items-center">
                            <p>شركة محاور النقل للنقليات</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Company_Card">
                        <div className="CoverImageOfCompany" style={{ backgroundImage: `url("${Company5}")` }}></div>
                        <div className="flex justify-center items-center">
                            <p>شركة محاور النقل للنقليات</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Company_Card">
                        <div className="CoverImageOfCompany" style={{ backgroundImage: `url("${Company1}")` }}></div>
                        <div className="flex justify-center items-center">
                            <p>شركة محاور النقل للنقليات</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Company_Card">
                        <div className="CoverImageOfCompany" style={{ backgroundImage: `url("${Company2}")` }}></div>
                        <div className="flex justify-center items-center">
                            <p>شركة محاور النقل للنقليات</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>

}
