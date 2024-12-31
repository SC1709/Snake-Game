import React from "react";
import ImageComponent from "../../components/ImageComponent";
import TopSticks from "../../components/stick/TopStick";
import QuestionCard from "../../components/QuestionCard";
import OptionCard from "../../components/OptionCard";
import SnakeComponent from "../../components/SnakeComponent";
import ButtonElementComponent from "../../components/OptionElementComponent";

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

// const changeBackgroundColor = (
//   e: React.MouseEvent<HTMLDivElement>,
//   isCorrect: boolean
// ) => {
//   const clickedElement = e.currentTarget as HTMLElement;
//   const newClass = isCorrect ? "correct-answer" : "wrong-answer";

//   // Add the class to the clicked element
//   clickedElement.classList.add(newClass);
// };

// const changeBackgroundColor = (
//   e: React.MouseEvent<HTMLDivElement>,
//   isCorrect: boolean
// ) => {
//   const clickedElement = e.currentTarget as HTMLElement;
//   const options = document.querySelectorAll(".option-card"); // Assuming all options have the class "option-card"

//   // Highlight the correct and clicked options
//   options.forEach((option) => {
//     const optionId = option.id; // Get the option's ID

//     if (optionId === clickedElement.id && isCorrect) {
//       option.classList.add("correct-answer"); // Green background for the correct option
//     } else if (optionId === clickedElement.id && !isCorrect) {
//       option.classList.add("wrong-answer"); // Red background for the clicked incorrect option
//     } else if (optionId === correctAnswerId) {
//       option.classList.add("correct-answer"); // Always highlight the correct option in green
//     }
//   });
// };


const moveEagle = (targetId: string) => {
  const snake = document.querySelector(".snake1") as HTMLElement;
  const eagle = document.querySelector(".eagle") as HTMLElement;
  const flower = document.querySelector(".flower-image") as HTMLElement; // Ensure flower image has this class

  if (snake && eagle && flower) {
    const eagleRotation =
      targetId === "buttonA"
        ? "rotate(16deg)"
        : targetId === "buttonB"
        ? "rotate(4deg)"
        : "rotate(-6deg)";

    // Move eagle to the snake
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

      // Move both snake and eagle to the flower after eagle reaches the snake
      setTimeout(() => {
        const flowerRect = flower.getBoundingClientRect();
        const snakeRect = snake.getBoundingClientRect();

        const moveToFlowerX = flowerRect.left - snakeRect.left - 30;
        const moveToFlowerY = flowerRect.top - snakeRect.top + 10;

        eagle.style.transform = "rotate(20deg)";
        snake.style.transition =
          "transform 2s ease-in-out, left 2s ease-in-out, top 2s ease-in-out";
        eagle.style.transition =
          "transform 2s ease-in-out, left 2s ease-in-out, top 2s ease-in-out";

        snake.style.left = `${snake.offsetLeft + moveToFlowerX}px`;
        snake.style.top = `${snake.offsetTop + moveToFlowerY}px`;

        eagle.style.left = `${eagle.offsetLeft + moveToFlowerX}px`;
        eagle.style.top = `${eagle.offsetTop + moveToFlowerY}px`;

        //Make both snake and eagle invisible
        setTimeout(() => {
          snake.style.opacity = "0";
          eagle.style.opacity = "0";
        }, 1800);
      }, 3000);
    }, 2000);
  }
};

const makeTargetInvisible = (targetId: string) => {
  const target = document.querySelector(`#${targetId}`) as HTMLElement;

  if (target) {
    setTimeout(() => {
      if (targetId === "buttonC") {
        target.classList.add("optionC-shrinkAndDisappear");
      } else {
        target.classList.add("shrink-and-disappear");
      }
    }, 3500);
  }
};
const moveSnakeBack = () => {
  const snake = document.querySelector(".snake1") as HTMLElement;
  if (snake) {
    const originalPosition = { left: 50, top: 261 }; // Assuming this is the original position
    snake.style.transition = "left 3s ease-in-out, top 3s ease-in-out";
    snake.style.left = `${originalPosition.left}px`;
    snake.style.top = `${originalPosition.top}px`;
    setTimeout(() => {
      snake.style.opacity = "0"; // Fade out the snake
    }, 1800);
  }
};

const rotateSnakeMovement = (isOptionC: boolean) => {
  const snake = document.querySelector(".snake1") as HTMLElement;
  if (snake) {
    snake.style.transition = "transform 2s ease-in-out";
    snake.style.transform = isOptionC ? "rotate(200deg)" : "rotate(140deg)";
  }
};

const rotateSnake = (
  e: React.MouseEvent<HTMLDivElement>,
  rotation: string,
  targetId: string,
  isCorrect: boolean,
  isOptionC: boolean = false
) => {
  // changeBackgroundColor(e, isCorrect);

  moveSnake(rotation, targetId, isOptionC);
  // const snakeMovementDuration = 1500; // Duration of snake movement in milliseconds

  // // Change background color after snake reaches the element
  // setTimeout(() => {
  //   changeBackgroundColor(e, isCorrect);
  // }, snakeMovementDuration);

  if (isCorrect) {
    makeTargetInvisible(targetId);
    setTimeout(() => {
      rotateSnakeMovement(isOptionC);
    }, 4500);
    setTimeout(() => {
      moveSnakeBack();
    }, 5500);
  } else {
    setTimeout(() => moveEagle(targetId), 1500);
  }
};
const rotateSnakeA = (e: React.MouseEvent<HTMLDivElement>) =>
  rotateSnake(e, "-20deg", "buttonA", true);
const rotateSnakeB = (e: React.MouseEvent<HTMLDivElement>) =>
  rotateSnake(e, "-17deg", "buttonB", false);
const rotateSnakeC = (e: React.MouseEvent<HTMLDivElement>) =>
  rotateSnake(e, "2deg", "buttonC", false, true);

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
              className="flower-image w-[453px] h-[394px]"
              alt="Flower Decoration"
            />

            <div className="absolute w-[188px] h-[223px] top-[126px] left-[141px]">
              <ButtonElementComponent
                id="buttonA"
                text="A"
                className="bg-[#D8002F] left-[83px]"
              />
              <ButtonElementComponent
                id="buttonB"
                text="B"
                className="bg-[#FFCC3E] top-[74px]"
              />
              <ButtonElementComponent
                id="buttonC"
                text="C"
                className="bg-[#467966] top-[176px] left-[144px]"
              />
            </div>

            <ImageComponent
              src="src/Resources/Images/stone.png"
              className="absolute w-[128px] h-[128px] top-[217px] left-[-2px] "
              alt="stone Decoration"
            />

            <SnakeComponent className="snake1 opacity-1" />
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
