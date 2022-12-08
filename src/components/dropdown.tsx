import * as React from 'react';
import './dropdown.scss';

type sectionProps = {
    sectionName: string;
};
export const Dropdown = ({sectionName}: sectionProps) => {
    return (
        <div className="dropdown-container">
            <img alt={sectionName} src={'/src/assets/icons/' + sectionName + '.svg'} />
            <select className="select" name={sectionName} id="">
                <option className="option" value={sectionName}>
                    {sectionName}
                </option>
            </select>
        </div>
    );
};
