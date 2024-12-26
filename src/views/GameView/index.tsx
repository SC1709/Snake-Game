import React from "react";
import ImageComponent from "../../components/ImageComponent";
import TopSticks from "../../components/stick/TopStick";

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
        <div className="flex flex-col items-center mt-[450px] relative ">
          {/* Top Sticks */}
          <TopSticks className="stick2 flex justify-start mb-0  w-full h-[28px] relative" />
          <div className=" bottom-0 bg-no-repeat bg-center bg-cover">
            <ImageComponent
              src="src/Resources/Images/flower.png"
              className="w-[453px] h-[394px]"
              alt="Flower Decoration"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GameView;
