import React, { useEffect, useState } from "react";
import "./App.css";
import { getQuizDetails } from "./services/service";
import { quiz } from "./types/types";
import QuestionUi from "./components/QuestionUi";
import Welcome from "./components/Welcome";

function App() {
  let [quiz, setQuiz] = useState<quiz[]>([]);
  let [step, setStep] = useState<number>(0);
  let [totalQuestions, setTotalQuestions] = useState<number>(5);
  let [category, setCategory] = useState<number>(13);
  let [level, setLevel] = useState<string>("easy");
  let [points, setPoints] = useState<number>(0);

  useEffect(() => {
    const fetch = async () => {
      const data = await getQuizDetails(totalQuestions, category, level);

      setQuiz(data);
    };
    fetch();
  }, []);
  console.log(quiz);

  const handelQuizSelection = ()=>{

  }

  const handelSubmit = (
    e: React.FormEvent<EventTarget>,
    selectedAns: string
  ) => {
    e.preventDefault();
    if (selectedAns === quiz[step].answer) {
      setPoints(++points);
    }
    if (step !== totalQuestions) {
      setStep(++step);
    }
  };

  if (!quiz.length) {
    return <h1>Loading...</h1>;
  }

  if (step === totalQuestions) {
    return (
      <div>
        <h1>
          {points >= totalQuestions / 2 ? `CONGRATS!` : `BETTER LUCK NEXT TIME`}
        </h1>
        <h1>You have completed Your Quiz</h1>
        <h2>TOTAL POINTS:{points}</h2>
        <h3>Want to try Again ? </h3>
        <button onClick={() => setStep(0)}>New Quiz</button>
      </div>
    );
  }
  return (
    <div>
      <Welcome setCategory={setCategory} />
      <QuestionUi
        question={quiz[step].question}
        options={quiz[step].options}
        handelSubmit={handelSubmit}
      />
    </div>
  );
}

export default App;
