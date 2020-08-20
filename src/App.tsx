import React, {useEffect} from 'react';
import './App.css';
import {getQuizDetails} from './services/service'

function App() {
  useEffect(()=>{
    const fetch =async ()=>{
    const data =  await getQuizDetails(5,10,'easy')
    console.log(data)
  }
  fetch()
  },[])

  return (
    <div>APP</div>
  );
}

export default App;
