import React, {useEffect, useState} from 'react';
import './App.css';
import {getQuizDetails} from './services/service'
import { data } from './types/types';

function App() {
  let [quiz, setQuiz] =useState<data[]>([])

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
      {/* {quiz.map((e)=>{
        <h1>{e.category}</h1>
       
      })} */}
    </div>
  );
}

export default App;
