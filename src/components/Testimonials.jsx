import '../styles/Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import Card2 from './reusable/Card2';
import { useRef, useState } from 'react';
function Testimonials() {
    const studentreview = [
        {
            name: "Rahul Sharma",
            star: 5,
            review: "I have very good experience with them while learning MERN. The explanation of each topic is very clear and easy to understand. I am very happy with the services they provide. ",
            time: "2 months ago"
        },
        {
            name: "Rahul Sharma",
            star: 5,
            review: "I have very good experience with them while learning MERN. The explanation of each topic is very clear and easy to understand. I am very happy with the services they provide. ",
            time: "2 months ago"
        },
        {
            name: "Rahul Sharma",
            star: 5,
            review: "I have very good experience with them while learning MERN. The explanation of each topic is very clear and easy to understand. I am very happy with the services they provide. ",
            time: "2 months ago"
        },
        {
            name: "Rahul Sharma",
            star: 5,
            review: "I have very good experience with them while learning MERN. The explanation of each topic is very clear and easy to understand. I am very happy with the services they provide. ",
            time: "2 months ago"
        },
        {
            name: "Rahul Sharma",
            star: 5,
            review: "I have very good experience with them while learning MERN. The explanation of each topic is very clear and easy to understand. I am very happy with the services they provide. ",
            time: "2 months ago"
        },
    ]
    const swiper = useRef()
    const breakpoints = {
        920: {
            slidesPerView: 3,
            spaceBetween: 23
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        0: {
            slidesPerView: 1,
            spaceBetween: 0
        }
    }
    const [acctiveSlide, setActiveSlide] = useState(0)
    console.log(acctiveSlide)
    return (
        <>
            <section className="section testimonials">
                <div className="testimonials-heading">What our students
                    have to say...</div>
                <div className="testimonial-container">
                    <Swiper
                        // loop={true}
                        onSlideChange={(child) => { console.log(swiper.current.swiper); setActiveSlide(child.activeIndex) }}
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        ref={swiper}
                        breakpoints={breakpoints}
                    >
                        {
                            studentreview.map((review, idx) => <SwiperSlide key={idx}><Card2 review={review} /></SwiperSlide>)
                        }
                    </Swiper>
                </div>
                <div className="testimonial-navigation">
                    <div className={`testimonial-navigation-gray`} onClick={() => swiper.current.swiper.slidePrev()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.71967 11.4697C7.42678 11.7626 7.42678 12.2374 7.71967 12.5303L15.2197 20.0303C15.5126 20.3232 15.9874 20.3232 16.2803 20.0303C16.5732 19.7374 16.5732 19.2626 16.2803 18.9697L9.31066 12L16.2803 5.03033C16.5732 4.73744 16.5732 4.26256 16.2803 3.96967C15.9874 3.67678 15.5126 3.67678 15.2197 3.96967L7.71967 11.4697Z" fill="white" />
                        </svg>
                    </div>
                    <div className="testimonial-navigation-middle">
                        {studentreview.map((item, idx) => <div className={`testimonial-slide-line ${idx === acctiveSlide && "active"}`} key={idx}></div>)}
                    </div>
                    <div className={`testimonial-navigation-gray`} onClick={() => swiper.current.swiper.slideNext()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M16.2803 11.4697C16.5732 11.7626 16.5732 12.2374 16.2803 12.5303L8.78033 20.0303C8.48744 20.3232 8.01256 20.3232 7.71967 20.0303C7.42678 19.7374 7.42678 19.2626 7.71967 18.9697L14.6893 12L7.71967 5.03033C7.42678 4.73744 7.42678 4.26256 7.71967 3.96967C8.01256 3.67678 8.48744 3.67678 8.78033 3.96967L16.2803 11.4697Z" fill="white" />
                        </svg>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Testimonials;