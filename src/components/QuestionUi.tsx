import React from 'react'
import { questionProps} from '../types/types'
const QuestionUi:React.FC<questionProps> = ({ question, options,handelSubmit }) => {
    
    
    return (
        
        <div>
            <h1>{question}</h1>    
                <form onSubmit={handelSubmit}>
                {options.map((e:string, ind: number)=>{
                      return(
                      <div key={ind}>
                        <label>
                        <input
                         type="radio"
                         name="opt"
                         value={e}/>
                         {e}
                    </label>
                   </div>
                   )
                    })}
                    
                    <input type="submit" value="submit"/>
                </form>
            
        </div>
    )
}

export default QuestionUi
