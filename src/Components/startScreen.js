import React from "react";

function StartScreen({ numQuestions, dispacher }) {
  return (
    <div className="start">
      <h2>Welcome to the React Qizz!</h2>
      <h3>{numQuestions} questions to test you mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => {
          dispacher({ type: "start" });
        }}
      >
        Lets start
      </button>
    </div>
  );
}

export default StartScreen;
