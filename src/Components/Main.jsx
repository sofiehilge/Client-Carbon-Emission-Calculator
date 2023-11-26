import { useState } from "react";
import Select from "react-select";

const Main = () => {
  const [questionIndex, setQuestionIndex] = useState(0);

  const questions = [
    {
      title: "Members in Your house?",
      options: [
        { value: 14, label: "Live Alone" },
        { value: 12, label: "Share house with 1 person" },
        { value: 10, label: "Share house with 2 presons" },
        { value: 8, label: "Share house with 3 presons" },
        { value: 6, label: "Share house with 4 presons" },
        { value: 4, label: "Share house with 5 presons" },
        { value: 2, label: "Share house with more than 5 presons" },
      ],
    },
    {
      title: "Size of your house?",
      options: [
        { value: 10, label: "Large House" },
        { value: 7, label: "Medium-sized House" },
        { value: 4, label: "Small House" },
        { value: 2, label: "Apartment" },
      ],
    },
    {
      title: "Evaluate Your food choices",
      options: [
        { value: 12, label: "Pizza ,Chips,packed food ,etc" },
        { value: 10, label: "Eat domestic meat on a daily basis" },
        { value: 8, label: "Eat domestic meat few times a week" },
        { value: 6, label: "You have a good balanced diet" },
        { value: 4, label: "Your are Vegetarian" },
        { value: 2, label: "Your are Vegetarian and eat only widl meat" },
      ],
    },
    {
      title: "Examine Your water consumption",
      options: [
        {
          value: 3,
          label: "You run washing machine or dishwasher 9+ times a week",
        },
        {
          value: 2,
          label: "You run washing machine or dishwasher 4-9 times a week",
        },
        {
          value: 1,
          label: "You run washing machine or dishwasher 1-3 times a week",
        },
        {
          value: 0,
          label: "You dont have a dishwasher or washing machine",
        },
      ],
    },
    {
      title: "Determine how many household purchases you make each year",
      options: [
        {
          value: 10,
          label:
            "you >7 new pieces of furniture, electronics, or other household gadgets per year",
        },
        {
          value: 8,
          label:
            "you buy 5-7 new pieces of furniture, electronics, or other household gadgets per year",
        },
        {
          value: 6,
          label:
            "you buy 3-5 new pieces of furniture, electronics, or other household gadgets per year",
        },
        {
          value: 4,
          label:
            "you buy <3 new pieces of furniture, electronics, or other household gadgets per year",
        },
        {
          value: 2,
          label: " you purchase almost nothing or only secondhand items",
        },
      ],
    },
    {
      title: "Consider how much waste you produce",
      options: [
        { value: 50, label: "you fill 4 garbage cans each week" },
        { value: 40, label: "you fill 3 garbage cans each week" },
        { value: 30, label: "you fill 2 garbage cans each week" },
        { value: 20, label: "you fill 1 garbage can each week" },
        { value: 5, label: "you fill half garbage can each week" },
      ],
    },
    {
      title: "Tally up your annual transportation scores(Personal Vehicle)",
      options: [
        { value: 12, label: "you travel more than 15,000 miles per year" },
        { value: 10, label: "you travel 10,000 to 15,000 miles per year" },
        { value: 6, label: "you travel 1,000 to 10,000 miles per year" },
        { value: 4, label: "you travel less than 1,000 miles per year" },
        { value: 0, label: " you don't have a personal vehicle" },
      ],
    },
    {
      title: "Tally up your annual transportation scores(Public Vehicle)",
      options: [
        { value: 12, label: "you travel more than 20,000 miles per year" },
        { value: 10, label: "you travel 15,000 to 20,000 miles per year" },
        { value: 6, label: "you travel 10,000 to 15,000 miles per year" },
        { value: 4, label: "you travel 1,000 to 10,000 miles per year" },
        { value: 2, label: "you travel less than 1,000 miles per year" },
        { value: 0, label: " you don't use a public vehicle" },
      ],
    },
    {
      title: "Tally up your annual transportation scores(Flight)",
      options: [
        {
          value: 12,
          label:
            "you only travel short distances in 1 year, such as within your state",
        },
        {
          value: 10,
          label:
            "you travel further distances, such as to a nearby state or country",
        },
        { value: 6, label: "you travel far, such as to another continent" },

        { value: 0, label: " you didn't travel by flight this year" },
      ],
    },
    {
      title: "Identify the amount of waste you recycle",
      options: [
        { value: 24, label: "You dont recycle" },
        { value: 20, label: "You recycle only Food Waste" },
        {
          value: 16,
          label: "You recycle only Steel and Food Waste",
        },
        {
          value: 12,
          label: "You recycle only Aluminium ,Steel ,Food Waste",
        },
        {
          value: 8,
          label: "You recycle only Paper ,Aluminium ,Steel ,Food Waste",
        },
        {
          value: 4,
          label: "You recycle Plastic ,Paper ,Aluminium ,Steel ,Food Waste",
        },
        {
          value: 0,
          label:
            "You recycle Glass ,Plastic ,Paper ,Aluminium ,Steel ,Food Waste",
        },
      ],
    },
  ];

  const [scores, setScores] = useState(Array(questions.length).fill(0));
  const [showScore, setShowScore] = useState(false);

  const handleChange = (selected) => {
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
        console.log('Current question index:', questionIndex);
        console.log('Selected value:', scores[questionIndex]);
        //reset the select component by updating its key when moving to the next question
        //this will force it to re-render with the default value
        setKey((prevKey) => prevKey + 1);
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
    <div className="w-4/5 mx-auto flex flex-col items-center my-10">
      <span className="text-5xl font-semibold my-5">
        Your Personal Carbon Footprint Calculator
      </span>
      <div className="w-4/5 mx-auto my-4">
        <p className="text-green-500 text-2xl my-2">
          {questions[questionIndex].title}
        </p>
        <Select
          key={key}
          className="text-gray-700"
          options={questions[questionIndex].options}
          onChange={handleChange}
          required
        />
        <br />
      </div>
      <button
        onClick={handleNext}
        className={`bg-green-500 my-3 mx-auto text-gray-100 font-semibold px-4 py-2 rounded text-lg`}
        disabled={!scores[questionIndex]}
        style={
          !scores[questionIndex]
            ? { opacity: 0.5, cursor: "not-allowed" }
            : {}
        }
      >
        {questionIndex < questions.length - 1 ? "Next" : "Submit"}
      </button>
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
};

export default Main;
