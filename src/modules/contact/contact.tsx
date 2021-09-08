import useTranslation from 'next-translate/useTranslation';
import React, { useState } from 'react';
import Image from 'next/image'
import MemojiFace from '../../../public/img/memoji-peace.png';

import FadeInComponent from '../../common/utils/fadeInComponent';
import s from './contact.module.scss';

interface ContactCredentials {
    name: string,
    email: string,
    message: string
}

const emptyContactCredentials:ContactCredentials = {
    name: "",
    email: "",
    message: ""
}

const Contact = () => {

    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState<Boolean>(false);
    const [contactSuccess, setContactSuccess] = useState<Boolean>(false);
    const [contactFormValues, setContactFormValues] = useState<ContactCredentials>(emptyContactCredentials)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setContactFormValues({...contactFormValues, [e.target.name]: e.target.value})
    }

    const submitContactForm = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsSubmitting(!isSubmitting);
        
        const credentials: ContactCredentials = {
            name: contactFormValues.name,
            email: contactFormValues.email,
            message: contactFormValues.message
        }

        let result = await fetch('/api/sendmail', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })      

        setIsSubmitting(!isSubmitting);

        if (result.status === 200) {
            setContactFormValues(emptyContactCredentials);
            setContactSuccess(true);
        } else {
            setIsModalOpen(true);
        }
    }

    return (
        <>

        {isModalOpen ? <div className={s.modal}>
            <div className={s.modalBox}>
                <div className={s.modalBox__info}>
                    <h3>Coś poszło nie tak ...</h3>
                    <p>Wystąpił błąd podczas wysyłania wiadomości - sprawdź czy wszystkie pola zostały prawidłowo wypełnione.</p>
                </div>
                <button onClick={() => setIsModalOpen(!isModalOpen)} className="btn btnPrimary">Okej</button>
            </div>
        </div> : null}


        {contactSuccess ? <div className="s-container">
            <div className={s.success}>
                <img src="/img/assets/mailSend.svg" alt="" />
                <div className={s.successInfo}>
                    <div className="boxhead center">
                        <h2>Wiadomość wysłana!</h2>
                    </div>
                    <div className="bsP">
                        <p>Twoja wiadomość została pomyślnie wysłana - Postaram się jak najszybciej na nią odpowiedzieć!</p>
                    </div>
                </div>
            </div>
        </div> : <FadeInComponent>
            <div className="s-container" id="contact">
                <div className="boxhead center">
                    <h2>{t('common:In touch?')}</h2>
                </div>
                <form className={s.contactForm} onSubmit={submitContactForm}>
                    <div className={s.contactForm__overlay} style={ isSubmitting ? { opacity: '0.35' } : { opacity: '1' } }>
                        <div className="formGroup">
                            <label htmlFor="inputName" className="bsLabel">{t('common:Label name')}</label>
                            <input 
                                type="text" 
                                name="name" 
                                id="inputName" 
                                className="bsInput" 
                                placeholder={t('common:Input name')} 
                                onChange={changeHandler}
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
                                onChange={changeHandler}
                                required
                            />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="" className="bsLabel">{t('common:Label message')}</label>
                            <textarea 
                                name="message" 
                                id="textareaMessage" 
                                className="bsTextarea" 
                                placeholder={t('common:Textarea message')} 
                                onChange={changeHandler}
                                required
                            ></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btnPrimary" disabled={ isSubmitting ? true : false }>
                        {isSubmitting ? <img src="/img/assets/loading3.gif" alt="" /> : t('common:Send')}
                    </button>
                </form>
            </div>
        </FadeInComponent> }

        <div className={s.contactDetails}>
            <div className="container">
                <div className={s.contactDetails__inner}>
                    <FadeInComponent>
                        <div className="s-container">
                            <div className={s.contactDetails__info}>
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
                            <div className={s.contactDetails__graphic}>
                                <div className={s.contactDetails__memoji}>
                                    <Image 
                                        src={MemojiFace} 
                                        alt="Memoji Face" 
                                        objectFit="contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </FadeInComponent>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact;