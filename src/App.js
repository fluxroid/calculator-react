import React, { Component } from 'react';
import calculate from './util.js';
import {numbers, operations} from './constants.js';
import './App.css';

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
    this.state = {
      input: '',
      line: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.allClear = this.allClear.bind(this);
    this.getResult = this.getResult.bind(this);
    this.clearEntry = this.clearEntry.bind(this);
  }

  getResult = () =>
    this.setState({line: calculate(this.state.line)})

  handleInput = (e) =>
    this.setState({
      input: e.target.value,
      line: this.state.line + e.target.value
    })
  
  allClear = () =>
    this.setState({
      input: '',
      line: ''
    })

  clearEntry = () =>
    this.state.line.length > 0 &&
    this.setState({
    line: this.state.line.slice(0,-1)
    })

  render() {
    const line = this.state.line;
 
    return (
      <div className="App">
      <div>
        <Output 
          input={line}
        />
      </div>
        <div>
          <Button value={'AC'} onClick={this.allClear}/>
          <Button value={'CE'} onClick={this.clearEntry}/>

        {numbers.map((number) =>
          <Button key={number.toString()} value={number} onClick={this.handleInput}/>
        )}
        </div>

        <div>
        {operations.map((op) =>
          <Button key={op.toString()} value={op} onClick={this.handleInput}/>
        )}
        </div>

        <div>
          <Button value={'='} onClick={this.getResult}/>
        </div>  

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

const Output = ({ 
  input
}) =>
  <textarea 
    value={input}
    readOnly
    /> 

export default App;
