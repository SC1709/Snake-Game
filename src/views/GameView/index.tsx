import React from "react";
import ImageComponent from "../../components/ImageComponent";
import TopSticks from "../../components/stick/TopStick";
import QuestionCard from "../../components/QuestionCard";
import OptionCard from "../../components/OptionCard";
import SnakeComponent from "../../components/SnakeComponent";
import ButtonElementComponent from "../../components/OptionElementComponent";

const GameView: React.FC = () => {
  return (
    <>
      <div className="snake-container flex flex-col items-center background-green relative">
        <div className="absolute top-4 right-4 flex flex-col items-center space-y-4">
          <ImageComponent
            src="src/Resources/Images/icon.png"
            className="w-[65px] h-[142px]  "
            alt="Top Right Stick"
          />
        </div>
        <QuestionCard
          text="Who is the father of Indian Navy?"
          imageSrc="src/Resources/Images/1.png"
          imageAlt="Number 1"
        />

        <OptionCard
          text="Chhtrapati Shivaji Maharaj "
          option="A"
          className="h-[49px] "
          pclassName=" bg-[#D8002F]"
        />
        <OptionCard
          text="Mahatma Gandhi "
          option="B"
          className="h-[48.95px] top-[65.03px]"
          pclassName=" bg-[#FFCC3E]"
        />

        <OptionCard
          text="Subash Chandra Bose"
          option="C"
          className="h-[48.95px] top-[130.05px]"
          pclassName=" bg-[#467966]"
        />

        <div className="flex flex-col items-center mt-[450px] relative ">
          {/* Top Sticks */}
          <TopSticks className="stick2 flex justify-start mb-0  w-full h-[28px] relative" />
          <div className=" bottom-0 bg-no-repeat bg-center bg-cover">
            <ImageComponent
              src="src/Resources/Images/flower.png"
              className="w-[453px] h-[394px]"
              alt="Flower Decoration"
            />
            
            <div className="absolute  w-[188px] h-[223px] top-[126px] left-[141px] ">
              <ButtonElementComponent text="A" className="bg-[#D8002F] left-[83px]" />
              <ButtonElementComponent text="B" className="bg-[#FFCC3E] top-[74px]" />
              <ButtonElementComponent text="C" className="bg-[#467966] top-[176px] left-[144px]" />
            </div>

            <ImageComponent
              src="src/Resources/Images/stone.png"
              className="absolute w-[128px] h-[128px] top-[217px] left-[-2px]"
              alt="stone Decoration"
            />

            <SnakeComponent className="opacity-0" />
          </div>
        </div>
      </div>
    </>
  );
};

export default GameView;
