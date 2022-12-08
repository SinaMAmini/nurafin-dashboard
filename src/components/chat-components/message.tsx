import * as React from 'react';

type Props = {
    msg: string;
    fromWho?: string;
    toWho: string;
};
export const Message = ({msg, fromWho, toWho}: Props) => {
    return (
        <div>
            <p>{msg}</p>
        </div>
    );
};
