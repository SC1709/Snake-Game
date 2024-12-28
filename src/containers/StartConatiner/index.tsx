import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StartPageView from "../../views/StartView";


const StartPageContainer: React.FC = () => {
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
    <StartPageView
      isVisible={isVisible}
      hovered={hovered}
      handleMouseEnter={handleMouseEnter}
      handleMouseLeave={handleMouseLeave}
      handleClick={handleClick}
    />
  );
};

export default StartPageContainer;
