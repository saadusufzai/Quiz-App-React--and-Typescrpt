import React, { useState } from "react";
import { questionProps } from "../types/types";
const QuestionUi: React.FC<questionProps> = ({
  question,
  options,
  handelSubmit,
}) => {
  let [selectedAns, setSelectedAns] = useState("");
  const handelSelection = (e: any) => {
    setSelectedAns(e.target.value);
  };

  function createMarkup() { return {__html: question}; };

  return (
    <div className='question'>
      <div className='questionBox'>
      <h1 dangerouslySetInnerHTML ={createMarkup()} ></h1>
      <form
        onSubmit={(e: React.FormEvent<EventTarget>) =>
          handelSubmit(e, selectedAns)
        }
      >
        {options.map((e: string, ind: number) => {
          return (
            <div className='options' key={ind}>
              <label>
                <input
                  type="radio"
                  name="opt"
                  value={e}
                  onChange={handelSelection}
                  required
                  checked={selectedAns === e}
                />
                {e}
              </label>
            </div>
          );
        })}

        <input type="submit" value="submit" />
      </form>
      </div>
    </div>
  );
};

export default QuestionUi;
