import React from "react";

export default function NextButton({ dispacher, answer }) {
  if (answer === null) return null;
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispacher({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
}
