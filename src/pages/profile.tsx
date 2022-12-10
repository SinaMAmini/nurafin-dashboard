import * as React from 'react';
import './profile.scss';
import {SectionsContainer} from '../components/sections-container';
import {Navbar} from '../components/navbar-components/navbar';

export const Profile = () => {
    return (
        <div className="profile-page-container">
            <Navbar />
            <SectionsContainer />
        </div>
    );
};
