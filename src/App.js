import React, { Component } from 'react';
import './App.css';

const numbers = [1,2,3,4,5,6,7,8,9]

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
    return (
      <div className="App">
      <div>
        <Output 
          input={input}
        />
      </div>
        <p>Hello world!</p>
        
      </div>
    );
  }
}

const Output = ({ input }) =>
  <textarea value={input} /> 

const Grid = ({ })
export default App;
