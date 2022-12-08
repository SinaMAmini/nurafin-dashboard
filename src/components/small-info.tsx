import * as React from 'react';
import './small-info.scss';

type subProp = {
    subtitle: string;
    amount: number;
};

type Props = {
    title: string;
    infos: subProp[];
    wordAfterLabel?: string;
};
export const SmallInfo = ({title, infos, wordAfterLabel}: Props) => {
    return (
        <div className="info-container">
            <div className="title">
                <h3>{title}</h3>
            </div>
            <div className="infos">
                {infos.map((info) => {
                    return (
                        <div key={info.subtitle}>
                            <h5 className="subtitle">{info.subtitle}</h5>
                            <span className="info">
                                {info.amount} {wordAfterLabel}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
