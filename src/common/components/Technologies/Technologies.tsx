import cs from 'classnames';
import FadeInComponent from '../../utils/fadeInComponent';

const TechnologiesList:Array<string> = [
    "javascript",
    "next-js",
    "node-js",
    "postgresql",
    "react",
    "sass",
    "typescript"
]

import s from './Technologies.module.scss';

const Technologies = () => {

    const TechnologyItem = ({ tech }) => {
        return (
            <li>
                <FadeInComponent>
                    <div className={s.bubble}>
                        <img src={`/img/technologies/${tech}.svg`} alt={`Technologia ${tech}`} />
                    </div>
                </FadeInComponent>
            </li>
        )
    }

    return (
        <div className={s.root} id="technologies">
            <div className="container">
                <FadeInComponent>
                <div className={cs(s.header, "boxhead center")}>
                    <h2>Technologie</h2>
                    <p>Lista technologii, z których korzystam i wykorzystuje do moich realizacji.</p>
                </div>
                </FadeInComponent>
                <div className={s.techsContainer}>
                    <ul className={s.list}>
                        {TechnologiesList.map((val, key) => 
                            <TechnologyItem tech={val} key={key}/> 
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Technologies;