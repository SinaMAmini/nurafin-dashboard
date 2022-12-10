import * as React from 'react';
import './welcome.scss';

type Props = {};
export const Welcome = (props: Props) => {
    return (
        <div className="welcome">
            <div className="first-half">
                <h3>Welcome Back Reza!</h3>
                <span>Nurafin Dashboard</span>
            </div>
            <img src="/src/assets/images/man.png" alt="man" className="img" />
            <div className="second-half">
                <h5>Reza Bagheri</h5>
                <div className={'circle' + ' orange'}>T</div>
                <div className={'circle' + ' green'}>TA</div>
                <button className="btn">Trading Team</button>
            </div>
        </div>
    );
};
