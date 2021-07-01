import s from './Footer.module.scss';
import useTranslation from 'next-translate/useTranslation';

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
                            <li><a href="#about">{t('common:About me')}</a></li>
                            <li><a href="#portfolio">{t('common:My realizations')}</a></li>
                            <li><a href="#technologies">{t('common:Technologies')}</a></li>
                            <li><a href="#kontakt">{t('common:Contact')}</a></li>
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