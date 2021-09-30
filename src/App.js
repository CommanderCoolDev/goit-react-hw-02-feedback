import React, { Component } from 'react';
import './App.css';

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = e => {
    this.setState(prevState => ({ [e]: prevState[e] + 1 }));
  };

  render() {
    return (
      <div>
        <h2>Please leave Feedback</h2>
        {Object.keys(this.state).map(i => (
          <button
            key={i}
            className=""
            onClick={() => {
              this.addFeedback(i);
            }}
          >
            {i}
          </button>
        ))}
        <h2>Statistics</h2>
        {Object.keys(this.state).map(i => (
          <p key={i}>
            {i}: {this.state[i]}
          </p>
        ))}
      </div>
    );
  }
}
