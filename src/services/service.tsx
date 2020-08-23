import { data, quiz, category } from "../types/types";

const shuffle = (array: any[]) => [...array].sort(() => Math.random() - 0.5);

export const getQuizDetails = async (
  ammount: number,
  category: number,
  difficulty: string
): Promise<quiz[]> => {
  const res = await fetch(
    `https://opentdb.com/api.php?amount=${ammount}&category=${category}&difficulty=${difficulty}`
  );
  let { results } = await await res.json();
  const quiz: quiz[] = results.map((data: data) => {
    return {
      question: data.question,
      answer: data.correct_answer,
      options: shuffle(data.incorrect_answers.concat(data.correct_answer)),
    };
  });
  return quiz;
};

export const categories = async (): Promise<category[]> => {
  const res = await fetch("https://opentdb.com/api_category.php");
  let { trivia_categories } = await res.json();
  const data: category[] = trivia_categories.map((data: category) => {
    return {
      id: data.id,
      name: data.name,
    };
  });
  return data;
};
