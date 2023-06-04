import React from 'react';

const InteractiveQuizzes = () => {
  // Quiz or Challenge data
  const quizzes = [
    {
      question: 'What is the most famous pirate ship of all time?',
      options: ['Black Pearl', 'Queen Anne\'s Revenge', 'Flying Dutchman', 'Jolly Roger'],
      correctAnswer: 'Black Pearl',
    },
    {
      question: 'Which famous pirate was known as the "Queen of the Pirates"?',
      options: ['Anne Bonny', 'Mary Read', 'Grace O\'Malley', 'Ching Shih'],
      correctAnswer: 'Ching Shih',
    },
    // Add more quizzes or challenges as needed
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Interactive Quizzes</h2>
        {quizzes.map((quiz, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 mb-4">
            <h3 className="text-xl font-bold mb-2">{quiz.question}</h3>
            <ul className="grid grid-cols-2 gap-4">
              {quiz.options.map((option, optionIndex) => (
                <li key={optionIndex}>
                  <label className="flex items-center">
                    <input type="radio" name={`quiz-${index}`} value={option} className="mr-2" />
                    {option}
                  </label>
                </li>
              ))}
            </ul>
            <button className="bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors mt-4">
              Submit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveQuizzes;
