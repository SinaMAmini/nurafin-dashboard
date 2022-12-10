import * as React from 'react';
import {Dropdown} from './dropdown';
import {navbarOptions} from '../../utlts/navbar-options';
import './navbar.scss';

export const Navbar = () => {
    return (
        <ul className="nav-list">
            {navbarOptions.map((navOption) => {
                return (
                    <li key={navOption}>
                        <Dropdown sectionName={navOption} />
                    </li>
                );
            })}
        </ul>
    );
};
