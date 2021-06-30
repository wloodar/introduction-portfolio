import { useEffect, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import cs from 'classnames';
import s from './Navbar.module.scss';

const Navbar = () => {

    const [navbarShadow, setNavbarShadow] = useState(false);

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

    const { t } = useTranslation();

    return (
        <nav className={cs(s.nav, navbarShadow ? s.nav__shadow : null )}>
            <div className="container">
                <div className={s.left}>
                    <div className={s.logo}>
                        <h5>Wlodar</h5>
                    </div>
                    <div className={s.list}>
                        <ul>
                            <li><a href="#about">{t('common:About me')}</a></li>
                            <li><a href="#portfolio">{t('common:My realizations')}</a></li>
                            <li><a href="#technologies">{t('common:Technologies')}</a></li>
                            <li><a href="#kontakt">{t('common:Contact')}</a></li>
                        </ul>
                    </div>
                </div>
                <div className={s.right}>
                    <div className={s.lang}>
                        <button className="btn btn-border">PL</button>
                    </div>
                    <div className={s.action}>
                        <button className="btn btn-primary-bright">{t('common:Reach me')}</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;