import React from 'react';

const Statistics = ({
  feedback: { good, neutral, bad },
  positiveFeedback,
  totalFeedback,
}) => {
  return (
    <ul>
      <li>
        <span>Good:</span>
        <span>{good}</span>
      </li>
      <li>
        <span>Neutral:</span>
        <span>{neutral}</span>
      </li>
      <li>
        <span>Bad:</span>
        <span>{bad}</span>
      </li>
      <li>
        <span>Total:</span>
        <span>{totalFeedback}</span>
      </li>
      <li>
        <span>Positive feedback:</span>
        <span>{positiveFeedback}% </span>
      </li>
    </ul>
  );
};

export default Statistics;
