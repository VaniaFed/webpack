import React from 'react';
import { MenuItem } from './MenuItem';

export const Menu = ({ menuList }) => {
    return (
        <ul className="list">
            {menuList.map(item => (
                <MenuItem value={item.title} key={item.id} />
            ))}
        </ul>
    );
};
