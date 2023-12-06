import React, { useState } from 'react';
import './Calculator.css'
import Button from '../Button/Button';
import * as math from 'mathjs';

function Calculator() {

  const [display, setDisplay] = useState("")

  const handleClick = (value) => {
    if (display.length < 10) {
      setDisplay((prevDisplay) => prevDisplay + value);

    } else {
      alert('You are exceeding the limit')
    }
  }

  const onClear = () => {
    setDisplay("")
  }
  const handleCalculate = () => {
    try {
      const result = math.evaluate(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  }

  return (
    <div className="main">
      <div className="container">
        <div className="display">
          {display}
        </div>
        <Button handleClick={handleClick} onClear={onClear} handleCalculate={handleCalculate} />
      </div>
    </div>
  )
}

export default Calculator