import React from 'react'
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation'

import FadeInComponent from '../../utils/fadeInComponent';
import s from './Realizations.module.scss';

interface realizations {    
    title: string,
    description: string,
    pic_dest: string,
    demo_link?: string,
    code_link?: string
}

const realizationsList: realizations[] = [
    {
        title: "Sklep internetowy Lampypolska.pl",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum sodales augue, sed dictum ligula eleifend eget. Proin tortor mauris, cursus et posuere et, tempor fringilla erat. Nullam id vestibulum tortor, in dapibus eros.",
        pic_dest: '/img/realizations/lampypolska.png',
        demo_link: 'https://lampypolska.pl/'
    },
    {
        title: "Portal Ekipakopernika",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum sodales augue, sed dictum ligula eleifend eget. Proin tortor mauris, cursus et posuere et, tempor fringilla erat. Nullam id vestibulum tortor, in dapibus eros.",
        pic_dest: '/img/realizations/ekipakopernika.png',
        demo_link: "http://ekipakopernika.wlodev.com/"
    },
    {
        title: "Wizytówka PolerowanieAL",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum sodales augue, sed dictum ligula eleifend eget. Proin tortor mauris, cursus et posuere et, tempor fringilla erat. Nullam id vestibulum tortor, in dapibus eros.",
        pic_dest: '/img/realizations/polerowanieal.png',
        demo_link: "https://polerowanieal.pl/"
    }
]

const Realizations = () => {

    const { t } = useTranslation();

    return (
        <div className="container" id="realizations">
            <div className={s.wrap}>
                <div className="boxhead boxhead__subtitle">
                    <h2>{t('common:My realizations')}</h2>
                    <p>Sklep internetowy, wizytówka? A może portal?</p>
                </div>
                <div className={s.list}>
                    <ul>
                        {realizationsList.map((val, key) => (
                            <FadeInComponent>
                                <li className={s.item}>
                                    <div className={s.info}>
                                        <h3>{val.title}</h3>
                                        <p>{val.description}</p>
                                        <a href={val.demo_link} className="btn btnPrimary" target="_blank">
                                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 64 64" enable-background="new 0 0 64 64" xmlSpace="preserve"><g>	<g>		<g>			<polygon points="53,56 8,56 8,11 30,11 30,3 0,3 0,64 61,64 61,34 53,34 			"/>		</g>	</g>	<g>		<g>			<polygon points="42,0 50,8 33,25 39,31 56,14 64,23 64,0 			"/>		</g>	</g></g></svg>
                                            {t('common:Open website')}
                                        </a>
                                    </div>
                                    <div className={s.pic}>
                                        <a href={val.demo_link} target="_blank">
                                            <img src={val.pic_dest} alt="" />
                                        </a>
                                    </div>
                                </li>
                            </FadeInComponent>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Realizations
