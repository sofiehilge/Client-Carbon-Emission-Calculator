const questions = [
  {
    question: "Members in Your house?",
    options: [
      { value: 14, label: "Leave Alone" },
      { value: 12, label: "Share house with 1 preson" },
      { value: 10, label: "Share house with 2 presons" },
      { value: 8, label: "Share house with 3 presons" },
      { value: 6, label: "Share house with 4 presons" },
      { value: 4, label: "Share house with 5 presons" },
      { value: 2, label: "Share house with more than 5 presons" },
    ],
    handleChange: (selected, setScore) => setScore(selected.value),
  },
  {
    question: "Size of your house?",
    options: [
      { value: 10, label: "Large House" },
      { value: 7, label: "Medium-sized House" },
      { value: 4, label: "Small House" },
      { value: 2, label: "Apartment" },
    ],
    handleChange: (selected, setScore) => setScore(selected.value),
  },
  {
    question: "Evaluate Your food choices",
    options: [
      { value: 12, label: "Pizza ,Chips,packed food ,etc" },
      { value: 10, label: "Eat domestic meat on a daily basis" },
      { value: 8, label: "Eat domestic meat few times a week" },
      { value: 6, label: "You have a good balanced diet" },
      { value: 4, label: "Your are Vegetarian" },
      { value: 2, label: "Your are Vegetarian and eat only widl meat" },
    ],
    handleChange: (selected, setScore) => setScore(selected.value),
  },
  {
    question: "Examine Your water consumption",
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
    handleChange: (selected, setScore) => setScore(selected.value),
  },
  {
    question: "Determine how many household purchases you make each year",
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
    handleChange: (selected, setScore) => setScore(selected.value),
  },
  {
    question: "Consider how much waste you produce",
    options: [
      { value: 50, label: "you fill 4 garbage cans each week" },
      { value: 40, label: "you fill 3 garbage cans each week" },
      { value: 30, label: "you fill 2 garbage cans each week" },
      { value: 20, label: "you fill 1 garbage can each week" },
      { value: 5, label: "you fill half garbage can each week" },
    ],
    handleChange: (selected, setScore) => setScore(selected.value),
  },
  {
    question: "Tally up your annual transportation scores(Personal Vehicle)",
    options: [
      { value: 12, label: "you travel more than 15,000 miles per year" },
      { value: 10, label: "you travel 10,000 to 15,000 miles per year" },
      { value: 6, label: "you travel 1,000 to 10,000 miles per year" },
      { value: 4, label: "you travel less than 1,000 miles per year" },
      { value: 0, label: " you don't have a personal vehicle" },
    ],
    handleChange: (selected, setScore) => setScore(selected.value),
  },
  {
    question: "Tally up your annual transportation scores(Public Vehicle)",
    options: [
      { value: 12, label: "you travel more than 20,000 miles per year" },
      { value: 10, label: "you travel 15,000 to 20,000 miles per year" },
      { value: 6, label: "you travel 10,000 to 15,000 miles per year" },
      { value: 4, label: "you travel 1,000 to 10,000 miles per year" },
      { value: 2, label: "you travel less than 1,000 miles per year" },
      { value: 0, label: " you don't use a public vehicle" },
    ],
    handleChange: (selected, setScore) => setScore(selected.value),
  },
  {
    question: "Tally up your annual transportation scores(Flight)",
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
    handleChange: (selected, setScore) => setScore(selected.value),
  },
  {
    question: "Identify the amount of waste you recycle",
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
    handleChange: (selected, setScore) => setScore(selected.value),
  }
];

export default questions;
