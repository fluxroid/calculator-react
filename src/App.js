import React, { Component } from 'react';
import './App.css';

const numbers = [0,1,2,3,4,5,6,7,8,9]
const operations = ['+','-','x','/']

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
    this.handleInput = this.handleInput.bind(this);
    this.calculate = this.calculate.bind(this)
  }

  calculate = () =>
    this.setState({input: 420})

  handleInput = (e) =>
    this.setState({input: e.target.value})

  render() {
    const input = this.state.input;
    const equals = <Button value={'='} onClick={this.calculate}/>
    const numButtons = numbers.map((number) =>
      <div key={number.objectID}>
        <Button value={number} onClick={this.handleInput}/>
      </div>
      )
    const opButtons = operations.map((op) =>
      <div key={op.objectID}>
        <Button value={op} onClick={this.handleInput}/>
      </div>
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
        <span>
        {equals}
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
    value={value}
    >
    {value}
  </button>

const Output = ({ input }) =>
  <textarea value={input} /> 

export default App;
