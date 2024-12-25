import React, { useState } from "react";
import ImageComponent from "../../components/ImageComponent";
import ButtonComponent from "../../components/ButtonComponent";

const StartPageView: React.FC = () => {
  const [hovered, setHovered] = useState(true);
  const handleClick = () => {
    console.log("Game Started!");
    // Add navigation or game start logic
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <>
      <div className="snake-container flex flex-col items-center background-green relative">
        <div className="flex flex-col items-center mt-[110px] relative">
          {/* Top Sticks */}
          <div className="stick1 flex justify-start mb-0  w-full h-[32px] relative">
            <ImageComponent
              src="src/Resources/Images/stick.png"
              className="w-[213.42px] h-[46px] transform rotate-180 transform scale-y-[-1] "
              alt="Top Right Stick"
            />
            <ImageComponent
              src="src/Resources/Images/stick.png"
              className="w-[213.42px] h-[46px] transform scale-y-[1] "
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
              className="w-[213.42px] h-[46px] transform scale-y-[-1]"
              alt="Bottom Left Stick"
            />
          </div>
        </div>

        <div className="flex justify-center mt-56">
          <ButtonComponent
            src={
              hovered
                ? "src/Resources/Images/hoverButton.png"
                : "src/Resources/Images/button.png"
            }
            className="w-[120px] h-[36px] transform transition-all duration-300"
            alt="Stick Image"
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
    </>
  );
};

export default StartPageView;
