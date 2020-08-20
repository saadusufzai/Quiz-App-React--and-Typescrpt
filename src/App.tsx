import React, {useEffect, useState} from 'react';
import './App.css';
import {getQuizDetails} from './services/service'
import { data,quiz } from './types/types';
import QuestionUi from './components/QuestionUi';

function App() {
  let [quiz, setQuiz] =useState<quiz[]>([])

  useEffect(()=>{
    const fetch =async ()=>{
    const data =  await getQuizDetails(5,10,'easy')
    
    setQuiz(data)
  }
  fetch()
  },[])
  console.log(quiz)
  if(!quiz.length){
    return<h1>Loading...</h1>
  }
  return (
    <div>
      <h1>QUIZ APP</h1>
      <QuestionUi question={quiz[0].question} options={quiz[0].options}/>
    </div>
  );
}

export default App;
