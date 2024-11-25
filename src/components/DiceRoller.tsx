import { useState } from "react";
import "./dice.scss";

const DiceRoller = () => {
  const [dice, setDice] = useState<number[]>([]);
  const [numberOfDice, setNumberOfDice] = useState(1);
  const getRandomDice = () => {
    return Math.floor(Math.random() * 6 + 1);
  };

  const onRandomClick = () => {
    const myArray = [];
    for (let i = 0; i < numberOfDice; i++) {
      myArray.push(getRandomDice());
    }

    setDice(myArray);
  };

  return (
    <>
      <h2>DiceRoller</h2>
      <label>Number of Dice</label>
      <div className="input-button">
        <input
          type="number"
          min="1"
          max="12"
          value={numberOfDice}
          onChange={(e) => setNumberOfDice(+e.target.value)}
        />
        <button onClick={onRandomClick}>Roll</button>
      </div>
      <div className="dice-group">
        {dice.map((n, index) => (
          <div key={index}>
            {n === 1 && (
              <div className="dice first-face">
                <span className="dot"> </span>
              </div>
            )}
            {n === 2 && (
              <div className="dice second-face">
                <span className="dot"> </span>
                <span className="dot"> </span>
              </div>
            )}
            {n === 3 && (
              <div className="dice third-face">
                <span className="dot"> </span>
                <span className="dot"> </span>
                <span className="dot"> </span>
              </div>
            )}
            {n === 4 && (
              <div className="dice fourth-face">
                <div className="column">
                  <span className="dot"> </span>
                  <span className="dot"> </span>
                </div>
                <div className="column">
                  <span className="dot"> </span>
                  <span className="dot"> </span>
                </div>
              </div>
            )}
            {n === 5 && (
              <div className="dice fifth-face">
                <div className="column">
                  <span className="dot"> </span>
                  <span className="dot"> </span>
                </div>
                <div className="column">
                  <span className="dot"> </span>
                </div>
                <div className="column">
                  <span className="dot"> </span>
                  <span className="dot"> </span>
                </div>
              </div>
            )}
            {n === 6 && (
              <div className="dice sixth-face">
                <div className="column">
                  <span className="dot"> </span>
                  <span className="dot"> </span>
                  <span className="dot"> </span>
                </div>
                <div className="column">
                  <span className="dot"> </span>
                  <span className="dot"> </span>
                  <span className="dot"> </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default DiceRoller;
