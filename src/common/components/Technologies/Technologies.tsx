// import { Swiper, SwiperSlide } from 'swiper/react';

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

import cs from 'classnames';
import FadeInComponent from '../../utils/fadeInComponent';
// SwiperCore.use([Autoplay, Pagination, Navigation]);


const TechnologiesList:Array<string> = [
    "javascript",
    "next-js",
    "node-js",
    "postgresql",
    "react",
    "sass",
    "typescript"
]

import s from './Technologies.module.scss';

const Technologies = () => {

    const TechnologyItem = ({ tech }) => {
        return (
            <li>
                <div className={s.bubble}>
                    <img src={`/img/technologies/${tech}.svg`} alt={`Technologia ${tech}`} />
                </div>
            </li>
        )
    }

    // {key % 3 == 0 ? <div className={s.row}> : null} 

    return (
        <div className={s.root} id="technologies">
            <div className="container">
                <FadeInComponent>
                <div className={cs(s.header, "boxhead center")}>
                    <h2>Technologie</h2>
                    <p>Lista technologii, z których korzystam i wykorzystuje do moich realizacji.</p>
                </div>
                </FadeInComponent>
                <FadeInComponent>

                    <div className={s.techsContainer}>
                        <ul className={s.list}>
                            {TechnologiesList.map((val, key) => 
                                <TechnologyItem tech={val} /> 
                            )}
                        </ul>
                    </div>
                </FadeInComponent>
            </div>
            
                
                    {/* <Swiper
                        freeMode={true}
                        autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                        }}
                        pagination={{
                        clickable: true
                        }}
                        navigation={true}
                        className="mySwiper"
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide>
                    </Swiper> */}
                        {/* {[0,0,0,0,0,0,0,0].map(key => <SwiperSlide className={s.slide}>
                            slide 1
                        </SwiperSlide>)} */}
                        {/* {TechnologiesList.map((val, key) => <SwiperSlide>
                            <img src={`/img/technologies/${val}.svg`} alt="" />
                        </SwiperSlide>)} */}
        </div>
    )
}

export default Technologies;