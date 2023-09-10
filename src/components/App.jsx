import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
// import Feedback from './Feedback/Feedback';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    const positiveFeedback = ((good / totalFeedback) * 100).toFixed();
    return (
      <div>
        <h1>Please leave feedback</h1>
        <button onClick={() => this.handleFeedback('good')}>Good</button>
        <button onClick={() => this.handleFeedback('neutral')}>Neutral</button>
        <button onClick={() => this.handleFeedback('bad')}>Bad</button>
        <h2>Statistics</h2>
        {totalFeedback > 0 ? (
          <Statistics
            feedback={this.state}
            positiveFeedback={positiveFeedback}
            totalFeedback={totalFeedback}
          />
        ) : (
          <p>Поки немає відгуків.</p>
        )}
      </div>
    );
  }
}
