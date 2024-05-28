'use client'

import React, { useRef, useState } from 'react'

interface IProps {
    placeHolder: string;
    id: string;
    type?: string;
}

const CustomInput = (props: IProps) => {
    const inputRef = useRef<HTMLInputElement>(null!);
    return (
        <div className="group w-full h-auto flex items-center border border-gray-300 rounded-md px-2 mt-2 focus-within:border-purple-500 focus-within:shadow-lg hover:border-purple-500 hover:shadow-lg overflow-hidden">
            <input ref={inputRef}
                className="appearance-none focus:outline-none w-full py-4 text-[gray-700] leading-tight placeholder-gray-400 placeholder:text-base placeholder:pl-0 px-0 shadow-slate-900"
                type={props.type || 'text'}
                id={props.id}
                placeholder={props.placeHolder}
            />
        </div>
    );
}

export default CustomInput