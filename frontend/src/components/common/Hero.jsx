import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import sliderOneImg from "../../assets/images/banner-1.jpg";
import sliderTwoImg from "../../assets/images/banner-2.jpg";

const Hero = () => {
    return (
        <section className='section-1'>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                breakpoints={{
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    }
                }}
            >
                <SwiperSlide>
                    <div className="content" style={{ backgroundImage: `url(${sliderOneImg})` }}>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="content" style={{ backgroundImage: `url(${sliderTwoImg})` }}>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Hero
