import React, {useEffect, useState} from 'react';
import './App.css';
import {getQuizDetails} from './services/service'
import { quiz } from './types/types';
import QuestionUi from './components/QuestionUi';

function App() {
  let [quiz, setQuiz] =useState<quiz[]>([])
  let [step, setStep] =useState<number>(0)
  let [totalQuestions, setTotalQuestions] =useState<number>(5)
  let [category, setCategory] =useState<number>(12)
  let [level, setLevel] =useState<string>('easy')

  useEffect(()=>{
    const fetch =async ()=>{
    const data =  await getQuizDetails(totalQuestions,category,level)
    
    setQuiz(data)
  }
  fetch()
  },[])

  const handelSubmit =(e:React.FormEvent<EventTarget>)=>{
    e.preventDefault()
    if(step !== totalQuestions){
      setStep(++step)
    }
    console.log(e.target)
    
    

  }

  if(!quiz.length){
    return<h1>Loading...</h1>
  }
  
  if(step === totalQuestions){
    
    return<h1>You have completed Your Quiz</h1>
  }
  return (
    <div>
      
      <QuestionUi question={quiz[step].question} options={quiz[step].options} handelSubmit={handelSubmit}/>
    </div>
  );
}

export default App;
