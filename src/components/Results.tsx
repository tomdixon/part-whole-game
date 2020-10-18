import React from 'react';

export default function Results({
  results,
  outOf,
  onPlayAgainPressed,
}: {
  results: boolean[];
  outOf: number;
  onPlayAgainPressed: () => void;
}) {
  const score = results.reduce((acc, cur) => acc + (cur ? 1 : 0), 0);

  return (
    <div className="results-container">
      <div className="results-score">
        You scored <span className="numeral">{score}</span> out of{' '}
        <span className="numeral">{outOf}</span>
      </div>
      <div className="button results-play-again" onClick={onPlayAgainPressed}>
        Play Again
      </div>
    </div>
  );
}
