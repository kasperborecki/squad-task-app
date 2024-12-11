import React from 'react'

interface BasicInputProps {
    hintText: string;
    changeControlerValue: (e: any) => void ;
    type: string;
}

const BasicInput: React.FC<BasicInputProps> = ({
    hintText,
    changeControlerValue,
    type,
}) => {
    return(
        <div>
            <input className="bg-[#EEF3EE] rounded-xl w-full h-10 p-2 placeholder-[#000000AA]" placeholder={hintText} onChange={changeControlerValue} type={type}/>
        </div>
    );
}

export default BasicInput