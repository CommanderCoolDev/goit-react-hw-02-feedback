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
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((this.state.good / total) * 100) : 0;
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
        <p>total : {this.countTotalFeedback()}</p>
        <p>percentage: {this.countPositiveFeedbackPercentage()}%</p>
      </div>
    );
  }
}
