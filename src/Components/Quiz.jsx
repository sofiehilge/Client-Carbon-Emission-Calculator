import React, { useState } from "react";
import RadioButton from "./RadioButton";
import Modal from "react-modal";
import ProgressBar from "./ProgressBar";

Modal.setAppElement("#root");

const Quiz = () => {
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
        { value: 10, label: "Large House", emoji: "🏰", emojiLabel: "castle" },
        { value: 7, label: "Medium-sized House", emoji: "🏡", emojiLabel: "House with a garden" },
        { value: 4, label: "Small House", emoji: "🏠", emojiLabel: "House" },
        { value: 2, label: "Apartment", emoji:"🏢", emojiLabel: "apartment" },
      ],
    },
    {
      title: "Assess Your Food Choices",
      options: [
        { value: 12, label: "Pizza, Chips, packed food, etc.", emoji:"🍕", emojiLabel: "pizza slice"},
        { value: 10, label: "Eat meat on a daily basis", emoji: "🥩", emojiLabel: "meat" },
        { value: 8, label: "Eat meat few times a week", emoji: "🍗", emojiLabel: "chicken leg" },
        { value: 6, label: "Maintain a good balanced diet", emoji: "🍲", emojiLabel: "Pot of Food" },
        { value: 4, label: "Vegetarian", emoji:"🥗", emojiLabel:"green salad" },
      ],
    },
    {
      title: "Review Your Water Consumption",
      options: [
        {
          value: 4,
          label: "Run washer/dishwasher 9+ times a week", emoji: "🌊", emojiLabel: "Wave",
        },
        {
          value: 3,
          label: "Run washer/dishwasher 4-9 times a week", emoji: "💦", emojiLabel: "Droplets",
        },
        {
          value: 2,
          label: "Run washer/dishwasher 1-3 times a week", emoji: "💧", emojiLabel: "Drop",
        },
        {
          value: 1,
          label: "No dishwasher or washing machine", emoji: "❌", emojiLabel: "cross"
        },
      ],
    },
    {
      title: "Count Your Annual Household Purchases",
      options: [
        {
          value: 10,
          label: "Purchase > 7 new items per year", emoji: "🏬", emojiLabel: "Department store",
        },
        {
          value: 8,
          label: "Buy 5-7 new items per year", emoji: "🛋️", emojiLabel: "Couch and Lamp",
        },
        {
          value: 6,
          label: "Buy 3-5 new items per year", emoji: "🛒", emojiLabel: "Shopping cart",
        },
        {
          value: 4,
          label: "Buy < 3 new items per year", emoji: "🛍️", emojiLabel: "Shoppingbags",
        },
        {
          value: 2,
          label: "Purchase almost nothing, secondhand items", emoji: "♻️", emojiLabel: "Recyclinglabel",
        },
      ],
    },
    {
      title: "Measure Your Waste Production",
      options: [
        { value: 50, label: "Fill 4 garbage cans each week", emoji: "🗑️🗑️🗑️🗑️", emojiLabel: "Wastebasket" },
        { value: 40, label: "Fill 3 garbage cans each week", emoji: "🗑️🗑️🗑️", emojiLabel: "Wastebasket" },
        { value: 30, label: "Fill 2 garbage cans each week", emoji: "🗑️🗑️", emojiLabel: "Wastebasket" },
        { value: 20, label: "Fill 1 garbage can each week", emoji: "🗑️", emojiLabel: "Wastebasket" },
        { value: 5, label: "Fill half a garbage can each week", emoji:"♻️", emojiLabel:"recycling symbol" },
      ],
    },
    {
      title: "Calculate Your Annual Personal Vehicle Travel",
      options: [
        { value: 12, label: "Travel > 25,000 km per year", emoji: "🏎️", emojiLabel: "racing car" },
        { value: 10, label: "Travel 15,000 to 25,000 km per year", emoji: "🚗", emojiLabel: "Car" },
        { value: 6, label: "Travel 2,000 to 15,000 km per year", emoji: "🏍️", emojiLabel: "Motocycle" },
        { value: 4, label: "Travel < 2,000 km per year", emoji: "🛵", emojiLabel: "Scooter" },
        { value: 1, label: "No personal vehicle", emoji: "🚴", emojiLabel: "Person Biking" },
      ],
    },
    {
      title: "Calculate Your Annual Public Vehicle Travel",
      options: [
        { value: 12, label: "Travel > 30,000 km per year", emoji: "🚆", emojiLabel: "Light Rail"},
        { value: 10, label: "Travel 20,000 to 30,000 km per year", emoji: "🚂", emojiLabel: "Locomotive"},
        { value: 6, label: "Travel 10,000 to 20,000 km per year", emoji: "🚌", emojiLabel: "Bus" },
        { value: 4, label: "Travel 2,000 to 10,000 km per year", emoji: "🚋", emojiLabel: "Tram" },
        { value: 2, label: "Travel < 2,000 km per year", emoji: "🚇", emojiLabel: "Metro"},
        { value: 1, label: "Don't use public transport", emoji: "🐫", emojiLabel: "Camel" },
      ],
    },
    {
      title: "Calculate Your Annual Flight Travel",
      options: [
        {
          value: 12,
          label: "Short distances within your country", emoji: "🛩️", emojiLabel: "small plane",
        },
        {
          value: 10,
          label: "Further distances, nearby countries", emoji: "✈️", emojiLabel: "Plane",
        },
        { value: 6, label: "Far distances, other continents", emoji: "🚀", emojiLabel: "Rocket" },

        { value: 1, label: "No flight travel this year", emoji: "🪂", emojiLabel: "parashoot" },
      ],
    },
    {
      title: "Determine Your Recycling Habits",
      options: [
        { value: 24, label: "Don't recycle", emoji: "🗑️", emojiLabel: "Wastbasket" },
        { value: 20, label: "Recycle only Food Waste", emoji: "🥬", emojiLabel: "Leafy green" },
        {
          value: 12,
          label: "Recycle Aluminium, Steel, Food Waste", emoji: "🥫", emojiLabel: "Canned Food",
        },
        {
          value: 8,
          label: "Recycle Paper, Aluminium, Steel, Food Waste", emoji: "🧻", emojiLabel: "Roll of paper",
        },
        {
          value: 4,
          label: "Recycle Plastic, Paper, Aluminium, Steel, Food Waste", emoji: "🍬", emojiLabel: "Candy",
        },
        {
          value: 1,
          label:
            "Recycle Glass, Plastic, Paper, Aluminium, Steel, Food Waste", emoji: "🍹", emojiLabel: "Tropical Drink",
        },
      ],
    },
  ];

  const [questionIndex, setQuestionIndex] = useState(0);
  const [scores, setScores] = useState(Array(questions.length).fill(0));
  const [showScore, setShowScore] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleChange = (selected) => {
    console.log("Handling change. selected:", selected.value);
    setSelectedValue(selected.value);
    setScores((prevScores) => {
      const newScores = [...prevScores];
      newScores[questionIndex] = selected.value;
      return newScores;
    });
  };

  const handleNext = () => {
    const selectedValue = scores[questionIndex];
    console.log("Handeling next. Selected Value:", selectedValue);
    if (selectedValue !== undefined) {
      if (questionIndex < questions.length - 1) {
        setQuestionIndex((prevIndex) => {
          console.log(
            "Moving to the next question. Current index:",
            questionIndex
          );
          return prevIndex + 1;
        });
        setSelectedValue(null);
      } else {
        const totalScore = scores.reduce((acc, curr) => acc + curr, 0);
        console.log("submittin. total Score:".totalScore);
        setScores((prevScores) => [...prevScores, totalScore]);
        setShowScore(true);
        setModalIsOpen(true);
      }
    } else {
      alert("Please select an option before proceeding to the next question.");
    }
  };

  const handleStart = () => {
    setQuestionIndex(0);
    setScores(Array(questions.length).fill(0));
    setShowScore(false);
    setModalIsOpen(false);
  };

  const modalClassName = `absolute p-2 md:p-6 text-black transform -translate-x-1/2 -translate-y-1/2 border-2 rounded-xl bg-white Modal top-1/2 left-1/2 ${
    scores[scores.length - 1] <= 60 ? "border-green-500" : "border-red-500"
  } w-[85%] md:w-auto`;

  return (
    <div className="relative flex flex-col items-center justify-center">
      <ProgressBar totalQuestions={questions.length} currentQuestion={questionIndex +1} progress={questionIndex*10
      } height={20} bgcolor="blue"/>
      <div className="my-4 text-gray-700 font-Montserrat">
        {questions[questionIndex].title}
      </div>
      <RadioButton
        options={questions[questionIndex].options}
        onChange={(selected) => handleChange(selected)}
        selectedValue={selectedValue}
        required
      />
      <br />
      <button
        onClick={handleNext}
        className={`bg-gray-700 m-4 text-gray-100 font-semibold px-4 py-2 rounded text-lg ${
          !scores[questionIndex] && "opacity-50 cursor-not-allowed"
        }`}
        disabled={!scores[questionIndex]}
      >
        {questionIndex < questions.length - 1 ? "Next" : "Submit"}
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Example Modal"
        className={modalClassName}
        overlayClassName="Overlay"
        style={{top: "320px"}}
      >
        <div className="flex flex-col items-center">
          <span className="m-4 text-4xl">
            Your score: {scores[scores.length - 1]}
          </span>
          <p className="mb-4 text-lg text-center">
            {scores[scores.length - 1] <= 60
              ? "Congratulations! Your Carbon Footprint Score is Very Low.\nYou are doing a great job in protecting the environment."
              : "Oops... Your Carbon Footprint Score is Very High.\nYou need to find ways to reduce carbon emissions."}
          </p>
          <a
            href="https://withyodo.com/get-access/"
            className="inline-block w-2/3 p-2 m-4 text-sm text-center text-white bg-black rounded-full md:w-1/3 md:p-2 md:text-base hover:bg-gray-800"
          >
            Take action ›
          </a>

          <button
            className="px-4 mb-2 text-xs rounded-xl hover:bg-slate-200"
            onClick={handleStart}
          >
            Restart
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Quiz;
