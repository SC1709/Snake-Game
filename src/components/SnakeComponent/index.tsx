import React from 'react';

interface SnakeProps {
  className?: string; 
}

const SnakeComponent: React.FC<SnakeProps> = ({ className }) => {
  return (
    <div className={`absolute w-[68px] h-[29px] top-[261px] left-[25px] ${className}`}>
      <img
        src="src/Resources/Images/snake.png"
        alt="snake Decoration"
        className="absolute w-[30px] h-[29px] left-[50px] gap-0 transform rotate-180"
      />
      <div className="absolute w-[22px] h-[9px] top-[12px] left-[39px] gap-0 bg-[#078F14]"></div>
      <img
        src="src/Resources/Images/image.png"
        alt="snake Decoration"
        className="absolute w-[22px] h-[29px] left-[20px] gap-0 transform rotate-[180deg]"
      />
    </div>
  );
};

export default SnakeComponent;
