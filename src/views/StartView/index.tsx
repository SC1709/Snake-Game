import React from "react";
import Button from "../../components/Button";
import ImageComponent from "../../components/ImageComponent";

const StartPageView: React.FC = () => {
  const handleStartClick = () => {
    console.log("Game Started!");
    // Add navigation or game start logic
  };

  return (
    <>
      <div className="snake-container flex flex-col items-center background-green relative">
        <div className="flex flex-col items-center mt-[110px] relative">
          {/* Top Sticks */}
          <div className=" flex justify-start mb-0  w-full h-[32px] relative">
            
            <ImageComponent
              src="src/Resources/Images/stick.png"
              className="w-[213.42px] h-[46px] transform rotate-180"
              alt="Top Right Stick"
            />
            <ImageComponent
              src="src/Resources/Images/stick.png"
              className="w-[213.42px] h-[46px] transform scale-y-[-1] "
              alt="Top Left Stick"
            />
          </div>
          <ImageComponent
            src="src/Resources/Images/name.png"
            className="w-full h-full"
            alt="Name Image"
          />
          {/* Bottom Sticks */}
          <div className=" stick flex justify-start mb-0 w-full h-[46px] relative">
            <ImageComponent
              src="src/Resources/Images/stick.png"
              className="w-[213.42px] h-[46px] transform rotate-180"
              alt="Bottom Right Stick"
            />
            <ImageComponent
              src="src/Resources/Images/stick.png"
              className="w-[213.42px] h-[46px]"
              alt="Bottom Left Stick"
            />
          </div>
        </div>

        {/* Button */}
        {/* <Button text="Start" onClick={handleStartClick} /> */}
        
      </div>
    </>
  );
};

export default StartPageView;    