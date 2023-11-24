import { useState } from "react";
import Select from "react-select";

const Main = () => {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [score3, setScore3] = useState(0);
  const [score4, setScore4] = useState(0);
  const [score5, setScore5] = useState(0);
  const [score6, setScore6] = useState(0);
  const [score7, setScore7] = useState(0);
  const [score8, setScore8] = useState(0);
  const [score9, setScore9] = useState(0);
  const [score10, setScore10] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleChange1 = (selected) => {
    console.log(selected);
    setScore1(selected.value);
  };

  const handleChange2 = (selected) => {
    console.log(selected);
    setScore2(selected.value);
  };

  const handleChange3 = (selected) => {
    console.log(selected);
    setScore3(selected.value);
  };

  const handleChange4 = (selected) => {
    console.log(selected);
    setScore4(selected.value);
  };

  const handleChange5 = (selected) => {
    console.log(selected);
    setScore5(selected.value);
  };

  const handleChange6 = (selected) => {
    console.log(selected);
    setScore6(selected.value);
  };

  const handleChange7 = (selected) => {
    console.log(selected);
    setScore7(selected.value);
  };

  const handleChange8 = (selected) => {
    console.log(selected);
    setScore8(selected.value);
  };

  const handleChange9 = (selected) => {
    console.log(selected);
    setScore9(selected.value);
  };

  const handleChange10 = (selected) => {
    console.log(selected);
    setScore10(selected.value);
  };

  const handleSubmit = () => {
    setScore(score1 + score2 + score3 + score4 + score5 + score6);
    setShowScore(true);
  };
  const handleStart = () => {
    window.scrollTo(0, 0);
    window.location.reload();
  };

  return (
    <div className="w-4/5 mx-auto flex flex-col items-center my-10">
      <span className="text-5xl font-semibold my-5">
        Your Personal Carbon Footprint Calculator
      </span>
      <div className="w-4/5 mx-auto my-4">
        <p className="text-green-500 text-2xl my-2">Members in Your house?</p>
        <Select
          className="text-gray-700"
          options={[
            { value: 14, label: "Leave Alone" },
            { value: 12, label: "Share house with 1 preson" },
            { value: 10, label: "Share house with 2 presons" },
            { value: 8, label: "Share house with 3 presons" },
            { value: 6, label: "Share house with 4 presons" },
            { value: 4, label: "Share house with 5 presons" },
            { value: 2, label: "Share house with more than 5 presons" },
          ]}
          onChange={handleChange1}
          required
        />
        <br />
      </div>
      <div className="w-4/5 mx-auto my-4">
        <p className="text-green-500 text-2xl my-2">Size of your house?</p>
        <Select
          className="text-gray-700"
          options={[
            { value: 10, label: "Large House" },
            { value: 7, label: "Medium-sized House" },
            { value: 4, label: "Small House" },
            { value: 2, label: "Apartment" },
          ]}
          onChange={handleChange2}
        />
        <br />
      </div>
      <div className="w-4/5 mx-auto my-4">
        <p className="text-green-500 text-2xl my-2">
          Evaluate Your food choices
        </p>
        <Select
          className="text-gray-700"
          options={[
            { value: 12, label: "Pizza ,Chips,packed food ,etc" },
            { value: 10, label: "Eat domestic meat on a daily basis" },
            { value: 8, label: "Eat domestic meat few times a week" },
            { value: 6, label: "You have a good balanced diet" },
            { value: 4, label: "Your are Vegetarian" },
            { value: 2, label: "Your are Vegetarian and eat only widl meat" },
          ]}
          onChange={handleChange3}
        />
        <br />
      </div>
      <div className="w-4/5 mx-auto my-4">
        <p className="text-green-500 text-2xl my-2">
          Examine Your water consumption
        </p>
        <Select
          className="text-gray-700"
          options={[
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
          ]}
          onChange={handleChange4}
        />
        <br />
      </div>
      <div className="w-4/5 mx-auto my-4">
        <p className="text-green-500 text-2xl my-2">
          Determine how many household purchases you make each year
        </p>
        <Select
          className="text-gray-700"
          options={[
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
          ]}
          onChange={handleChange5}
        />
        <br />
      </div>
      <div className="w-4/5 mx-auto my-4">
        <p className="text-green-500 text-2xl my-2">
          Consider how much waste you produce
        </p>
        <Select
          className="text-gray-700"
          options={[
            { value: 50, label: "you fill 4 garbage cans each week" },
            { value: 40, label: "you fill 3 garbage cans each week" },
            { value: 30, label: "you fill 2 garbage cans each week" },
            { value: 20, label: "you fill 1 garbage can each week" },
            { value: 5, label: "you fill half garbage can each week" },
          ]}
          onChange={handleChange6}
        />
        <br />
      </div>
      <div className="w-4/5 mx-auto my-4">
        <p className="text-green-500 text-2xl my-2">
          Tally up your annual transportation scores(Personal Vehicle)
        </p>
        <Select
          className="text-gray-700"
          options={[
            { value: 12, label: "you travel more than 15,000 miles per year" },
            { value: 10, label: "you travel 10,000 to 15,000 miles per year" },
            { value: 6, label: "you travel 1,000 to 10,000 miles per year" },
            { value: 4, label: "you travel less than 1,000 miles per year" },
            { value: 0, label: " you don't have a personal vehicle" },
          ]}
          onChange={handleChange7}
        />
        <br />
      </div>
      <div className="w-4/5 mx-auto my-4">
        <p className="text-green-500 text-2xl my-2">
          Tally up your annual transportation scores(Public Vehicle)
        </p>
        <Select
          className="text-gray-700"
          options={[
            { value: 12, label: "you travel more than 20,000 miles per year" },
            { value: 10, label: "you travel 15,000 to 20,000 miles per year" },
            { value: 6, label: "you travel 10,000 to 15,000 miles per year" },
            { value: 4, label: "you travel 1,000 to 10,000 miles per year" },
            { value: 2, label: "you travel less than 1,000 miles per year" },
            { value: 0, label: " you don't use a public vehicle" },
          ]}
          onChange={handleChange8}
        />
        <br />
      </div>
      <div className="w-4/5 mx-auto my-4">
        <p className="text-green-500 text-2xl my-2">
          Tally up your annual transportation scores(Flight)
        </p>
        <Select
          className="text-gray-700"
          options={[
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
          ]}
          onChange={handleChange9}
        />
        <br />
      </div>
      <div className="w-4/5 mx-auto my-4">
        <p className="text-green-500 text-2xl my-2">
          Identify the amount of waste you recycle
        </p>
        <Select
          className="text-gray-700"
          options={[
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
          ]}
          onChange={handleChange10}
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-green-500 my-3 mx-auto text-gray-100 font-semibold px-4 py-2 rounded text-lg"
      >
        Submit
      </button>
      {showScore && (
        <div className="my-10 flex items-center flex-col bg-green-300 w-4/5 mx-auto p-5 rounded shadow-md">
          <span className="text-green-800 text-4xl my-4 font-bold">
            Score: {score}
          </span>
          <p className="text-2xl font-semibold my-4 text-center text-gray-700">
            {score <= 60
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
