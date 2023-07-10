import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [states, setStates] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [counters, setCounters] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  function toggle(index) {
    const newStates = [...states];
    newStates[index] = !newStates[index];

    const checkedToggles = newStates.filter((state) => state);
    if (checkedToggles.length >= 7 && !states[index]) {
      return; // Impede que o toggle seja marcado se o limite de 6 já foi atingido
    }

    setStates(newStates);
    setCounters((prevCounters) => {
      const newCounters = [...prevCounters];
      newCounters[index] = newStates[index]
        ? prevCounters[index] + 1
        : prevCounters[index] - 1;
      return newCounters;
    });
  }

  const countCheckedToggles = () => {
    const checkedToggles = states.filter((state) => state);
    return checkedToggles.length;
  };

  return (
    <>
      <div className="Favorite" onClick={() => toggle(0)} id="clicks">
        Counter:
        {states[0] ? <span>🌟</span> : <span>☆</span>}
      </div>
      <div className="Favorite" onClick={() => toggle(1)} id="clicks">
        Counter:
        {states[1] ? <span>🌟</span> : <span>☆</span>}
      </div>
      <div className="Favorite" onClick={() => toggle(2)} id="clicks">
        Counter:
        {states[2] ? <span>🌟</span> : <span>☆</span>}
      </div>
      <div className="Favorite" onClick={() => toggle(3)} id="clicks">
        Counter:
        {states[3] ? <span>🌟</span> : <span>☆</span>}
      </div>
      <div className="Favorite" onClick={() => toggle(4)} id="clicks">
        Counter:
        {states[4] ? <span>🌟</span> : <span>☆</span>}
      </div>
      <div className="Favorite" onClick={() => toggle(5)} id="clicks">
        Counter:
        {states[5] ? <span>🌟</span> : <span>☆</span>}
      </div>
      <div className="Favorite" onClick={() => toggle(6)} id="clicks">
        Counter:
        {states[6] ? <span>🌟</span> : <span>☆</span>}
      </div>
      <div className="Favorite" onClick={() => toggle(7)} id="clicks">
        Counter:
        {states[7] ? <span>🌟</span> : <span>☆</span>}
      </div>
      <p>Total de toggles marcados: {countCheckedToggles()}</p>
    </>
  );
}
