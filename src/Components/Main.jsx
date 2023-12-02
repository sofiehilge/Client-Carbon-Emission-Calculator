import { useState } from "react";
import RadioButton from "./RadioButton";

const Main = () => {
  const questions = [
    {
      title: "Number of Household Members?",
      options: [
        { value: 14, label: "Live Alone", emoji: "🧑", emojiLabel: "person" },
        {
          value: 12,
          label: "Share house with 1 person",
          emoji: "🧑‍🤝‍🧑",
          emojiLabel: "two people",
        },
        {
          value: 10,
          label: "Share house with 2 persons",
          emoji: "👪",
          emojiLabel: "three people",
        },
        {
          value: 8,
          label: "Share house with 3 persons",
          emoji: "👨‍👩‍👧‍👧",
          emojiLabel: "four people",
        },
        {
          value: 6,
          label: "Share house with 4 or more",
          emoji: "🏰",
          emojiLabel: "castle",
        },
      ],
    },
    {
      title: "Size of Your Home?",
      options: [
        { value: 10, label: "Large House" },
        { value: 7, label: "Medium-sized House" },
        { value: 4, label: "Small House" },
        { value: 2, label: "Apartment" },
      ],
    },
    {
      title: "Asses Your Food Choices",
      options: [
        { value: 12, label: "Pizza, Chips, packed food, etc." },
        { value: 10, label: "Eat domestic meat on a daily basis" },
        { value: 8, label: "Eat domestic meat few times a week" },
        { value: 6, label: "Maintaion a good balanced diet" },
        { value: 4, label: "Vegetarian" },
      ],
    },
    {
      title: "Review Your Water Consumption",
      options: [
        {
          value: 3,
          label: "Run washer/dishwasher 9+ times a week",
        },
        {
          value: 2,
          label: "Run washer/dishwasher 4-9 times a week",
        },
        {
          value: 1,
          label: "Run washer/dishwasher 1-3 times a week",
        },
        {
          value: 0,
          label: "No dishwasher or washing machine",
        },
      ],
    },
    {
      title: "Count Your Annual Household Purchases",
      options: [
        {
          value: 10,
          label: "Purchase >7 new items per year",
        },
        {
          value: 8,
          label: "Buy 5-7 new items per year",
        },
        {
          value: 6,
          label: "Buy 3-5 new items per year",
        },
        {
          value: 4,
          label: "Buy <3 new items per year",
        },
        {
          value: 2,
          label: "Purchase almost nothing, secondhand items",
        },
      ],
    },
    {
      title: "Measure Your Waste Production",
      options: [
        { value: 50, label: "Fill 4 garbage cans each week" },
        { value: 40, label: "Fill 3 garbage cans each week" },
        { value: 30, label: "Fill 2 garbage cans each week" },
        { value: 20, label: "Fill 1 garbage can each week" },
        { value: 5, label: "Fill half a garbage can each week" },
      ],
    },
    {
      title: "Calculate Your Annual Personal Vehicle Travel",
      options: [
        { value: 12, label: "Travel >25,000 km per year" },
        { value: 10, label: "Travel 15,000 to 25,000 km per year" },
        { value: 6, label: "Travel 2,000 to 15,000 km per year" },
        { value: 4, label: "Travel <2,000 km per year" },
        { value: 0, label: "No personal vehicle" },
      ],
    },
    {
      title: "Calculate Your Annual Public Vehicle Travel",
      options: [
        { value: 12, label: "Travel >30,000 km per year" },
        { value: 10, label: "Travel 20,000 to 30,000 km per year" },
        { value: 6, label: "Travel 10,000 to 20,000 km per year" },
        { value: 4, label: "Travel 2,000 to 10,000 km per year" },
        { value: 2, label: "Travel <2,000 km per year" },
        { value: 0, label: "Don't use public transport" },
      ],
    },
    {
      title: "Calculate Your Annual Flight Travel",
      options: [
        {
          value: 12,
          label: "Short distances within your country",
        },
        {
          value: 10,
          label: "Further distances, nearby countries",
        },
        { value: 6, label: "Far distances, other continents" },

        { value: 0, label: "No flight travel this year" },
      ],
    },
    {
      title: "Determine Your Recycling Habits",
      options: [
        { value: 24, label: "Don't recycle" },
        { value: 20, label: "Recycle only Food Waste" },
        {
          value: 12,
          label: "Recycle Aluminium, Steel, Food Waste",
        },
        {
          value: 8,
          label: "Recycle Paper, Aluminium, Steel, Food Waste",
        },
        {
          value: 4,
          label: "Recycle Plastic, Paper, Aluminium, Steel, Food Waste",
        },
        {
          value: 0,
          label: "Recycle Glass, Plastic, Paper, Aluminium, Steel, Food Waste",
        },
      ],
    },
  ];

  const [questionIndex, setQuestionIndex] = useState(0);
  const [scores, setScores] = useState(Array(questions.length).fill(0));
  const [showScore, setShowScore] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const handleChange = (selected) => {
    setSelectedValue(selected.value);
    setScores((prevScores) => {
      const newScores = [...prevScores];
      newScores[questionIndex] = selected.value;
      return newScores;
    });
  };

  const handleNext = () => {
    const selectedValue = scores[questionIndex];
    console.log("Selected Value:", selectedValue);
    //check if an option has been selected for the current question
    if (selectedValue !== undefined) {
      if (questionIndex < questions.length - 1) {
        setQuestionIndex((prevIndex) => prevIndex + 1);
        console.log("Current question index:", questionIndex);
        console.log("Selected value:", scores[questionIndex]);
        //reset the select component by updating its key when moving to the next question
        //this will force it to re-render with the default value
        setSelectedValue(null); //Reset selected value for the new question
      } else {
        //If all questions are answered, calculate and show the total score
        const totalScore = scores.reduce((acc, curr) => acc + curr, 0);
        setScores((prevScores) => [...prevScores, totalScore]);
        setShowScore(true);
      }
    } else {
      //Display an alert or handle the case where no option is selected
      alert("Please select and option before proceeding to the next question.");
    }
  };

  //add a state to control the key prop of the Select compoenet
  const [key, setKey] = useState(0);

  const handleStart = () => {
    setQuestionIndex(0);
    setScores(Array(questions.length).fill(0));
    setShowScore(false);
  };

  return (
    <div className="flex flex-col justify-center">
      <div>
        <p className="flex justify-center my-2 text-gray-700 font-Montserrat">
          {questions[questionIndex].title}
        </p>
        <RadioButton
          options={questions[questionIndex].options}
          onChange={(selected) => handleChange(selected)}
          selectedValue={selectedValue}
          required
        />
        <br />
      </div>
      <button
        onClick={handleNext}
        className={`bg-gray-700 my-3 mx-auto text-gray-100 font-semibold px-4 py-2 rounded text-lg`}
        disabled={!scores[questionIndex]}
        style={
          !scores[questionIndex] ? { opacity: 0.5, cursor: "not-allowed" } : {}
        }
      >
        {questionIndex < questions.length - 1 ? "Next" : "Submit"}
      </button>
      {showScore && (
        <div className="flex flex-col items-center w-4/5 p-5 mx-auto my-10 bg-green-300 rounded shadow-md">
          <span className="my-4 text-4xl font-bold text-green-800">
            Score: {scores[scores.length - 1]}
          </span>
          <p className="my-4 text-2xl font-semibold text-center text-gray-700">
            {scores <= 60
              ? "Congrats! Your Carbon Footprint Score is Very Less.\nYou are doing a great job to protect environtment"
              : "Opps... Yout Carbon Footprint Score is Very High.\nYou Need To find ways to reduce carbon emission."}
          </p>
          <button
            className="px-4 py-2 mx-auto my-3 text-lg font-semibold text-gray-100 bg-green-500 rounded"
            onClick={handleStart}
          >
            Start Again
          </button>
        </div>
      )}
    </div>
  );
};

export default Main;
