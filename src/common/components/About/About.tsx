import React, { RefObject, useRef } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import FadeInComponent from '../../utils/fadeInComponent';
import NavItem from '../NavItem/NavItem';

import MePic from '../../../../public/img/me.jpg';
import s from './About.module.scss';

const About:React.FC<{ header: RefObject<HTMLElement> }> = ({ header }) => {

    const sectionRef = useRef<HTMLDivElement>(null);
    const wrapRef = useRef<HTMLDivElement>(null);
    const descRef = useRef<HTMLDivElement>(null);

    const { t } = useTranslation();

    return (
        <div className="scroll" ref={sectionRef}>
            <section className={s.wrap}>
                <div className="container" ref={wrapRef} id="about" >
                    <FadeInComponent>
                        <div className={s.wrapper}>
                            <div className={s.description} ref={descRef}>
                                <div className="boxhead">
                                    <h2>{t('common:Hello there, my name is')} ...</h2>
                                </div>
                                <div className={s.highlight}>
                                    <p>FullStack Developer</p>
                                </div>
                                <div className="bsP">
                                    <p>I już od kilku lat pasjonuje mnie programowanie. Projektowanie i tworzenie nowych witryn internetowych czy aplikacji internetowych jest dla mnie niesamowitą przygodą i przyjemnością. Uwielbiam poszerzać swoje horyzonty i stawiać czoła nowym wyzwaniom.</p>
                                </div>
                                <NavItem anchor="technologies" itemName="Moje technologie ->" classes="btn"/>
                            </div>
                            <div className={s.memoji}>
                                <Image
                                    src={MePic}
                                    alt="Moje zdjęcie portretowe"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </FadeInComponent>
                </div>
            </section>
        </div>
    )
}

export default About;