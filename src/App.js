import React, { Component } from 'react';
import './App.css';

const numbers = [0,1,2,3,4,5,6,7,8,9]
const operations = ['+','-','x','/','=']

class App extends Component {
  render() {
    return (
      <Calculator />
    );
  }
}

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {input: ''};
  }

  render() {
    const input = this.state.input;
    const numButtons = numbers.map((number) =>
      <Button value={number} onClick={true}/>
      )
    const opButtons = operations.map((op) =>
      <Button value={op} onClick={true}/>
      )
    return (
      <div className="App">
      <div>
        <Output 
          input={input}
        />
      </div>
        <span>
        {numButtons}
        </span>   
        <span>
        {opButtons}
        </span>
      </div>

    );
  }
}

const Button = ({ 
  value, 
  onClick 
}) => 
  <button 
    type="button" 
    onClick={onClick}
    >
    {value}
  </button>

const Output = ({ input }) =>
  <textarea value={input} /> 

export default App;
