const QuestionCounter = ({questionsAnswered, totalQuestions}) => {
    return ( <div className="text-gray-700">
        questions answered: {questionsAnswered/totalQuestions}
    </div> );
}
 
export default QuestionCounter;