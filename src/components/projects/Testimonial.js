import React from 'react';
import '../styles/testimonial.css';
import Img_01 from '../../assets/image_01.jpg';
import Img_02 from '../../assets/image_02.jpg';
import Img_03 from '../../assets/image_03.jpg';
import Img_04 from '../../assets/image_04.jpg';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";



const review = [
    {
        id: 1,
        img: Img_01,
        name: 'Bibek Poudel',
        desc: 'He has a alwasy posotive attitude, dedication, and clear vesion. One day definetly he will be succeful with that dedication.',
    },
    {
        id: 2,
        img: Img_02,
        name: 'Rabina Ghimire',
        desc: 'I saw him every day spending a ton of time to work on the projects and prepared to cracking the interview.',
    },
    {
        id: 3,
        img: Img_03,
        name: 'Praween Bhattrai',
        desc: 'He is a very hard working guy and have a passionate about technology.',
    },
    {
        id: 4,
        img: Img_04,
        name: 'Nirankar Panth',
        desc: 'I saw growing this guy. He never compromise work and ethic. He always believe in hard working.',
    },

]




const Testimonial = () => {
    return (
        <section className="testimonial section" id="testimonial">
            <h2 className="section-title">Testimonials</h2>
            <span className="section-subtitle">What colleagues said</span>
            <Swiper className="testimonial-container"
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    576: {
                    slidesPerView: 2,
                    },
                    768: {
                    slidesPerView: 2,
                    spaceBetween: 48,
                    },
                }}
                modules={[Pagination]}
                style={{
                    "--swiper-pagination-color": "#FFBA08",
                    "--swiper-pagination-bullet-inactive-color": "#999999",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-size": "16px",
                    "--swiper-pagination-bullet-horizontal-gap": "6px"
                }}
            >
                {
                    review.map(({id, img, name, desc}) => {
                        return (
                            <SwiperSlide className="review-card" key={id}>
                                <img src={img} alt="first" className="colleague-image" />
                                <h3 className="colleague-name">{name}</h3>
                                <p className="colleague-review">{desc}</p>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    );
};

export default Testimonial;
