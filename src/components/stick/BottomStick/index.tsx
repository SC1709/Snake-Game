
import React from "react";
import ImageComponent from "../../ImageComponent";


const BottomSticks: React.FC = () => {
  return (
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
  );
};

export default BottomSticks;
