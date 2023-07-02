import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState('');

  const prizes = ['Try Again', 'Prize 1', 'Prize 2', 'Prize 3', 'Prize 4', 'Prize 5', 'Prize 6', 'Prize 7'];

  const spinWheel = () => {
    setResult('')
    setSpinning(true);
    setCount(count + 1);
   
    setTimeout(() => {
      setSpinning(false);
      setResult(count === 0 ? 'Try Again' : getRandomPrize());
    }, 2000);
  };
  

  const getRandomPrize = () => {
    const randomIndex = Math.floor(Math.random() * (prizes.length - 1)) + 1;
    return prizes[randomIndex];
  };

  return (
    <div className="App">
      <header>
        <h1>Spin the Wheel</h1>
      </header>
      <main>
        <div className={`wheel ${spinning ? 'spinning' : ''}`}>
          <div className="overlay" />
          <div className="wheel-container">
          <div className={`spinner ${spinning ? 'active' : ''}`} />
          <div className="wheel-text">{result}</div>
          </div>
       
        </div>
        <button className="spin-button" onClick={spinWheel} disabled={spinning}>
          {spinning ? 'Spinning...' : 'Spin'}
        </button>
      </main>
    </div>
  );
};

export default App;
