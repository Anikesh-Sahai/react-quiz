import React from "react";
import Options from "./Options";

export default function Questions({ question, dispacher, answer }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispacher={dispacher} answer={answer} />
    </div>
  );
}
