import React, { useEffect, useState } from "react";
import "./App.css";
import { getQuizDetails } from "./services/service";
import { quiz } from "./types/types";
import QuestionUi from "./components/QuestionUi";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";

function App() {
  let [quiz, setQuiz] = useState<quiz[]>([]);
  let [step, setStep] = useState<number>(0);
  let [totalQuestions, setTotalQuestions] = useState<number>(5);
  let [category, setCategory] = useState<number>(9);
  let [level, setLevel] = useState<string>("easy");
  let [points, setPoints] = useState<number>(0);
  let [start, setStart] = useState<boolean>(false);
 
  
  useEffect(() => {
    const fetch = async () => {
      const data = await getQuizDetails(totalQuestions, category, level);

      setQuiz(data);
    };
    fetch();
  }, [totalQuestions, category, level]);

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
    return <h1 className="loader">Loading...</h1>;
  }

  if (step === totalQuestions) {
    return (
      <>
        <div className="exit">
          <h1 style={{color: `${points >= totalQuestions/2 ?'green' : 'red'}`}}>
            {points >= totalQuestions / 2
              ? `CONGRATS!`
              : `BETTER LUCK NEXT TIME `}
          </h1>
          <h1>You have completed Your Quiz</h1>
            <h2>TOTAL POINTS : {points}/{totalQuestions}</h2>
          <h3>Want to try Again ? </h3>
          <button
            className="btn"
            onClick={() => {
              setStep(0);
              setStart(!start);
              setTotalQuestions(5);
              setLevel("easy");
              setCategory(9);
              setPoints(0)
            }}
          >
            New Quiz
          </button>
        </div>
        <Footer/>
      </>
    );
  }
  return (
    <div>
      {start ? (
        <QuestionUi
          question={quiz[step].question}
          options={quiz[step].options}
          handelSubmit={handelSubmit}
        />
      ) : (
        <Welcome
          setCategory={setCategory}
          setTotalQuestions={setTotalQuestions}
          setLevel={setLevel}
          setStart={setStart}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
