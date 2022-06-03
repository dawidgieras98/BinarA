import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Score.css";
function Score() {
  const getName = localStorage.getItem("name");
  const getScore = localStorage.getItem("score");
  const navigate = useNavigate();
  return (
    <div className="Score_wrapper">
      <div>
        <h2>{`Congratulations, ${getName}!`}</h2>
        <h2>Your score:</h2>
        <h2 className="score_points">{`${getScore} points!`}</h2>
      </div>
      <button
        type="submit"
        className="score_btn"
        onClick={() => {
          navigate("/game");
        }}
      >
        Play again
      </button>
    </div>
  );
}

export default Score;
