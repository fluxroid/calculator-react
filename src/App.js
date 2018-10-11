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
      line: '',
      error: false
    };
    this.handleInput = this.handleInput.bind(this);
    this.allClear = this.allClear.bind(this);
    this.getResult = this.getResult.bind(this);
    this.clearEntry = this.clearEntry.bind(this);
  }

  getResult = () => {
    const [result, error] = calculate(this.state.line);
    this.setState(
      { 
        line: String(result), 
        error: error
      });
    }

  handleInput = (e) =>
    !this.state.error && this.setState({
      input: e.target.value,
      line: this.state.line + e.target.value
    })
  
  allClear = () =>
    this.setState({
      input: '',
      line: '',
      error: false
    })

  clearEntry = () => {
    this.state.line.length > 0 && !isNaN(this.state.line.charAt(0)) &&
    this.setState({
    line: this.state.line.slice(0,-1)
    })
  }

  render() {
    const line = this.state.line;

    const row123 = numbers.slice(0,3).map((number) =>  
           <Button key={number.toString()} value={number} onClick={this.handleInput}/>
          )
    const row456 = numbers.slice(3,6).map((number) =>  
           <Button key={number.toString()} value={number} onClick={this.handleInput}/>
          )
    const row789 = numbers.slice(6,9).map((number) =>  
           <Button key={number.toString()} value={number} onClick={this.handleInput}/>
          )
    const row0 = numbers.slice(-1).map((number) =>  
           <Button key={number.toString()} value={number} onClick={this.handleInput}/>
          )    
    return (
      <div className="App">
      <div>
        <Output 
          input={line}
        />
      </div>
      <div className="power">
        <Button value={'AC'} onClick={this.allClear}/>
        <Button value={'CE'} onClick={this.clearEntry}/>
      </div>
      <div className="op">
        {operations.map((op) =>
          <Button key={op.toString()} value={op} onClick={this.handleInput}/>
        )}
        </div> 
        <div>
          {row123}
        </div>
        <div>
          {row456}
        </div>
        <div>
          {row789}
        </div>
        <div>
          {row0}
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
