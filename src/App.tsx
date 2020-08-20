import React, {useEffect, useState} from 'react';
import './App.css';
import {getQuizDetails} from './services/service'
import { data,quiz } from './types/types';
import QuestionUi from './components/QuestionUi';

function App() {
  let [quiz, setQuiz] =useState<quiz[]>([])

  useEffect(()=>{
    const fetch =async ()=>{
    const data:data[] =  await getQuizDetails(5,10,'easy')
    
    setQuiz(data)
  }
  fetch()
  },[])
  console.log(quiz)
  return (
    <div>
      <h1>QUIZ APP</h1>
      <QuestionUi quiz={quiz}/>
    </div>
  );
}

export default App;
