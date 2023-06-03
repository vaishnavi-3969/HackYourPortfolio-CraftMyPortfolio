import React, { useEffect } from 'react';
import Confetti from 'react-confetti';

const CongratsAnimation = ({ onAnimationComplete }) => {
  useEffect(() => {
    const animationDuration = 5000;
    const timer = setTimeout(() => {
    //   onAnimationComplete();
    }, animationDuration);

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <div className="congrats-animation-container text-white text-center">
    <Confetti width={window.innerWidth} height={window.innerHeight} recycle={true} />
    <h2 className="text-4xl font-bold mb-4">Congratulations on creating your account!</h2>
    <p className="text-lg">Enjoy your journey on Craft My Portfolio!</p>
    <button className="mt-8 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
      <a href="/github" className="text-white">
        Proceed
      </a>
    </button>
  </div>
  );
};

export default CongratsAnimation;
