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
  return (
    <div>
      <h1>{question}</h1>
      <form
        onSubmit={(e: React.FormEvent<EventTarget>) =>
          handelSubmit(e, selectedAns)
        }
      >
        {options.map((e: string, ind: number) => {
          return (
            <div key={ind}>
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
  );
};

export default QuestionUi;
