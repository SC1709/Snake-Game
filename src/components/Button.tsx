import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className=" absolute top-[64px] left-[55px] w-[120px] h-[36px] bg-blue-500 text-white rounded"
    >
      {text}
    </button>
  );
};

export default Button;
