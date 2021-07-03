import React, { useState, useEffect } from 'react';

interface Props {
    anchor: string,
    itemName: string,
    classes?: string
} 

const NavItem:React.FC<Props> = ({ anchor, itemName, classes }) => {

    const handleSmoothScroll = e => {
        e.preventDefault();

        
    }

    return (
        <a href={`#${anchor}`} onClick={handleSmoothScroll} className={classes}>
            {itemName}
        </a>
    )
}

export default NavItem;