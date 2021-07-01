import cs from 'classnames';
import useTranslation from 'next-translate/useTranslation'
import s from './contact.module.scss';

const contact = () => {

    let { t } = useTranslation();

    return (
        <section className={cs(s.contact, "container")}>
            <div className="boxhead center">
                <h2>{t("common:In touch?")}</h2>
            </div>
            <div className={s.credentials}>
                <ul className="center">
                    <li>
                        <h5>E-mail</h5>
                        <a href="mailto:wlodardev@gmail.com">wlodardev@gmail.com</a>
                    </li>
                    <li>
                        <h5>{t("common:Phone")}</h5>
                        <a href="tel:+48501122712">+48 501 122 712</a>
                    </li>
                    <li>
                        <h5>Instagram</h5>
                        <div>
                            <a href="https://instagram.com/wloda_r" target="_blank">@wlodar</a>
                        </div>   
                        <div>
                            <a href="https://instagram.com/wloda_r" target="_blank">instagram.com/wloda_r</a>
                        </div>                     
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default contact;