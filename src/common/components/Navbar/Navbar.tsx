import { useEffect, useState, useRef } from 'react';
import $ from 'jquery';
// @ts-ignore
import { animateScroll } from 'react-scroll';
import useTranslation from 'next-translate/useTranslation';
import cs from 'classnames';
import s from './Navbar.module.scss';

import NavList from '../NavList/NavList';
import NavItem from '../NavItem/NavItem';

const Navbar = () => {

    const [navbarShadow, setNavbarShadow] = useState(false);
    const [navOpen, setNavOpen] = useState(false);
    const navListRef = useRef(null);
    const { t } = useTranslation();

    const handleScroll = () => {
        if (navOpen) {
            toggleMenu();
        }

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

    const toggleMenu = () => {
        
        if (!navOpen) {
            $(navListRef.current).find("li").each(function(i: any) {
                var el = $(this);

                setTimeout(function(){
                    el.animate({opacity: "1"}, { step: function() {
                        $(this).css({transform: 'translateY(0)'})
                    }}, {duration: 200, queue: false})
                            .delay(0).animate({opacity: 1}, {duration: 200});
                },i*50);
            });
        } else {
            $(navListRef.current).find("li").each(function(i: any) {
                var el = $(this);
        
                setTimeout(function(){
                    el.animate({opacity: "0"}, {step: function() {
                        $(this).css({transform: ''})
                    }}, {duration: 200, queue: false})
                            .delay(0).animate({opacity: 0}, {duration: 200});
                },i*50);
            });
        }

        setNavOpen(!navOpen);
    }

    return (
        <nav className={cs(s.nav, navbarShadow ? s.nav__shadow : null )}>
            <div className="container">
                <div className={s.logo}>
                    <a onClick={() => animateScroll.scrollToTop()}>
                        <img src="/img/logo/wlodev-black-transparent.png" alt="" />
                    </a>
                </div>
                <div className={s.mobileRight}>
                    <div className={s.mobileIcon}>
                        <label htmlFor="check">
                            <input type="checkbox" id="check" onClick={() => toggleMenu()} checked={navOpen}/> 
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>
                </div>
                <span className={s.mobile} style={ navOpen ? { visibility: 'visible', opacity: '1' } : undefined } onClick={() => toggleMenu()}>
                    <span className={s.mobileBox}>
                        <div className={s.list} ref={navListRef}>
                            <NavList/>
                        </div>
                        <div className={s.right}>
                            <div className={s.action}>
                                <NavItem anchor="contact" itemName={t('common:Reach me')} classes="btn btnPrimary"/>
                            </div>
                        </div>
                    </span>
                </span>
            </div>
        </nav>
    )
}

export default Navbar;