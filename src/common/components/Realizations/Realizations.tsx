import React from 'react'
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation'

import s from './Realizations.module.scss';

interface realizations {    
    title: string;
    description: string;
    pic_dest: string;
}

const realizationsList: realizations[] = [
    {
        title: "Sklep internetowy Lampypolska.pl",
        description: "lorem ipsum",
        pic_dest: './screens/lampypolska.png'
    }
]

const Realizations = () => {

    const { t } = useTranslation();

    return (
        <div className="s-container" id="realizations">
            <div className={s.wrap}>
                <div className="boxhead boxhead__subtitle">
                    <h2>{t('common:My realizations')}</h2>
                    <p>Sklep internetowy, wizytówka? A może portal?</p>
                </div>
                <div className={s.list}>
                    <ul>
                        {realizationsList.map((val, key) => (
                            <li>
                                <div>
                                    <h3>{val.title}</h3>
                                </div>
                                <div>
                                    <img src={require('./screens/lampypolska.png').default} alt="" />
                                    {/* <img src={require(val.pic_dest).default} alt="" /> */}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Realizations
