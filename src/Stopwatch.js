import React, { useState, useRef } from 'react';
import AnalogStopwatch from './AnalogStopwatch';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    }
  };

  const stopTimer = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
      setIsRunning(false);
    }
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const getMilliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const seconds = Math.floor((time / 1000) % 60);
    const getSeconds = `0${seconds}`.slice(-2);
    const minutes = Math.floor((time / 60000) % 60);
    const getMinutes = `0${minutes}`.slice(-2);
    const hours = Math.floor((time / 3600000) % 24);
    const getHours = `0${hours}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}.${getMilliseconds}`;
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="text-4xl font-mono">{formatTime(time)}</div>
      <div className="space-x-4">
        <button onClick={startTimer} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Start</button>
        <button onClick={stopTimer} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Stop</button>
        <button onClick={resetTimer} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">Reset</button>
      </div>
      <AnalogStopwatch time={time} />
    </div>
  );
};

export default Stopwatch;
