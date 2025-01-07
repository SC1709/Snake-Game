import React from "react";
import ImageComponent from "../ImageComponent";
 

interface QuestionCardProps {
  text: any;
  imageSrc: string;
  imageAlt: string;
  imageClassName?: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  text,
  imageSrc,
  imageAlt,
  imageClassName = "w-[78px] h-[78px] absolute mr-2",
}) => {
  return (
    <div className="question-card  slide-down absolute left-[calc(50%-355px/2-11px)] w-[355px] h-[79px]  top-[158px] text-center">
      <div className="relative z-[1]">
        <ImageComponent
          src={imageSrc}
          className={imageClassName}
          alt={imageAlt}
        />
      </div>

      <div className="relative w-[318px] h-[71px] left-[37px] py-[5px] px-0 gap-0 rounded-[25px] border-[3px] border-white">
            <p className=" font-[Lexend] text-[24px] font-semibold leading-[30px] text-center text-white w-[318px] h-[60px] ">
              {text}
            </p>
          </div>
    </div>
  );
};

export default QuestionCard;
