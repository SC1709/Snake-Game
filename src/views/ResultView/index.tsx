import React from "react";
import ResultBox from "../../components/ResultBoxComponent";
import SnakeComponent from "../../components/SnakeComponent";

const ResultView: React.FC = () => {
  return (
    <>
      <div className="snake-container flex flex-col items-center background-green relative">
        <p className="slide-down absolute w-[302px]  h-[56px] top-[220px] left-[43px] text-[#FFFFFF] text-center text-[48px] font-medium leading-[55.8px] font-[Eraser]">
          GAME OVER
        </p>
        <div className="snake-animation-container">
          <SnakeComponent className="snake  opacity-0" />
        </div>
       
        <ResultBox
          text="Wrong"
          answer="2"
          className="slide-left left-[212px] bg-[#D8002F]"
        />
        <ResultBox
          text="Right"
          answer="3"
          className="slide-right left-[54px] bg-[#078F14]"
        />
      </div>
    </>
  );
};

export default ResultView;
