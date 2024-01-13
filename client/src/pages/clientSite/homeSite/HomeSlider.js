import React from 'react';
import './Home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

function HomeSlider() {
    return (
        <div>
            <div className='home__slider'>
                <Swiper 
                    navigation={true} 
                    modules={[Navigation, Autoplay]}
                    loop={true}
                    autoplay={{delay: 5000}}
                    className="slider__swiper">             
                    <SwiperSlide className='swiper__slide'>
                        <div className='slide__text'>
                            <h1>Matte Lipstick BBIA Last Velvet Tip Tint Version 5 Official Store</h1>
                            <h2>BBIA</h2>
                            <p>Bbia Last Velvet Lip Tint is a matte lipstick with
							extremely high adhesion, attracts to your lips like a magnet and
							gives clear color after just one application.</p>
                        </div>
                        <div className='slide__img'>
                            <img src='../../img/homeImg/Picture1.png' alt='Ảnh slider'></img>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper__slide'>
                    <div className='slide__text'>
                            <h1>Matte Lipstick BBIA Last Velvet Tip Tint Version 5 Official Store</h1>
                            <h2>BBIA</h2>
                            <p>Bbia Last Velvet Lip Tint is a matte lipstick with
							extremely high adhesion, attracts to your lips like a magnet and
							gives clear color after just one application.</p>
                        </div>
                        <div className='slide__img'>
                            <img src='../../img/homeImg/Picture10.png' alt='Ảnh slider'></img>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default HomeSlider;