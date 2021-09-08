import cs from 'classnames';
import FadeInComponent from '../../utils/fadeInComponent';
import s from './Technologies.module.scss';

interface TechItem {
    img: String,
    name: String
}

const TechnologiesList:TechItem[] = [
    {
        img: "javascript",
        name: "Javascript"
    },
    {
        img: "next-js",
        name: "NextJS"
    },
    {
        img: "node-js",
        name: "NodeJS"
    },
    {
        img: "postgresql",
        name: "PostgreSql"
    },
    {
        img: "react",
        name: "ReactJS"
    },
    {
        img: "sass",
        name: "Sass"
    },
    {
        img: "typescript",
        name: "Typescript"
    }
]

const Technologies = () => {

    const TechnologyItem = ({ tech }) => {
        return (
            <li>
                <FadeInComponent>
                    <div className={s.bubble}>
                        <img src={`/img/technologies/${tech.img}.svg`} alt={`Technologia ${tech.img}`} />
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