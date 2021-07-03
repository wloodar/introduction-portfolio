import s from './Footer.module.scss';
import useTranslation from 'next-translate/useTranslation';

import NavItem from '../NavItem/NavItem';

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
                <div className={s.bottom}>
                    <span>Copyright © 2021 Wlodar</span>
                    <span>Jakub Włodarczyk • All Rights Reserved</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;