import React, { useState } from "react";
import RadioButton from "./RadioButton";
import Modal from "react-modal";

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
        { value: 10, label: "Large House 🏠" },
        { value: 7, label: "Medium-sized House 🏡" },
        { value: 4, label: "Small House 🏠" },
        { value: 2, label: "Apartment 🏢" },
      ],
    },
    {
      title: "Assess Your Food Choices 🍽️",
      options: [
        { value: 12, label: "Pizza, Chips, packed food, etc. 🍕" },
        { value: 10, label: "Eat domestic meat on a daily basis 🍖" },
        { value: 8, label: "Eat domestic meat few times a week 🥩" },
        { value: 6, label: "Maintain a good balanced diet 🥗" },
        { value: 4, label: "Vegetarian 🌱" },
      ],
    },
    {
      title: "Review Your Water Consumption 💧",
      options: [
        {
          value: 4,
          label: "Run washer/dishwasher 9+ times a week 🧼",
        },
        {
          value: 3,
          label: "Run washer/dishwasher 4-9 times a week 🧼",
        },
        {
          value: 2,
          label: "Run washer/dishwasher 1-3 times a week 🧼",
        },
        {
          value: 1,
          label: "No dishwasher or washing machine ❌",
        },
      ],
    },
    {
      title: "Count Your Annual Household Purchases 🛒",
      options: [
        {
          value: 10,
          label: "Purchase > 7 new items per year 🛍️",
        },
        {
          value: 8,
          label: "Buy 5-7 new items per year 🛍️",
        },
        {
          value: 6,
          label: "Buy 3-5 new items per year 🛍️",
        },
        {
          value: 4,
          label: "Buy < 3 new items per year 🛍️",
        },
        {
          value: 2,
          label: "Purchase almost nothing, secondhand items ♻️",
        },
      ],
    },
    {
      title: "Measure Your Waste Production ♻️",
      options: [
        { value: 50, label: "Fill 4 garbage cans each week 🗑️" },
        { value: 40, label: "Fill 3 garbage cans each week 🗑️" },
        { value: 30, label: "Fill 2 garbage cans each week 🗑️" },
        { value: 20, label: "Fill 1 garbage can each week 🗑️" },
        { value: 5, label: "Fill half a garbage can each week 🗑️" },
      ],
    },
    {
      title: "Calculate Your Annual Personal Vehicle Travel 🚗",
      options: [
        { value: 12, label: "Travel > 25,000 km per year 🌍" },
        { value: 10, label: "Travel 15,000 to 25,000 km per year 🌍" },
        { value: 6, label: "Travel 2,000 to 15,000 km per year 🌍" },
        { value: 4, label: "Travel < 2,000 km per year 🌍" },
        { value: 1, label: "No personal vehicle ❌" },
      ],
    },
    {
      title: "Calculate Your Annual Public Vehicle Travel 🚍",
      options: [
        { value: 12, label: "Travel > 30,000 km per year 🌍" },
        { value: 10, label: "Travel 20,000 to 30,000 km per year 🌍" },
        { value: 6, label: "Travel 10,000 to 20,000 km per year 🌍" },
        { value: 4, label: "Travel 2,000 to 10,000 km per year 🌍" },
        { value: 2, label: "Travel < 2,000 km per year 🌍" },
        { value: 1, label: "Don't use public transport ❌" },
      ],
    },
    {
      title: "Calculate Your Annual Flight Travel 🛩️",
      options: [
        {
          value: 12,
          label: "Short distances within your country ✈️",
        },
        {
          value: 10,
          label: "Further distances, nearby countries ✈️",
        },
        { value: 6, label: "Far distances, other continents ✈️" },

        { value: 1, label: "No flight travel this year ❌" },
      ],
    },
    {
      title: "Determine Your Recycling Habits ♻️",
      options: [
        { value: 24, label: "Don't recycle ❌" },
        { value: 20, label: "Recycle only Food Waste ♻️" },
        {
          value: 12,
          label: "Recycle Aluminium, Steel, Food Waste ♻️",
        },
        {
          value: 8,
          label: "Recycle Paper, Aluminium, Steel, Food Waste ♻️",
        },
        {
          value: 4,
          label: "Recycle Plastic, Paper, Aluminium, Steel, Food Waste ♻️",
        },
        {
          value: 1,
          label:
            "Recycle Glass, Plastic, Paper, Aluminium, Steel, Food Waste ♻️",
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

  const modalClassName = `absolute p-6 text-black transform -translate-x-1/2 -translate-y-1/2 border-4 rounded-xl bg-slate-100 Modal top-1/2 left-1/2 ${
    scores[scores.length - 1] <= 60 ? "border-green-500" : "border-red-700"
  }`;

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="my-2 text-gray-700 font-Montserrat">
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
        className={`bg-gray-700 my-3 text-gray-100 font-semibold px-4 py-2 rounded text-lg ${
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
      >
        <div className="flex flex-col items-center">
          <span className="my-4 text-4xl">
            Your score: {scores[scores.length - 1]}
          </span>
          <p className="mb-10 text-xl text-center">
            {scores[scores.length - 1] <= 60
              ? "Congrats! Your Carbon Footprint Score is Very Less.\nYou are doing a great job to protect the environment."
              : "Opps... Your Carbon Footprint Score is Very High.\nYou need to find ways to reduce carbon emissions. Take action here!"}
          </p>
          <button
            className="px-3 text-xs rounded-xl hover:bg-slate-200"
            onClick={handleStart}
          >
            Restart
          </button>
          <a
            href="https://withyodo.com/get-access/"
            className="inline-block w-1/3 p-2 px-10 m-4 text-sm text-center text-white bg-black rounded-full"
          >
            Get early access ›
          </a>
        </div>
      </Modal>
    </div>
  );
};

export default Quiz;
