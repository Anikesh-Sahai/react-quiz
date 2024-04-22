import React from "react";

export default function FinishedScreen({
  points,
  maxPossiblePoints,
  highScore,
  dispacher,
}) {
  const percentage = (points / maxPossiblePoints) * 100;

  return (
    <>
      <p className="result">
        You scored {points} out of {maxPossiblePoints} ({Math.ceil(percentage)}
        %)
      </p>
      <p className="highscore">(HighScore: {highScore} Points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispacher({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}
