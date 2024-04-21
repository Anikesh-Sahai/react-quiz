import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./startScreen";
import Questions from "./Questions";

const initialState = {
  questions: [],
  // loading, error, ready, active, finished
  status: "loading",
};
function reducer(state, action) {
  switch (action.type) {
    case "dataRecived":
      return { ...state, questions: action.payload, status: "ready" };

    case "dataFailed":
      return { ...state, status: "error" };

    case "start":
      return { ...state, status: "active" };

    default:
      throw new Error("invaild Action");
  }
}

export default function App() {
  const [{ status, questions }, dispacher] = useReducer(reducer, initialState);
  const numQuestions = questions.length;

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispacher({ type: "dataRecived", payload: data }))
      .catch((err) => dispacher({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispacher={dispacher} />
        )}
        {status === "active" && <Questions />}
      </Main>
    </div>
  );
}
