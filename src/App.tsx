import React, { useEffect, useState } from "react";
import "./App.css";
import { getQuizDetails } from "./services/service";
import { quiz } from "./types/types";
import QuestionUi from "./components/QuestionUi";
import Welcome from "./components/Welcome";
import Spinner from 'react-bootstrap/Spinner'

function App() {
  let [quiz, setQuiz] = useState<quiz[]>([]);
  let [step, setStep] = useState<number>(0);
  let [totalQuestions, setTotalQuestions] = useState<number>(5);
  let [category, setCategory] = useState<number>(13);
  let [level, setLevel] = useState<string>("easy");
  let [points, setPoints] = useState<number>(0);
  let [start, setStart] = useState<boolean>(false);

  useEffect(() => {
    const fetch = async () => {
      const data = await getQuizDetails(totalQuestions, category, level);

      setQuiz(data);
    };
    fetch();
  }, [start]);

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
    return <Spinner animation="border" role="status">
    <span className="sr-only">Loading...</span>
  </Spinner>;
  }
  
  if (step === totalQuestions) {
    return (
      <div className='exit'>
        <h1>
          {points >= totalQuestions / 2 ? `CONGRATS!` : `BETTER LUCK NEXT TIME`}
        </h1>
        <h1>You have completed Your Quiz</h1>
       <h2>Your Score : {points}/{totalQuestions}</h2>
        <h3>Want to try Again ? </h3>
        <button
          className='btn'
          onClick={() => {
            setStep(0);
            setStart(!start);
          }}
        >
         Start New Quiz
        </button>
      </div>
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
    </div>
  );
}

export default App;
