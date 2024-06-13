import React from 'react';
import Stopwatch from './Stopwatch';
import AnalogStopwatch from './AnalogStopwatch';

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* <AnalogStopwatch/> */}
      <Stopwatch />
    </div>
  );
}

export default App;
