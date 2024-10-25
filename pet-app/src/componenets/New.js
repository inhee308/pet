import React, { useState } from 'react';
import Card1 from './Card1';
import data1 from '../data/data1';
import { Swiper, SwiperSlide } from 'swiper/react';
import './New.scss';
import 'swiper/css';
//import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import { Link } from 'react-router-dom';




const New = () => {
    let [adddata] = useState(data1);
    return (
        <div className='newboxWrap'>
            <h2>Hello New Store</h2>
            <p>pet store introduce</p>
            <div className="newslider">
                <Swiper className='newboxswiper'
                    modules={[Navigation, Autoplay]}
                    spaceBetween={5}
                    slidesPerView={4}
                    navigation
                    // pagination={{ type: 'fraction' }}
                    loop={true}
                    speed={                        
                        5000
                    }
                    autoplay={
                        {
                            delay:0,
                            disableOnInteraction:false,
                        }
                    }
                    loopAdditionalSlides={1}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        adddata.map((data1, i) => {
                            return (
                                <SwiperSlide key={i}>
                                    <Card1 data1={data1}  i={i}/>
                                </SwiperSlide>

                            )
                        })
                    }


                </Swiper>
            </div>
        </div>
    );
};

export default New;