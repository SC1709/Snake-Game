import React from "react";
import ImageComponent from "../../components/ImageComponent";
import TopSticks from "../../components/stick/TopStick";
import QuestionCard from "../../components/QuestionCard";
import OptionCard from "../../components/OptionCard";
import SnakeComponent from "../../components/SnakeComponent";
import ButtonElementComponent from "../../components/OptionElementComponent";

interface GameViewProps {
  rotateSnakeA: (e: React.MouseEvent<HTMLDivElement>) => void;
  rotateSnakeB: (e: React.MouseEvent<HTMLDivElement>) => void;
  rotateSnakeC: (e: React.MouseEvent<HTMLDivElement>) => void;
  options?: any;
  question?: string;
  // rotateSnakeD: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const GameView: React.FC<GameViewProps> = ({
  rotateSnakeA,
  rotateSnakeB,
  rotateSnakeC,
  options,
  question,
  // rotateSnakeD,
}) => {
  return (
    <>
      <div className="snake-container flex flex-col items-center background-green relative">
        <div className="absolute top-4 right-4 flex flex-col items-center space-y-4">
          <ImageComponent
            src="src/Resources/Images/icon.png"
            className="w-[65px] h-[142px]"
            alt="Top Right Stick"
          />
        </div>
        <QuestionCard
          text={question}
          imageSrc="src/Resources/Images/1.png"
          imageAlt="Number 1"
        />

        <OptionCard
          text={options[0].optionContent}
          option="A"
          id="OptionA"
          className="h-[49px] relative z-10"
          pclassName=" bg-[#D8002F] "
          onClick={rotateSnakeA}
        />
        <OptionCard
          text={options[1].optionContent}
          option="B"
          id="OptionB"
          className="h-[48.95px] top-[65.03px] relative z-10"
          pclassName=" bg-[#FFCC3E]"
          onClick={rotateSnakeB}
        />
        <OptionCard
          text={options[2].optionContent}
          option="C"
          id="OptionC"
          // className="h-[48.95px] top-[130.05px] relative z-10"
          className="h-[48.95px] top-[130.05px]"
          pclassName=" bg-[#467966]"
          onClick={rotateSnakeC}
        />
        {/* <OptionCard
          text="Subash Chandra Bose"
          option="C"
          id="OptionD"
          className="h-[48.95px] top-[195.05px]"
          pclassName=" bg-[#467966]"
          onClick={rotateSnakeD}
        /> */}
{/* mt-[520px] */}
        <div className="flex flex-col items-center mt-[450px] relative">
          {/* Top Sticks */}
          <TopSticks className="stick2 flex justify-start mb-0 w-full h-[28px] relative" />
          <div className="bottom-0 bg-no-repeat bg-center bg-cover">
            <ImageComponent
              src="src/Resources/Images/flower.png"
              className="flower-image w-[453px] h-[394px]"
              alt="Flower Decoration"
            />

            <div className="button-element slide-left absolute w-[188px] h-[223px] top-[126px] left-[141px]">
              <ButtonElementComponent
                id="buttonA"
                text="A"
                className="bg-[#D8002F] left-[83px]"
              />
              <ButtonElementComponent
                id="buttonB"
                text="B"
                className="bg-[#FFCC3E] top-[74px]"
              />
                {/* <ButtonElementComponent
                  id="buttonD"
                  text="D"
                  className="bg-[#467966] top-[84px] right-[20px]"
                /> */}
              <ButtonElementComponent
                id="buttonC"
                text="C"
                className="bg-[#467966] top-[176px] left-[144px]"
              />
            </div>

            <ImageComponent
              src="src/Resources/Images/stone.png"
              className="absolute w-[128px] h-[128px] top-[217px] left-[-2px] "
              alt="stone Decoration"
            />

            <SnakeComponent className="snake1 opacity-1" />
            <ImageComponent
              src="src/Resources/Images/eagle.png"
              className=" eagle absolute w-[119px] h-[221px] top-[182px] left-[340px] opacity-0"
              alt="eagle Decoration"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GameView;
