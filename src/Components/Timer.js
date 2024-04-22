import React, { useEffect } from "react";

export default function Timer({ dispacher, secondsRemaining }) {
  const min = Math.floor(secondsRemaining / 60);
  const sec = secondsRemaining % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispacher({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispacher]
  );

  return (
    <div className="timer">
      {min < 10 && "0"}
      {min}:{sec < 10 && "0"}
      {sec}
    </div>
  );
}
