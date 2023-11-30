import { useState, useEffect } from "react";
import Button from "./button";
import QuestionOne from "./questions/QuestionOne";
import QuestionTwo from "./questions/QuestionTwo";

function QuestionComponent({ questionIndex, onChange }) {
  switch (questionIndex) {
    case 0:
      return <QuestionOne handleChange={onChange} />;
    case 1:
      return <QuestionTwo handleChange={onChange} />;
    default:
      return null; //handle the case when the questionIndex is out of range
  }
}

function QuizComp() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState(Array(2).fill(0)); //update the array length as needed
  const [showScore, setShowScore] = useState(false);
  const [key, setKey] = useState(0);
  const [isOptionSelected, setIsOptionSelected] = useState(false); //Track wether an option has been selected

  const handleChange = (selected) => {
    setScores((prevScores) => {
      const newScores = [...prevScores];
      newScores[currentQuestionIndex] = selected;
      return newScores;
    });
    setIsOptionSelected(true); // Set to true when an option is selected
  };

  useEffect(() => {
    console.log("After resetting isOptionSelected:", isOptionSelected);
  }, [isOptionSelected]);//Log the value when isOptionSelected Changes
  const handleNext = () => {
    const selectedValue = scores[currentQuestionIndex];
    if (selectedValue !== undefined) {
      if (currentQuestionIndex < 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setKey((prevKey) => prevKey + 1);
      } else {
        const totalScore = scores.reduce((acc, curr) => acc + curr, 0);
        setScores((prevScores) => [...prevScores, totalScore]);
        setShowScore(true);
      }
    } else {
      alert("Please select an option before proceeding to the next question.");
    }
  };

  const handleStart = () => {
    setCurrentQuestionIndex(0);
    setScores(Array(questions.length).fill(0));
    setShowScore(false);
  };

  return (
    <div className="flex justify-center pt-40 flex-col w-[50vw] ">
      <QuestionComponent
        questionIndex={currentQuestionIndex}
        onChange={(selected) => handleChange(selected, currentQuestionIndex)}
      />
      <Button
        onClick={handleNext}
        title={currentQuestionIndex < 1 ? "Next" : "Submit"}
  disabled = {scores[currentQuestionIndex] === undefined}
        style={
          scores[currentQuestionIndex]=== undefined
            ? { opacity: 0.5, cursor: "not-allowed" }
            : {}
        }
        scores={scores}
        questionIndex={currentQuestionIndex}
        totalQuestions={2}
      />
         {showScore && (
        <div className="my-10 flex items-center flex-col bg-green-300 w-4/5 mx-auto p-5 rounded shadow-md">
          <span className="text-green-800 text-4xl my-4 font-bold">
            Score: {scores[scores.length - 1]}
          </span>
          <p className="text-2xl font-semibold my-4 text-center text-gray-700">
            {scores <= 60
              ? "Congrats! Your Carbon Footprint Score is Very Less.\nYou are doing a great job to protect environtment"
              : "Opps... Yout Carbon Footprint Score is Very High.\nYou Need To find ways to reduce carbon emission."}
          </p>
          <button
            className="bg-green-500 my-3 mx-auto text-gray-100 font-semibold px-4 py-2 rounded text-lg"
            onClick={handleStart}
          >
            Start Again
          </button>
        </div>
      )}
    </div>
  );
}

export default QuizComp;
