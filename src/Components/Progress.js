import React from "react";

export default function Progress({
  i,
  numQuestions,
  points,
  maxPossiblePoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress value={i + Number(answer !== null)} max={numQuestions} />
      <p>
        Question <strong>{i}</strong>/{numQuestions}
      </p>
      <p>
        Points <strong>{points}</strong>/{maxPossiblePoints}
      </p>
    </header>
  );
}
