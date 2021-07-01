import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { motion } from 'framer-motion';
import cs from 'classnames';
import Link from 'next/link';

import s from './internationalization.module.scss';

interface Language {
    code: string,
    name: string,
    flag_path: string
}

const listOfLanguages: Array<Language> = [
    {
        code: "pl",
        name: "Polski",
        flag_path: "pl.png"
    },
    {
        code: "en-uk",
        name: "English",
        flag_path: "gb.png"
    }
]

const Internalization = () => {

    const router = useRouter();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const LanguageItem = ({ locale }:any) => {

        const languageObj = listOfLanguages.filter(el => el.code === locale ? el : null)[0];
    
        return (
            <li key={locale} onClick={() => setDropdownOpen(!dropdownOpen)}>
                <Link href={router.asPath} locale={locale}>
                    <a className={locale === router.locale ? "active" : undefined}>
                        <img 
                            src={"./img/flags/" + languageObj.flag_path}
                            alt={languageObj.name + " flag"}    
                        />
                        <span>{languageObj.name}</span>
                    </a>    
                </Link> 
            </li>
        )
    }

    const framerMotionDropdownVariants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: 12 },
    }

    return (
        <>
        <div className={s.langContainer}>
            <button 
                className={cs('btn btn-border', s.langBtn)}
                onClick={() => setDropdownOpen(!dropdownOpen)}
            >
                {router.locale}
            </button>

            <motion.div 
                initial={{ opacity: 0, y: 12 }} 
                transition={{ ease: 'easeOut', duration: 0.3 }}
                animate={dropdownOpen ? "open" : "closed"}
                variants={framerMotionDropdownVariants}
                className={s.dropdown}
            >
                <ul>
                    {router.locales?.map((locale) => (
                        <LanguageItem locale={locale}/>
                    ))}
                </ul> 
            </motion.div>
        </div>
        </>
    )
}

export default Internalization;