import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'

interface Props {
    anchor: string,
    itemName: string,
    classes?: string
} 

const NavItem:React.FC<Props> = ({ anchor, itemName, classes }) => {

    const [offset, setOffset] = useState<number>(150);

    useEffect(() => {
        setOffset(window.innerHeight / 4.5);
    }, [])
    
    return (
        <Link activeClass="active" className={classes} to={anchor} spy={true} smooth={true} offset={-offset} duration={500}>
            {itemName}
        </Link>
    )
}

export default NavItem;