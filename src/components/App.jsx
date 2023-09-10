import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import NotificationMessage from './NotificationMessage/NotificationMessage';

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
    const option = Object.keys(this.state);
    console.log(option);
    const totalFeedback = good + neutral + bad;
    const positiveFeedback = ((good / totalFeedback) * 100).toFixed();
    return (
      <div>
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          options={option}
          onLeaveFeedback={this.handleFeedback}
        />
        <h2>Statistics</h2>
        {totalFeedback > 0 ? (
          <Statistics
            feedback={this.state}
            positiveFeedback={positiveFeedback}
            totalFeedback={totalFeedback}
          />
        ) : (
          <NotificationMessage />
        )}
      </div>
    );
  }
}
