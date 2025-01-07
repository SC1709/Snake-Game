import { useSelector } from "react-redux";
import ResultView from "../../views/ResultView";
import { myState } from "../../redux/store";


const ResultContainer = () => {
  const gamescore = useSelector((state: myState) => state.root.gamescore);
  const totalQuestion = useSelector(
    (state: myState) => state.root.totalQuestion
  );
  let incorrect = totalQuestion - gamescore;

  return (
    <div>
      <ResultView answer={gamescore} incorrect={incorrect} />
    </div>
  );
};

export default ResultContainer;