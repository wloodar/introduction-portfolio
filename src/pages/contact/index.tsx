import useTranslation from 'next-translate/useTranslation';
import Layout from '../../common/components/Layout/Layout';

import s from './contact.module.scss';

const Contact = () => {

    const { t } = useTranslation();

    return (
        <Layout>
            <div className="s-container">
                <div className="boxhead">
                    <h2>{t('common:In touch?')}</h2>
                </div>
                <form className={s.contactForm}>
                    <div className="formGroup">
                        <label htmlFor="inputName" className="bsLabel">{t('common:Label name')}</label>
                        <input 
                            type="text" 
                            name="name" 
                            id="inputName" 
                            className="bsInput" 
                            placeholder={t('common:Input name')} 
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="inputEmail" className="bsLabel">{t('common:Label email')}</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="inputEmail" 
                            className="bsInput" 
                            placeholder={t('common:Input email')} 
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="" className="bsLabel">{t('common:Label message')}</label>
                        <textarea name="message" id="textareaMessage" className="bsTextarea" placeholder={t('common:Textarea message')} required></textarea>
                    </div>
                    <button type="submit" className="btn btnPrimary">{t('common:Send')}</button>
                </form>
                <div className={s.contactDetails}>
                    <div className="boxhead">
                        <h2>Github</h2>
                    </div>
                    <div className={s.contactDetails__row}>
                        <a href="https://github.com/wloodar" target="_blank">github.com/wloodar</a>
                    </div>
                    <div className="boxhead">
                        <h2>{t('common:Phone')}</h2>
                    </div>
                    <div className={s.contactDetails__row}>
                        <a href="tel:+48501122712" target="_blank">+48 501 122 712</a>
                    </div>
                    <div className="boxhead">
                        <h2>Email</h2>
                    </div>
                    <div className={s.contactDetails__row}>
                        <a href="mailto:wlodardev@gmail.com" target="_blank">wlodardev@gmail.com</a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact;