// import { Swiper, SwiperSlide } from 'swiper/react';

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

import cs from 'classnames';

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
    return (
        <div className={s.root} id="technologies">
            <div className={cs(s.header, "boxhead center")}>
                <h2>Technologie</h2>
                <p>Lista technologii, z których korzystam i wykorzystuje do moich realizacji.</p>
            </div>
            <div className={s.list}>
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
        </div>
    )
}

export default Technologies;