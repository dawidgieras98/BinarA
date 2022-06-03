import React, { useEffect, useState } from "react";
import "./Landing.css";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("name",name);
  }, [name]);

  return (
    <div className="Wrapper_landing">
      <div className="Landing">
        <h1>Wordcloud Game</h1>
        <input
          type="text"
          placeholder="Enter your nickname here..."
          value={name}
          onChange={(e: any) => {
            setName(e.target.value);
          }}
          className="nick_input"
        />
        <button
          type="submit"
          className="play_btn"
          onClick={() => {
            navigate("/game");
          }}
        >
          Play
        </button>
      </div>
    </div>
  );
}

export default Landing;
