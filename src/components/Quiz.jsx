import React, { useState } from 'react';

const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelection = (selectedOption) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestion.id]: selectedOption,
    }));
  };

  console.log("current Q", currentQuestion)
  console.log("current userAnswers", userAnswers)
  console.log("current quizCompleted", quizCompleted)


  const nextQuestion = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const calculateScore = () => {
    let score = 0;

    questions.forEach((question) => {
      if (userAnswers[question.id] === question.correctAnswer) {
        score += 1;
      }
    });

    return score;
  };

  return (
    <div>
      {quizCompleted ? (
        <div>
          <h2 className='text-3xl'>Quiz Completed</h2>
          <p>Your Score: {calculateScore()} / {questions.length}</p>
        </div>
      ) : (
        <div>
          <h2 className='text-3xl font-bold mb-4'>Quiz</h2>
          <p >Question {currentQuestionIndex + 1} of {questions.length}</p>
          <p className='text-xl font-medium mb-4'>{currentQuestion.question}</p>
          <ul>
            {currentQuestion.options.map((option, index) => (
              <li key={index}>
                <input
                  type="radio"
                  id={`${option}_${index}`}
                  name="answer"
                  value={option}
                  onChange={() => handleAnswerSelection(option)}
                  checked={userAnswers[currentQuestion.id] === option}
                />
                <label htmlFor={`${option}_${index}`}>{" "}{index + 1} {". "}{option}</label>
              </li>
            ))}
          </ul>
          {currentQuestionIndex + 1 < questions.length && (
            <button className="mt-4 bg-red-400 rounded-md p-2 font-medium" onClick={nextQuestion}>Next Question</button>
          )}
          {currentQuestionIndex + 1 === questions.length && (
            <button className="mt-4 bg-red-400 rounded-md p-2 font-medium" onClick={() => setQuizCompleted(true)}>Finish Quiz</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
