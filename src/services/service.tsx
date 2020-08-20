export const getQuizDetails = async(ammount:number , category:number, difficulty:string)=>{
     const res = await fetch(`https://opentdb.com/api.php?amount=${ammount}&category=${category}&difficulty=${difficulty}`)
     let {results} = await res.json()
     return results 

    }