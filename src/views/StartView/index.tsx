import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageComponent from "../../components/ImageComponent";
import ButtonComponent from "../../components/ButtonComponent";
import BottomSticks from "../../components/stick/BottomStick";
import TopSticks from "../../components/stick/TopStick";

const StartPageView: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClick = () => {
    console.log("Game Started!");
    navigate("/game");
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <>
      <div className="snake-container flex flex-col items-center background-green relative overflow-hidden">
        <div
          className={`flex flex-col items-center mt-[110px] relative slide-animation ${
            isVisible ? "slide-in" : "slide-out"
          }`}
        >
          {/* Top Sticks */}
          <TopSticks className="stick1 flex justify-start mb-0  w-full h-[32px] relative" />

          <ImageComponent
            src="src/Resources/Images/name.png"
            className="w-full h-full"
            alt="Name Image"
          />
          {/* Bottom Sticks */}
          <BottomSticks />
        </div>

        <div
          className={`flex justify-center mt-56 transition-transform ${
            isVisible ? "slide-up-visible" : "slide-up-animation"
          }`}
        >
          <ButtonComponent
            src={
              hovered
                ? "src/Resources/Images/hoverButton.png"
                : "src/Resources/Images/button.png"
            }
            className="w-[120px] h-[36px] cursor-pointer transform transition-all duration-300"
            alt="start Image"
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
