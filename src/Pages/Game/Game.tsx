import { useState } from "react";
import "./Game.css";
import ScoreButton from "../Score/ScoreButton";
import { cloud } from "../cloud";
import { useNavigate } from "react-router-dom";

const randomIndex: number = Math.floor(Math.random() * (3 - 0));
function Game() {
  const { all_words, question, good_words } = cloud[randomIndex];
  const [isToggle, setIsToggle] = useState<any[]>([]);
  const [nextButton, setNextButton] = useState<boolean>(false);

  const checkIfGood = (e: any) => {
    const target = e.currentTarget;
    let colorChange = e.currentTarget.lastChild;
    function removeFromArray(word: any) {
      return word !== target;
    }
    if (!isToggle.includes(target)) {
      setIsToggle([...isToggle, target]);
      colorChange.style.color = "black";
    } else if (isToggle.includes(target)) {
      setIsToggle(isToggle.filter(removeFromArray));
      colorChange.style.color = "gray";
    }
  };

  const checkCloud = () => {
    const resultsFromCloud = isToggle.map((x) => {
      return x.innerText;
    });

    const badChoices = resultsFromCloud.filter((word) => !good_words.includes(word));

    const goodChoices = resultsFromCloud.filter((word) => good_words.includes(word));

    const possibleGoodChoices = good_words.length - goodChoices.length;

    const score = goodChoices.length * 2 - (badChoices.length + possibleGoodChoices);

    isToggle.forEach((el) => {
      if (!el.lastChild.innerHTML === goodChoices.includes(el.lastChild.innerHTML)) {
        el.firstChild.innerHTML = "Bad";
        el.firstChild.style.color = "red";
        el.lastChild.style.color = "red";
      } else if (!el.lastChild.innerHTML === badChoices.includes(el.lastChild.innerHTML)) {
        el.firstChild.innerHTML = "Good";
        el.firstChild.style.color = "green";
        el.lastChild.style.color = "green";
      }
    });
    setNextButton(true);
    localStorage.setItem("score", JSON.stringify(score));
  };

  function rerenderButton() {
    if (nextButton) {
      return <ScoreButton />;
    }
    return (
      <button type="submit" className="score_btn" onClick={checkCloud}>
        Submit game
      </button>
    );
  }

  const navigate = useNavigate();
  return (
    <div className="Wrapper_game">
      <div className="Game">
        <h1>{question.charAt(0).toLocaleUpperCase() + question.slice(1)}</h1>
        <div className="cloud_box">
          {all_words.map((words, index) => {
            return (
              <div className="cloud_item" onClick={checkIfGood} key={index}>
                <p></p>
                <h2>{words}</h2>
              </div>
            );
          })}
        </div>
      </div>
      <div>{rerenderButton()}</div>
    </div>
  );
}

export default Game;
