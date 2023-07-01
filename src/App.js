import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState('');
  const [rotation, setRotation] = useState(0);

  console.log(spinning);

  useEffect(() => {
    if (spinning) {
      setRotation((rotation) => rotation + 30);

      setTimeout(() => {
        const prizes = ['Try Again', 'Prize 1', 'Prize 2', 'Prize 3', 'Prize 4', 'Prize 5', 'Prize 6', 'Prize 7'];
        const randomIndex = Math.floor(Math.random() * prizes.length);
        const selectedPrize = prizes[randomIndex];
        setResult(selectedPrize);
        setSpinning(false);
      }, 3000);
    }
  }, [spinning]);

  const spinWheel = () => {
    if (!spinning) {
      setResult('');
      setRotation(0);
      setTimeout(() => {
        setSpinning(true);
        setTimeout(() => {
          const prizes = ['Try Again', 'Prize 1', 'Prize 2', 'Prize 3', 'Prize 4', 'Prize 5', 'Prize 6', 'Prize 7'];
          const randomIndex = Math.floor(Math.random() * prizes.length);
          const selectedPrize = prizes[randomIndex];
          setResult(selectedPrize);
          setSpinning(false);
        }, 3000);
      }, 100);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Spin the Wheel</h1>
      </header>
      <main>
        <div className={`wheel ${spinning ? 'spinning' : ''}`} style={{ transform: `rotate(${rotation}deg)` }}>
          <div className="overlay" />
          <div className={`spinner ${spinning ? 'active' : ''}`} />
          <div className="wheel-text">{result}</div>
        </div>
        <button className="spin-button" onClick={spinWheel} disabled={spinning}>
          {spinning ? 'Spinning...' : 'Spin'}
        </button>
      </main>
    </div>
  );
};

export default App;
