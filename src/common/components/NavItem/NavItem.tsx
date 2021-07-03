import React, { useState, useEffect } from 'react';

interface Props {
    anchor: string,
    itemName: string
} 

const NavItem:React.FC<Props> = ({ anchor, itemName }) => {

    const handleSmoothScroll = e => {
        e.preventDefault();

        
    }

    return (
        <a  onClick={handleSmoothScroll}>
            {itemName}
        </a>
    )
}

export default NavItem;