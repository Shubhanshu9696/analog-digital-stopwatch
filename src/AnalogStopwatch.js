// import React, { useState, useEffect } from 'react';

// const AnalogStopwatch = ({ time }) => {
//   const [secondsAngle, setSecondsAngle] = useState(0);
//   const [minutesAngle, setMinutesAngle] = useState(0);
//   const [hoursAngle, setHoursAngle] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const milliseconds = time % 1000;
//       const seconds = Math.floor((time / 1000) % 60);
//       const minutes = Math.floor((time / (1000 * 60)) % 60);
//       const hours = Math.floor((time / (1000 * 60 * 60)) % 12); // Assuming a 12-hour clock

//       const secondsAngle = ((seconds + (milliseconds / 1000)) / 60) * 360;
//       const minutesAngle = (minutes / 60) * 360 + (seconds / 60) * 6;
//       const hoursAngle = (hours / 12) * 360 + (minutes / 60) * 30;

//       setSecondsAngle(secondsAngle);
//       setMinutesAngle(minutesAngle);
//       setHoursAngle(hoursAngle);
//     }, 10);

//     return () => clearInterval(interval);
//   }, [time]);

//   const secondHandStyle = {
//     transform: `translate(-50%, -100%) rotate(${secondsAngle + 180}deg)`,
//   };

//   const minuteHandStyle = {
//     transform: `translate(-50%, -100%) rotate(${minutesAngle + 180}deg)`,
//   };

//   const hourHandStyle = {
//     transform: `translate(-50%, -100%) rotate(${hoursAngle + 180}deg)`,
//   };

//   return (
//     <div className="analog-stopwatch w-32 h-32 relative">
//       <div className="clock border-2 border-gray-400 rounded-full w-full h-full flex items-center justify-center">
//         <div className="hand second-hand absolute w-0.5 h-50% bg-red-500 origin-bottom" style={secondHandStyle}></div>
//         <div className="hand minute-hand absolute w-1 h-45% bg-gray-800 origin-bottom" style={minuteHandStyle}></div>
//         <div className="hand hour-hand absolute w-1.5 h-40% bg-gray-800 origin-bottom" style={hourHandStyle}></div>
//         <div className="center w-2 h-2 bg-gray-800 rounded-full absolute"></div>
//       </div>
//     </div>
//   );
// };

// export default AnalogStopwatch;



import React, { useState, useEffect } from 'react';

const AnalogStopwatch = ({ time }) => {
  const [secondsAngle, setSecondsAngle] = useState(0);
  const [minutesAngle, setMinutesAngle] = useState(0);
  const [hoursAngle, setHoursAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const milliseconds = time % 1000;
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / (1000 * 60)) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 12); // Assuming a 12-hour clock

      const secondsAngle = ((seconds + (milliseconds / 1000)) / 60) * 360;
      const minutesAngle = (minutes / 60) * 360 + (seconds / 60) * 6;
      const hoursAngle = (hours / 12) * 360 + (minutes / 60) * 30;

      setSecondsAngle(secondsAngle); 
      setMinutesAngle(minutesAngle); 
      setHoursAngle(hoursAngle); 
    }, 10);

    return () => clearInterval(interval);
  }, [time]);

  const secondHandStyle = {
    transform: `translate(-100%, -100%) rotate(${secondsAngle }deg)`,
  };

  const minuteHandStyle = {
    transform: `translate(-100%, -100%) rotate(${minutesAngle }deg)`,
  };

  const hourHandStyle = {
    transform: `translate(-100%, -100%) rotate(${hoursAngle}deg)`,
  };

  return (
    <div className="analog-stopwatch w-32 h-32 relative">
      <div className="clock border-2 border-gray-400 rounded-full w-full h-full flex items-center justify-center">
        <div className="hand second-hand absolute  w-0.5 h-50% bg-red-500 origin-center" style={secondHandStyle}></div>
        <div className="hand minute-hand absolute  w-1 h-45% bg-gray-800 origin-center" style={minuteHandStyle}></div>
        <div className="hand hour-hand absolute w-1.5 h-40% bg-gray-800 origin-center" style={hourHandStyle}></div>
        <div className="center w-2 h-2 bg-gray-800 rounded-full absolute"></div>
      </div>
    </div>
  );
};

export default AnalogStopwatch;

