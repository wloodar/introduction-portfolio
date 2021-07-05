import useTranslation from "next-translate/useTranslation";
import NavItem from '../NavItem/NavItem';

interface NavLink {
    anchor: string,
    name: string
}

const NavList = () => {

    const { t } = useTranslation();
    
    const data: Array<NavLink> = [
        {
            anchor: "about",
            name: t('common:About me')
        },
        {
            anchor: "technologies",
            name: t('common:Technologies')
        },
        {
            anchor: "realizations",
            name: t('common:My realizations')
        },
        {
            anchor: "contact",
            name: t('common:Contact')
        }
    ];

    return (
        <ul>
            {data.map((val) => <li key={val.anchor}>
                <NavItem anchor={val.anchor} itemName={val.name}/>
            </li>)}
        </ul>
    );
    
}

export default NavList;
