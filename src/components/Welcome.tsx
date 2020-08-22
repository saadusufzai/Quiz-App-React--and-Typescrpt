import React, { useEffect, useState } from "react";

import { categories } from "../services/service";
import { welcomeProp } from "../types/types";
import QuestionUi from "./QuestionUi";

const Welcome: React.FC<welcomeProp> = ({ setCategory, setTotalQuestions, setLevel,setStart }) => {
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

  let handelDifficulty = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLevel(e.target.value);
  };

  let handelSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    setStart(true)
  }

  return (
    <div>
      <h1>Welcome to the Ultimate Quiz App</h1>
      <p>Select your ultimate quiz and test your knowledge </p>
      <div>
        <form  onSubmit={(e: React.FormEvent<HTMLFormElement>)=>{handelSubmit(e)}}>
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
          <div>
            <h3>Difficulty Level</h3>
            <select
              name="difficulty"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                handelDifficulty(e)
              }
            >
              <option value='easy'>Easy</option>
              <option value='medium'>Medium</option>
              <option value='hard'>Hard</option>
            </select>
          </div>
          <div><input type="submit" value="START QUIZ"/></div>
        </form>
      </div>
    </div>
  );
};

export default Welcome;
