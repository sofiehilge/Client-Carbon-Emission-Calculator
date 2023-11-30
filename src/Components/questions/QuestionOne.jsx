import Question from "../Question";
function QuestionOne({ handleChange }) {
  const question = {
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
  };
  return (
    <Question
      title={question.title}
      options={question.options}
      onChange={handleChange}
    />
  );
}

export default QuestionOne;
