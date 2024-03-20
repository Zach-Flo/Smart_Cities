import React, { useState, useEffect } from 'react';

const CountdownToNextHour: React.FC = () => {
  const [countdown, setCountdown] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const minutesLeft = 60 - now.getMinutes();
      const secondsLeft = 60 - now.getSeconds();
      const totalSecondsLeft = minutesLeft * 60 + secondsLeft;
      setCountdown(totalSecondsLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number): string => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  const hoursLeft = Math.floor(countdown / 3600);
  const minutesLeft = Math.floor((countdown % 3600) / 60);
  const secondsLeft = countdown % 60;

  return (

      <div className=' bg-emerald-400 bg-opacity-40 mt-1.5 uppercase tracking-widest font-bold text-white text-lg'>
        <span>Time Until Data Refresh: </span>
        <span>{formatTime(hoursLeft)}:</span>
        <span>{formatTime(minutesLeft)}:</span>
        <span>{formatTime(secondsLeft)}</span>
      </div>
  );
};

export default CountdownToNextHour;