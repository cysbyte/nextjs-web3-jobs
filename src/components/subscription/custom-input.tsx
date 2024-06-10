'use client'

import React, { FC, useRef, useState } from 'react'

interface IProps {
    placeHolder: string;
    id: string;
    type?: string;
}

const CustomInput:FC<IProps> = (props) => {
    const inputRef = useRef<HTMLInputElement>(null!);
    return (
        <div className="group w-full h-auto flex items-center border-t border-b border-l bg-[#01192E] border-gray-400 rounded-tl-full rounded-bl-full pl-3 focus-within:border-blue-800 focus-within:shadow-lg hover:border-purple-500 hover:shadow-lg overflow-hidden">
            <input ref={inputRef}
                className="appearance-none focus:outline-none w-full bg-[#01192E] py-3 text-white leading-tight placeholder-gray-400 placeholder:text-base placeholder:pl-0 px-0 shadow-slate-900"
                type={props.type || 'text'}
                id={props.id}
                placeholder={props.placeHolder}
            />
        </div>
    );
}

export default CustomInput