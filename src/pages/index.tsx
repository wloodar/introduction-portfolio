import { useEffect, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import cs from 'classnames';
import Typewritter from 'typewriter-effect';
import s from './index.module.scss';

import Technologies from '../common/components/Technologies/Technologies';
import Contact from '../modules/contact/contact';

import LampypolskaMockup from '../../public/img/works/lampypolska-mockup.png';
import SigmaMockup from '../../public/img/works/sigma-mockup.png';
import PointerEmoji from '../../public/img/icons/white-down-pointing-backhand-index.png';

const Home = () => {

    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
    const { t } = useTranslation();

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(isTransitioning => !isTransitioning);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
        <header className={s.header}>
            <div className="container">
                <div className={s.header__centerbox}>
                    <div className="boxhead">
                        <h1>
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
                        </h1>
                        {/* <h1>Twoja<span className="main-header__typing" id="headertyper"></span> strona</h1> */}
                    </div>
                    <p>{t('common:Present yourself or')}</p>
                    <p>{t('common:Unveil your idea')}.</p>
                    <a href="#" className="btn btnPrimary">{t('common:Explore')}</a>
                </div>
                <div className={cs(s.header__scroll, isTransitioning ? s.header__animation : undefined)}>
                    <p>Scroll</p>
                    <Image
                        src={PointerEmoji}
                        alt="Pointer emoji"
                    />
                </div>
                <div className={s.header__mockupLeft}>
                    <Image
                        src={LampypolskaMockup}
                        className = {isTransitioning ? s.header__animation : undefined}
                    />
                </div>
                <div className={s.header__mockupRight}>
                    <Image
                        src={SigmaMockup}
                        className = {isTransitioning ? s.header__animation : undefined}
                    />
                </div>
            </div>
        </header>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Technologies/>
        <Contact/>
        </>
    )
}

export default Home;