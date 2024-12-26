
import React from "react";
import ImageComponent from "../../ImageComponent";

interface StickProps {
  className?: any;
}
const TopSticks: React.FC<StickProps> = ({ className}) => {
  return (
    <div className={className}>
            <ImageComponent
              src="src/Resources/Images/stick.png"
              className="w-[213.42px] h-[46px] transform rotate-180  scale-y-[-1] "
              alt="Top Right Stick"
            />
            <ImageComponent
              src="src/Resources/Images/stick.png"
              className="w-[213.42px] h-[46px] transform scale-y-[1] "
              alt="Top Left Stick"
            />
          </div>
  );
};

export default TopSticks;
