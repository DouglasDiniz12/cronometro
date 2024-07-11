import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-12-08') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div className="time-segment" key={interval}>
        <span className="value">{timeLeft[interval]}</span>
        <span className="label">{interval}</span>
      </div>
     
    );
  });

  return (
    
    <div>
      <div className='Titulo'>
         <h1>Tuca League Cronômetro</h1>
      </div>
      <h1>Contagem regressiva para o rabaixamento do Sport Club Corinthians Paulista</h1>
      {timerComponents.length ? timerComponents : <span>Tempo Esgotado!</span>}
       
    </div>
  );
};

export default CountdownTimer;