import {data,quiz} from '../types/types'

const shuffle = (array:any[])=> 
    [...array].sort(() => Math.random() - 0.5);
  

export const getQuizDetails = async(ammount:number , category:number, difficulty:string):Promise<data[]>=>{
     const res = await fetch(`https://opentdb.com/api.php?amount=${ammount}&category=${category}&difficulty=${difficulty}`)
     let {results} = await res.json()
     const quiz = results.map((data:data)=>{
         return {
             question:data.question,
             answer:data.correct_answer,
             options:shuffle(data.incorrect_answers.concat(data.correct_answer))
         }

     })
     return quiz
    }