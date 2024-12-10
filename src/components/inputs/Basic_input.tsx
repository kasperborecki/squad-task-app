import React from 'react'

interface BasicInputProps {
    hintText: string;
}

const BasicInput: React.FC<BasicInputProps> = ({
    hintText,
}) => {
    return(
        <div>
            <input className="bg-[#EEF3EE] rounded-xl w-full h-10 p-2 placeholder-[#000000AA]" placeholder={hintText}/>
        </div>
    );
}

export default BasicInput