import * as React from 'react';
import {Dropdown} from '../components/dropdown';
import {useState} from 'react';
import './profile.scss';
import {SectionsContainer} from '../components/sections-container';

type Props = {};

export const Profile = (props: Props) => {
    const [navbarOptions, setNavbarOptions] = useState([
        'Dashboards',
        'UI Elements',
        'Apps',
        'Components',
        'Extra Pages',
        'Layouts',
    ]);
    return (
        <div className="profile-page-container">
            <ul className="nav-list">
                {navbarOptions.map((navOption) => {
                    return (
                        <li key={navOption}>
                            <Dropdown sectionName={navOption} />
                        </li>
                    );
                })}
            </ul>
            <h2 className="page-title">Dashboard</h2>
            <SectionsContainer />
        </div>
    );
};
