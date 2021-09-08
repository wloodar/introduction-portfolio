import { useLayoutEffect, useState, useRef } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Typewritter from 'typewriter-effect';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import s from './index.module.scss';

import NavItem from '../common/components/NavItem/NavItem';

import Layout from '../common/components/Layout/Layout';
const About = dynamic(() => import('../common/components/About/About'))
const Technologies = dynamic(() => import('../common/components/Technologies/Technologies'))
const Realizations = dynamic(() => import('../common/components/Realizations/Realizations'))
const Contact = dynamic(() => import('../modules/contact/contact'))

import LampypolskaMockup from '../../public/img/works/lampypolska-mockup.png';
import SigmaMockup from '../../public/img/works/sigma-mockup.png';
import PointerEmoji from '../../public/img/icons/white-down-pointing-backhand-index.png';

const Home = () => {

    const [windowWidth, setWindowWidth] = useState<Number>(0);
    const headerRef = useRef<HTMLElement>(null);
    const headerBg = useRef<HTMLDivElement>(null);
    const { t } = useTranslation();

    useLayoutEffect(() => {
        function updateSize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', updateSize);

        updateSize();

        return () => window.removeEventListener('resize', updateSize);
    })
    return (
        <Layout>
            <Head>
                <title>Wlodev - Fullstack Web Dev | Jakub Wlodarczyk&apos;s Portfolio</title>
                <link rel="shortcut icon" href="img/assets/icon-white-gradient-bright.png"/>
            </Head>
            <header className={s.header} id="main-header" ref={headerRef}>
                <div className="container">
                    <div className={s.header__centerbox}>
                        <div className="boxhead">
                            <h1>
                                {windowWidth > 480 ? 
                                    <>
                                        {t('common:Your')} 
                                        <Typewritter
                                            options={{
                                                autoStart: true,
                                                loop: true,
                                                delay: 40,
                                                strings: [
                                                    `\u00A0${t('common:beauteous')}`,
                                                    `\u00A0${t('common:mind-blowing')}`,
                                                    `. ${t('common:Simply your')}`
                                                ],
                                            }}
                                        />
                                        <span className="block">{t('common:website')}.</span>
                                    </>
                                : "Twoja strona. Nowoczesna & Szybka"}
                            </h1>
                        </div>
                        <p>{t('common:Present yourself or')}</p>
                        <p>{t('common:Unveil your idea')}.</p>
                        <NavItem anchor="contact" itemName={t('common:Reach me')} classes="btn btnPrimary" />
                    </div>
                    <div className={s.header__scroll}>
                        <p>Scroll</p>
                        <Image
                            src={PointerEmoji}
                            alt="Pointer emoji"
                        />
                    </div>
                    <div className={s.header__mockupLeft}>
                        <Image
                            src={LampypolskaMockup}
                        />
                    </div>
                    <div className={s.header__mockupRight}>
                        <Image
                            src={SigmaMockup}
                        />
                    </div>
                </div>
            </header>
            <About header={headerRef}/>
            <Technologies/>
            <Realizations/>
            <Contact/>
        </Layout>
    )
}

export default Home;