import React, { useState } from 'react'
import './App.css';

const App = () => {
  //Using useState for intialize the values
  const [input, setInput] = useState("");
  //Using useState for result
  const [result, setResult] = useState(0);

  //This is onChangeEvent Handlerer
  const handler = e => {
    setInput(e.target.value);
  }
  return (
    <div className="calculator">
      <input type="text" className="calculator-screen" value={input} name="input" onChange={handler} />
      <h4 className="calculator-result"> {result}</h4>
      <div className="calculator-keys">
        <button className="operator" onClick={() => setInput(input + '1')}>1</button>
        <button className="operator" onClick={() => setInput(input + '2')}>2</button>
        <button className="operator" onClick={() => setInput(input + '3')}>3</button>
        <button className="operator" onClick={() => setInput(input + '+')}>+</button>
        <button className="operator" onClick={() => setInput(input + '4')}>4</button>
        <button className="operator" onClick={() => setInput(input + '5')}>5</button>
        <button className="operator" onClick={() => setInput(input + '6')}>6</button>
        <button className="operator" onClick={() => setInput(input + '-')}>-</button>
        <button className="operator" onClick={() => setInput(input + '7')}>7</button>
        <button className="operator" onClick={() => setInput(input + '8')}>8</button>
        <button className="operator" onClick={() => setInput(input + '9')}>9</button>
        <button className="operator" onClick={() => setInput(input + '*')}>*</button>
        <button className="operator" onClick={() => setInput(input + '0')}>0</button>
        <button className="operator" onClick={() => setInput(input + '.')}>.</button>
        <button className="operator" onClick={() => { setInput(''); setResult(0) }}></button>
        {/* <button className="operator" onClick={() => setInput(input + '+/-')}>+/-</button> */}
        <button className="all-clear" onClick={() => { setInput(''); setResult(0) }}>AC</button>
        <button className="operator" onClick={() => setInput(input + '%')}>%</button>
        <button className="operator" onClick={() => { setInput(''); setResult(0) }}></button>
        <button className="result" onClick={() => setResult(eval(input))}>=</button>
      </div>
    </div>
  )
}

export default App