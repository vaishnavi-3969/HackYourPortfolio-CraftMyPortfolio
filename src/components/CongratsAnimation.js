import React, { useEffect } from 'react';
import Confetti from 'react-confetti';

const CongratsAnimation = ({ onAnimationComplete }) => {
  useEffect(() => {
    const animationDuration = 5000; // Duration of the animation in milliseconds

    const timer = setTimeout(() => {
      onAnimationComplete();
    }, animationDuration);

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <div className="congrats-animation-container">
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        recycle={false} // Disables confetti recycling for continuous effect
      />
      <h2>Congratulations on creating your account!</h2>
      <p>Enjoy your journey on Craft My Portfolio!</p>
    </div>
  );
};

export default CongratsAnimation;
