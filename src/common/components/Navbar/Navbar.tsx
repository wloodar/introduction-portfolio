import { useEffect, useState } from 'react';
import Link from 'next/link';
// @ts-ignore
import { animateScroll } from 'react-scroll';
import useTranslation from 'next-translate/useTranslation';
import cs from 'classnames';
import s from './Navbar.module.scss';

import NavList from '../NavList/NavList';
import NavItem from '../NavItem/NavItem';
import Internationalization from '../../../modules/internationalization/internationalization'; 

const Navbar = () => {

    const [navbarShadow, setNavbarShadow] = useState(false);
    const { t } = useTranslation();

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setNavbarShadow(true);
        } else {
            setNavbarShadow(false);
        }
    }

    useEffect(() => {

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    return (
        <nav className={cs(s.nav, navbarShadow ? s.nav__shadow : null )}>
            <div className="container">
                <div className={s.left}>
                    <div className={s.logo}>
                        <a onClick={() => animateScroll.scrollToTop()}>
                            <img src="/img/logo/wlodev-black-transparent.png" alt="" />
                        </a>
                    </div>
                    <div className={s.list}>
                        <NavList/>
                    </div>
                </div>
                <div className={s.right}>
                    <div className={s.lang}>
                        <Internationalization/>
                    </div>
                    <div className={s.action}>
                        <NavItem anchor="contact" itemName={t('common:Reach me')} classes="btn btnPrimary"/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;