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
    code_link?: string,
    technologies?: Array<String>
}

const realizationsList: realizations[] = [
    {
        title: "Portal Ekipakopernika",
        description: "Ekipakopernika powstało z myślą przedstawienia zainteresowań, zdolności i talentów uczniów szkoły licealnej w Chełmnie. Portal umożliwiał dodawanie / administrację postami, dzielenie publikacji na poszczególne kategorie, umieszczanie wydarzeń oraz wyświetlanie listy osób zangażowanych w projekt. W ramach aplikacji, został stworzony od fundamentów backend wraz z frontendem i panelem administracyjnym.",
        pic_dest: '/img/realizations/ekipakopernika.png',
        demo_link: "https://ekipakopernika.wlodev.com/",
        technologies: ["react", "postgresql", "node-js"]
    },
    {
        title: "Wizytówka PolerowanieAL",
        description: "Firma PolerowanieAL oferuje usługi polerowania wibracyjnego aluminium, piaskowania & szkiełkowania, oraz renowacji zabytkowych motocykli. Głównym planem realizacji było stworzenie atrakcyjnej wizytówki firmy w postaci strony internetowej. W tym celu zastosowana została przejrzysta szata graficzna opierająca się na nowoczesnych technologia, w efekcie przekładając się na wygodną nawigację i szybkie działanie strony.",
        pic_dest: '/img/realizations/polerowanieal.png',
        demo_link: "https://polerowanieal.pl/",
        technologies: ["gatsby", "sass"]
    },
    {
        title: "Sklep internetowy Lampypolska.pl",
        description: "Po upływie ponad 25 lat nadszedł czas na wejście w nowy rynek - sklep internetowy Lampypolska.pl powstał z myślą o poszerzeniu swoich możliwości sprzedaży wkraczając w temat ecommerce. Głównym założeniem realizacji, było stworzenie wydajnego i szybkiego sklepu internetowego wraz z przejrzystą szatą graficzną i intuicyjnym procesem zakupowym.",
        pic_dest: '/img/realizations/lampypolska.png',
        demo_link: 'https://lampypolska.pl/',
        technologies: ["shoper.png", "sass", "google-ads"]
    },
    {
        title: "Wizytówka ELCO",
        description: "Już od ponad 20 lat, firma ELCO zajmuje się produkcją klasycznych lamp z ceramiki w szczególnie zachowanej tradycjii. Po upływie wielu lat, nadszedł czas na zmiany. W tym celu strona internetowa firmy ELCO przeszła gruntowne zmiany pod kątem wykorzystanej technologii oraz szaty graficznej. Wprowadzony został styl minimalistyczny, by nie odciągać uwagi potencjalnego klienta od samej oferty.",
        pic_dest: '/img/realizations/elco-lampy-ceramiczne.png',
        demo_link: "http://lampyceramiczne.pl/",
        technologies: ["gatsby", "sass"]
    }
]

const Realizations = () => {

    const { t } = useTranslation();

    return (
        <div className="container" id="realizations">
            <div className={s.wrap}>
                <div className="boxhead boxhead__subtitle">
                    <h2>Wykonane projekty</h2>
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
                                        <div className={s.technologies}>
                                            {val.technologies?.map(tech => <img src={`/img/technologies/${tech.includes(".png") ? tech.replace('.png', '') : tech}.${tech.includes(".png") ? "png" : "svg"}`} alt={`Technologia ${tech}`} />)}
                                        </div>
                                        <a href={val.demo_link} className="btn btnPrimary" target="_blank">
                                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 64 64" enable-background="new 0 0 64 64" xmlSpace="preserve"><g>	<g>		<g>			<polygon points="53,56 8,56 8,11 30,11 30,3 0,3 0,64 61,64 61,34 53,34 			"/>		</g>	</g>	<g>		<g>			<polygon points="42,0 50,8 33,25 39,31 56,14 64,23 64,0 			"/>		</g>	</g></g></svg>
                                            {t('common:Open website')}
                                        </a>
                                    </div>
                                    <div className={s.pic}>
                                        <a href={val.demo_link} target="_blank">
                                            <div className={s.pic__container}>
                                                <Image 
                                                    src={val.pic_dest} 
                                                    alt="Memoji Face" 
                                                    layout="fill"
                                                    className="image"
                                                />                                       
                                            </div>
                                            <div className={s.pic__overlay}>
                                                <p>
                                                    {val.demo_link}  
                                                </p>
                                            </div>
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
