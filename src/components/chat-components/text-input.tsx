import * as React from 'react';
import {createRef, useEffect, useRef, useState} from 'react';
import './text-input.scss';

type Props = {
    val: string;
    setVal: Function;
};
export const TextInput = ({val, setVal}: Props) => {
    const textAreaRef = useRef(null);

    const resizeTextArea = () => {
        // @ts-ignore
        textAreaRef.current.style.height = 'auto';
        // @ts-ignore
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
    };

    useEffect(resizeTextArea, [val]);

    const onChange = (e: any) => {
        setVal(e.target.value);
    };

    return (
        <div className="input-container">
            <textarea className="text-input" ref={textAreaRef} value={val} onChange={onChange} rows={1} />
        </div>
    );
};
