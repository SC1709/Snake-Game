import React from "react";

interface BoxProps {
  answer: number;
  text: string;
  className?: string;
}

const ResultBox: React.FC<BoxProps> = ({ text,answer, className }) => {
  return (
    <div className={`absolute w-[129px] h-[310px] top-[540px] ${className}`}>
      <div className="absolute w-[100px] h-[69px] top-[27px] left-[15px] p-[18px_20px] bg-[#1E3848]">
        <p className="absolute w-[60px] h-[33px] top-[18px] left-[20px] text-[#FFFFFF] text-center text-[24px] font-[Akshar] font-normal leading-[33.12px]">
          {text}
        </p>
      </div>
      <p className="absolute w-[30px] h-[88px] top-[185px] left-[50px] text-[#FFFFFF] text-center text-[64px] font-[Akshar] font-normal leading-[88.32px]">
        {answer}
      </p>
    </div>
  );
};

export default ResultBox;
