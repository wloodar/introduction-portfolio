import React, { RefObject, useEffect, useRef } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import gsap from 'gsap';
import FadeInComponent from '../../utils/fadeInComponent';

// import Memoji from '../../../../public/img/memoji-like.png';
import MePic from '../../../../public/img/me.jpg';
import WavingHand from '../../../../public/img/icons/waving-hand.png';

import s from './About.module.scss';

const About:React.FC<{ header: RefObject<HTMLElement> }> = ({ header }) => {

    const sectionRef = useRef<HTMLDivElement>(null);
    const wrapRef = useRef<HTMLDivElement>(null);
    const descRef = useRef<HTMLDivElement>(null);
    const picRef = useRef<htmld>(null);

    const { t } = useTranslation();

    useEffect(() => {

        const stopTrigger = () => {
            const tl = gsap.timeline({
                delay: 1,
                scrollTrigger: {
                    trigger: header.current,
                    start: "top top",
                    pin: true,
                    scrub: true,
                }
            })

            tl.to(sectionRef.current, { y: header.current?.clientHeight === undefined ? -200 : - header.current?.clientHeight! });
            tl.to(wrapRef.current, { translateY: 0 });
            tl.fromTo(descRef.current, { translateY: -30 }, { translateY: 0 });
            tl.to(picRef.current, { opacity: 1, translateY: 0 }, { duration: 0.5 });
            // tl.to(sectionRef.current, { background: "#000" });

            return tl;
        }

        const master = gsap.timeline();

        master.add(stopTrigger());

    }, [])

    return (
        <div className="scroll" ref={sectionRef}>
            <section className={s.wrap}>
                <div className="container" ref={wrapRef} id="about" >
                    {/* <FadeInComponent> */}
                        <div className={s.wrapper}>
                            <div className={s.description} ref={descRef}>
                                <div className="boxhead boxhead__icon">
                                    <h2>{t('common:Hello there, my name is')}</h2>
                                    <div className="icon">
                                        <Image
                                            src={WavingHand}
                                            alt="Hand Emoji"
                                        />
                                    </div>
                                </div>
                                <div className="bsP">
                                    <p>I już od kilku lat pasjonuje mnie programowanie. Projektowanie i tworzenie nowych witryn internetowych czy aplikacji internetowych jest dla mnie niesamowitą przygodą i przyjemnością. Uwielbiam poszerzać swoje horyzonty i stawiać czoła nowym wyzwaniom.</p>
                                </div>
                                {/* <div className="boxhead">
                                    <h2>{t('common:Hello there, my name is')}</h2>
                                </div> */}
                            </div>
                            <div className={s.memoji} ref={picRef}>
                                <Image
                                    src={MePic}
                                    alt="My memoji"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    {/* </FadeInComponent> */}
                </div>
            </section>
        </div>
    )
}

export default About;