import React,{useEffect,useState} from 'react'
import {categories,} from '../services/service'
const Welcome = () => {
   const [name, setName] = useState<string[]>()
    useEffect(() => {
        const data = async ()=>{
           const category = await categories()
           setName(category.map((e)=>e.name))
           console.log(name)
        }
        
            data()
        
    }, [])
    
    return (
        <div>
            <h1>Welcome to the Ultimate Quiz App</h1>
            <p>Select your ultimate quiz and test your knowledge </p>
            <div>
                <h1>Catagories</h1>
                <form>
                    <select name="category">
                        
                    </select>
                </form>
            </div>
        </div>
    )
}

export default Welcome
