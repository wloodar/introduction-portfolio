import s from './Footer.module.scss';
import useTranslation from 'next-translate/useTranslation';

import NavList from '../NavList/NavList';

function Footer () {

    const { t } = useTranslation();

    return (
        <footer className={s.footer}>
            <div className="container">
                <div className={s.navigation}>
                    <div className={s.logo}>
                        <h5>Jakub Włodarczyk</h5>
                    </div>
                    <div className={s.list}>
                        <NavList/>
                    </div>
                </div>
                <div className={s.bottom}>
                    <span>Copyright © 2021 Wlodev</span>
                    <span>Jakub Włodarczyk • All Rights Reserved</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;