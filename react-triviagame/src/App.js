import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Question from "./components/Question";

constructor(props) {
  super(props);
  this.state={
    counter: 0,
    questionId: 1,
    question: '',
    answerOptions: [],
    answer: '',
    answersCount: {
      nintendo: 0,
      microsoft: 0, 
      sony: 0
    },
    result: ''
  };
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Quiz</h2>
        </header>
        <Question content="What is your favorite food?" />
      </div>
    );
  }
}

export default App;
