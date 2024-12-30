import React from "react";
import ImageComponent from "../../components/ImageComponent";
import TopSticks from "../../components/stick/TopStick";
import QuestionCard from "../../components/QuestionCard";
import OptionCard from "../../components/OptionCard";
import SnakeComponent from "../../components/SnakeComponent";
import ButtonElementComponent from "../../components/OptionElementComponent";

// const rotateSnake = (rotation: string, targetId: string,isOptionC: boolean = false) => {
//   const snake = document.querySelector(".snake1") as HTMLElement;
//   const target = document.querySelector(`#${targetId}`) as HTMLElement;
//   const eagle = document.querySelector(".eagle") as HTMLElement;

//   if (snake && target) {
//     // Rotate the snake
//     snake.style.transform = `rotate(${rotation})`;
//     // Move the snake to the target button's position
//     setTimeout(() => {
//     snake.style.opacity = "1";

//       const targetRect = target.getBoundingClientRect();
//       const snakeRect = snake.getBoundingClientRect();

//       const stopBefore = 80; // Horizontal distance to stop before the button
//       const stopBelow = 40; // Vertical distance to position below the button
//       let offsetY = 0;

//       if (!isOptionC) {
//         offsetY = targetRect.top - snakeRect.top + stopBelow;
//       } else {
//         offsetY = targetRect.top - snakeRect.top; 
//       }
//       const offsetX = targetRect.left - snakeRect.left - stopBefore;

//       // Update the snake's position
//       snake.style.left = `${snake.offsetLeft + offsetX}px`;
//       snake.style.top = `${snake.offsetTop + offsetY}px`;
//       console.log(`Snake moved to below ${targetId}`);

//       setTimeout(() => {
//         target.classList.add("shrink-and-disappear");
//       }, 3000); 

//       const eagleRotation = targetId === "buttonA"
//       ? "rotate(16deg)"
//       : targetId === "buttonB"
//       ? "rotate(4deg)"
//       : "rotate(-8deg)";

//     // Move the eagle to the snake's final position after rotation
//     setTimeout(() => {
//       eagle.style.transition = "transform 2s ease-in-out, left 3s ease-in-out, top 3s ease-in-out, opacity 1s ease-in-out";
//       eagle.style.transform = eagleRotation;
//       eagle.style.opacity = "1"; // Make the eagle visible
//       const updatedSnakeRect = snake.getBoundingClientRect();
//         const stopAbove = 80; // Horizontal distance to stop before the button
//         const stopAfter = 40;
//         const eagleOffsetX = updatedSnakeRect.left - eagle.getBoundingClientRect().left+stopAfter;
//         const eagleOffsetY = updatedSnakeRect.top - eagle.getBoundingClientRect().top-stopAbove;

//         eagle.style.left = `${eagle.offsetLeft + eagleOffsetX}px`;
//         eagle.style.top = `${eagle.offsetTop + eagleOffsetY}px`;
//     }, 2000); // Delay to allow the snake to move first

//     }, 1000); 
//   }
// };

const moveSnake = (
  rotation: string,
  targetId: string,
  isOptionC: boolean = false
) => {
  const snake = document.querySelector(".snake1") as HTMLElement;
  const target = document.querySelector(`#${targetId}`) as HTMLElement;

  if (snake && target) {
    // Rotate the snake
    snake.style.transform = `rotate(${rotation})`;

    setTimeout(() => {
      snake.style.opacity = "1";

      const targetRect = target.getBoundingClientRect();
      const snakeRect = snake.getBoundingClientRect();

      const stopBefore = 80; // Horizontal distance to stop before the button
      const stopBelow = 40; // Vertical distance to position below the button
      let offsetY = 0;

      if (!isOptionC) {
        offsetY = targetRect.top - snakeRect.top + stopBelow;
      } else {
        offsetY = targetRect.top - snakeRect.top;
      }
      const offsetX = targetRect.left - snakeRect.left - stopBefore;

      // Update the snake's position
      snake.style.left = `${snake.offsetLeft + offsetX}px`;
      snake.style.top = `${snake.offsetTop + offsetY}px`;
    }, 1000);
  }
};

const moveEagle = (targetId: string) => {
  const snake = document.querySelector(".snake1") as HTMLElement;
  const eagle = document.querySelector(".eagle") as HTMLElement;

  if (snake && eagle) {
    const eagleRotation =
      targetId === "buttonA"
        ? "rotate(16deg)"
        : targetId === "buttonB"
        ? "rotate(4deg)"
        : "rotate(-8deg)";

    setTimeout(() => {
      eagle.style.transition =
        "transform 2s ease-in-out, left 3s ease-in-out, top 3s ease-in-out, opacity 1s ease-in-out";
      eagle.style.transform = eagleRotation;
      eagle.style.opacity = "1";

      const updatedSnakeRect = snake.getBoundingClientRect();
      const stopAbove = 80; // Distance to stop above the snake
      const stopAfter = 40;
      const eagleOffsetX =
        updatedSnakeRect.left - eagle.getBoundingClientRect().left + stopAfter;
      const eagleOffsetY =
        updatedSnakeRect.top - eagle.getBoundingClientRect().top - stopAbove;

      eagle.style.left = `${eagle.offsetLeft + eagleOffsetX}px`;
      eagle.style.top = `${eagle.offsetTop + eagleOffsetY}px`;
    }, 2000);
  }
};

const makeTargetInvisible = (targetId: string) => {
  const target = document.querySelector(`#${targetId}`) as HTMLElement;

  if (target) {
    setTimeout(() => {
      target.classList.add("shrink-and-disappear");
    }, 3000);
  }
};

const rotateSnake = (
  rotation: string,
  targetId: string,
  isCorrect: boolean,
  isOptionC: boolean = false
) => {
  moveSnake(rotation, targetId, isOptionC);
  if (isCorrect) {
    makeTargetInvisible(targetId);
    setTimeout(() => {
      const snake = document.querySelector(".snake1") as HTMLElement;
      if (snake) {
        snake.style.transition = "transform 2s ease-in-out";
        snake.style.transform = isOptionC ? "rotate(200deg)" : "rotate(140deg)"; // Rotate the snake 180 degrees
      }
    }, 4000);
    setTimeout(() => {
      const snake = document.querySelector(".snake1") as HTMLElement;
      if (snake) {
        const originalPosition = { left: 50, top: 261 }; // Assuming this is the original position
        snake.style.transition = "left 2s ease-in-out, top 2s ease-in-out";
        snake.style.left = `${originalPosition.left}px`;
        snake.style.top = `${originalPosition.top}px`;
      }
    }, 5500); 
  } else {
    setTimeout(() => moveEagle(targetId), 1500);
  }
};
const rotateSnakeA = () => rotateSnake("-20deg", "buttonA",true);
const rotateSnakeB = () => rotateSnake("-17deg", "buttonB",false);
const rotateSnakeC = () => rotateSnake("2deg", "buttonC",false,true);


const GameView: React.FC = () => {
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
          text="Who is the father of Indian Navy?"
          imageSrc="src/Resources/Images/1.png"
          imageAlt="Number 1"
        />

        <OptionCard
          text="Chhtrapati Shivaji Maharaj"
          option="A"
          className="h-[49px] relative z-10"
          pclassName=" bg-[#D8002F] "
          onClick={rotateSnakeA}
        />
        <OptionCard
          text="Mahatma Gandhi"
          option="B"
          className="h-[48.95px] top-[65.03px] relative z-10"
          pclassName=" bg-[#FFCC3E]"
          onClick={rotateSnakeB}
        />
        <OptionCard
          text="Subash Chandra Bose"
          option="C"
          className="h-[48.95px] top-[130.05px]"
          pclassName=" bg-[#467966]"
          onClick={rotateSnakeC}
        />

        <div className="flex flex-col items-center mt-[450px] relative">
          {/* Top Sticks */}
          <TopSticks className="stick2 flex justify-start mb-0 w-full h-[28px] relative" />
          <div className="bottom-0 bg-no-repeat bg-center bg-cover">
            <ImageComponent
              src="src/Resources/Images/flower.png"
              className="w-[453px] h-[394px]"
              alt="Flower Decoration"
            />
            
            <div className="absolute w-[188px] h-[223px] top-[126px] left-[141px]">
              <ButtonElementComponent id="buttonA" text="A" className="bg-[#D8002F] left-[83px]" />
              <ButtonElementComponent id="buttonB" text="B" className="bg-[#FFCC3E] top-[74px]" />
              <ButtonElementComponent id="buttonC" text="C" className="bg-[#467966] top-[176px] left-[144px]" />
            </div>

            <ImageComponent
              src="src/Resources/Images/stone.png"
              className="absolute w-[128px] h-[128px] top-[217px] left-[-2px] "
              alt="stone Decoration"
            />

            <SnakeComponent className="snake1 opacity-1"  />
            {/*rotate-[16deg] A   rotate-[4deg] B rotate-[-10deg] C  */}
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
