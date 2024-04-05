
import React, { useState } from 'react'
import { quizbank } from './data';
import Quiz from './components/Quiz';
const App = () => {

  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [filterQuiz, setFilterQuiz] = useState('');
  const questionBank = quizbank;

  const filterQuestions = () => {
    console.log(topic, difficulty);
    const filteredQuestions = questionBank.filter(question => 
      question.topic === topic && question.difficulty === difficulty
    );
    
    setFilterQuiz(filteredQuestions);
    console.log(filterQuiz)
  };
  
  return (
    <div className='flex flex-col justify-center items-center bg-gray-100 gap-4 '>
      <div className=' flex flex-col items-center '>
        <div className='mb-10'>
          <h1 className='text-5xl font-bold'>Quiz Generator</h1>
        </div>
        <div>
          <div>
            <label htmlFor="topic" className='text-xl font-medium'>Choose Topics :</label>
            <select 
              name="topic" 
              id="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            >
              <option value="">Select Topic</option>
              <option value="Programming">Programming</option>
              <option value="OS">OS</option>
              <option value="DBMS">DBMS</option>
            </select>
          </div>
          <div>
            <label htmlFor="difficultyLevel" className='text-xl font-medium'>Choose Difficulty : </label>
            <select 
              name="difficultyLevel" 
              id="difficultyLevel"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="">Select Difficulty</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        </div>
      </div>
      <div className='flex flex-start'>
      {topic && difficulty && <button className='bg-green-300 p-3 rounded-md text-xl font-medium' onClick={filterQuestions}>Start Quiz</button>}
      </div>

      

     <div className='w-full bg-slate-300 p-12 items-center justify-center flex mt-16'>
        {filterQuiz && <Quiz questions={filterQuiz} />}
     </div>

    </div>
  
  )
}

export default App;
