import React, { useEffect, useState } from "react";

import { categories } from "../services/service";
import { welcomeProp } from "../types/types";

const Welcome: React.FC<welcomeProp> = ({ setCategory, setTotalQuestions }) => {
  const [name, setName] = useState<string[]>();

  const [selCategory, setSelectedCategory] = useState<string>(
    "General Knowledge"
  );
  useEffect(() => {
    const data = async () => {
      const category = await categories();
      setName(category.map((e) => e.name));
    };

    data();
  }, []);

  let handelCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    setCategory(e.target.selectedIndex + 9);
  };

  let handelAmmount = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTotalQuestions(parseInt(e.target.value, 10));
  };

  return (
    <div>
      <h1>Welcome to the Ultimate Quiz App</h1>
      <p>Select your ultimate quiz and test your knowledge </p>
      <div>
        <form>
          <div>
            <h3>Catagories</h3>
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
          </div>
          <div>
            <h3>Total Questions</h3>
            <select
              name="ammount"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                handelAmmount(e)
              }
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
              <option value={25}>25</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Welcome;
