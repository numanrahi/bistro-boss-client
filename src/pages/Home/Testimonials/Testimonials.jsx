import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { RiDoubleQuotesL } from 'react-icons/ri';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className='my-20'>
            <SectionTitle
                subHeading="What Our Client Say"
                heading="Testimonials"
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className='mx-24 my-16 flex flex-col items-center'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <RiDoubleQuotesL style={{width:'100px', height: '100px'}}></RiDoubleQuotesL>
                            <p className='py-8'>{review.details}</p>
                            <h4 className="text-2xl text-orange-400">{review.name}</h4>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;