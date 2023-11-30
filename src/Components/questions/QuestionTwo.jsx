import Question from "../Question";
function QuestionTwo({ handleChange }) {
  const question = {
    title: "Size of your house?",
    options: [
      { value: 10, label: "Large House" },
      { value: 7, label: "Medium-sized House" },
      { value: 4, label: "Small House" },
      { value: 2, label: "Apartment" },
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

export default QuestionTwo;
