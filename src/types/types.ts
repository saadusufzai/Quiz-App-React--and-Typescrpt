 export type data = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
 }

 export type quiz ={
     question:string 
     answer:string
     options:string[]
 }

 export type questionProps = {
     question:string
     options:string[]
     handelSubmit:(e:React.FormEvent<EventTarget>, selectedAns:string)=>void
 }