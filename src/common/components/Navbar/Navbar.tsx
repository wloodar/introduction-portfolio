import { useEffect, useState } from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import cs from 'classnames';
import s from './Navbar.module.scss';

import NavItem from '../NavItem/NavItem';
import Internationalization from '../../../modules/internationalization/internationalization'; 

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
                        <h5><Link href="/">Wlodar</Link></h5>
                    </div>
                    <div className={s.list}>
                        <ul>
                            <li>
                                <NavItem anchor="about" itemName={t('common:About me')}/>
                            </li>
                            <li>
                                <NavItem anchor="realizations" itemName={t('common:My realizations')}/>
                            </li>
                            <li>
                                <NavItem anchor="technologies" itemName={t('common:Technologies')}/>
                            </li>
                            <li>
                                <NavItem anchor="contact" itemName={t('common:Contact')}/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={s.right}>
                    <div className={s.lang}>
                        <Internationalization/>
                    </div>
                    <div className={s.action}>
                        <Link href="/contact">
                            <a className="btn btnPrimary">{t('common:Reach me')}</a>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;