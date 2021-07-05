import React, { RefObject, useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import FadeInComponent from '../../utils/fadeInComponent';

import Memoji from '../../../../public/img/memoji-like.png';

import s from './About.module.scss';

const About:React.FC<{ header: RefObject<HTMLElement> }> = ({ header }) => {

    const sectionRef = useRef<HTMLDivElement>(null);

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

            return tl;
        }

        const master = gsap.timeline();

        master.add(stopTrigger());

    }, [])

    return (
        <div className="scroll" ref={sectionRef}>
            <section id="about" className={s.wrap}>
                <FadeInComponent>
                    <div className="container">
                        <div className={s.wrapper}>
                            <div className={s.description}>
                                <div className="boxhead">
                                    <h2>Cześć!</h2>
                                </div>
                            </div>
                            <div className={s.memoji}>
                                <Image
                                    src={Memoji}
                                    alt="My memoji"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </FadeInComponent>
            </section>
        </div>
    )
}

export default About;