import useTranslation from "next-translate/useTranslation";
import NavItem from '../NavItem/NavItem';

interface NavLink {
    anchor: string,
    name: string | Array<any>
}

const NavList = () => {

    const { t } = useTranslation();
    
    const data: Array<NavLink> = [
        {
            anchor: "about",
            name: [<span>I</span>, t('common:About me')],
        },
        {
            anchor: "technologies",
            name: [<span>II</span>, t('common:Technologies')]
        },
        {
            anchor: "realizations",
            name: [<span>III</span>, "Wykonane projekty"]
        },
        {
            anchor: "contact",
            name: [<span>IV</span>, t('common:Contact')]
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
