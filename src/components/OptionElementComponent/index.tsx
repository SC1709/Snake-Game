import React from 'react';

interface ButtonProps {
  text: string;
  className: string;
  id?: string;
}

const ButtonElementComponent: React.FC<ButtonProps> = ({ text, className, id }) => {
  return (
    <div  id={id} className={`absolute w-[44px] h-[47px] p-[12px_16px_12px_15px] ${className}`}>
      <p className="absolute w-[13px] h-[23px] top-[12px] left-[15px]  font-[Lexend] text-[18px] font-semibold leading-[22.5px] text-left">
        {text}
      </p>
    </div>
  );
};

export default ButtonElementComponent;
