import React, { useEffect, useState } from "react";

import { categories } from "../services/service";
import {welcomeProp} from '../types/types'

const Welcome:React.FC<welcomeProp> = ({setCategory}) => {
  const [name, setName] = useState<string[]>();
  useEffect(() => {
    const data = async () => {
      const category = await categories();
      setName(category.map((e) => e.name));
    };

    data();
  }, []);

  let handelCategory = (e: React.FormEvent<HTMLOptionElement>)=>{
     console.log(e.target)
  }
  console.log(name);
  return (
    <div>
      <h1>Welcome to the Ultimate Quiz App</h1>
      <p>Select your ultimate quiz and test your knowledge </p>
      <div>
        <h1>Catagories</h1>
        <form>
          <select name="category">
            {name?.map((e, i) => {
              return (
                <option key={i} value={e}  onSelect={(e: React.FormEvent<HTMLOptionElement>)=>handelCategory(e)} >
                  {e}
                </option>
              );
            })}
          </select>
        </form>
      </div>
    </div>
  );
};

export default Welcome;
