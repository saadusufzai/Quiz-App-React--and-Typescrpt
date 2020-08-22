import React, { useEffect, useState } from "react";

import { categories } from "../services/service";
import { welcomeProp } from "../types/types";

const Welcome: React.FC<welcomeProp> = ({ setCategory }) => {
  const [name, setName] = useState<string[]>();
  
  const [selCategory, setSelectedCategory] = useState<string>("General Knowledge");
  useEffect(() => {
    const data = async () => {
      const category = await categories();
      setName(category.map((e) => e.name));
      
    };

    data();
  }, []);

  let handelCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    setCategory(e.target.selectedIndex+9)
  };

  

  return (
    <div>
      <h1>Welcome to the Ultimate Quiz App</h1>
      <p>Select your ultimate quiz and test your knowledge </p>
      <div>
        <h1>Catagories</h1>
        <form >
          <select
            name="category"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              handelCategory(e)
            }
          >
            {name?.map((e, i) => {
              return (
                <option key={i} value={e}>
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
