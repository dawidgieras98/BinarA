import React from "react";
import { useNavigate } from "react-router-dom";

function ScoreButton() {
  const navigate = useNavigate();
  return (
    <button
      type="submit"
      className="score_btn"
      onClick={() => {
        navigate("/score");
      }}
    >
      Show score
    </button>
  );
}

export default ScoreButton;
