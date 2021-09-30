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
  render() {
    return (
      <div>
        <h2>Please leave Feedback</h2>
        {Object.keys(this.state).map(i => (
          <button className="">{i}</button>
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
