import React from 'react';

export enum Orientation {
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
  Left = 'left',
}

export function orientationFromIndex(index: number) {
  switch (index) {
    case 0:
    default:
      return Orientation.Top;
    case 1:
      return Orientation.Right;
    case 2:
      return Orientation.Bottom;
    case 3:
      return Orientation.Left;
  }
}

const linesForOrientation = (orientation: Orientation) => {
  switch (orientation) {
    case Orientation.Top:
      return [
        [200, 50, 50, 250],
        [200, 50, 350, 250],
      ];
    case Orientation.Right:
      return [
        [50, 50, 350, 150],
        [50, 250, 350, 150],
      ];
    case Orientation.Bottom:
      return [
        [50, 50, 200, 250],
        [350, 50, 200, 250],
      ];
    case Orientation.Left:
      return [
        [50, 150, 350, 50],
        [50, 150, 350, 250],
      ];
  }
};

export default function PartAndWhole({
  orientation,
  whole,
  part1,
  part2,
}: {
  orientation: Orientation;
  whole: string;
  part1: string;
  part2: string;
}) {
  const lines = linesForOrientation(orientation);

  const wholeCorrectness =
    whole === 'correct' ? 'correct' : whole === 'incorrect' ? 'incorrect' : '';
  const part1Correctness =
    part1 === 'correct' ? 'correct' : part1 === 'incorrect' ? 'incorrect' : '';
  const part2Correctness =
    part2 === 'correct' ? 'correct' : part2 === 'incorrect' ? 'incorrect' : '';

  const wholeText = wholeCorrectness.length ? '' : whole;
  const part1Text = part1Correctness.length ? '' : part1;
  const part2Text = part2Correctness.length ? '' : part2;

  return (
    <div className="part-whole-container">
      <div
        className={`part-whole-box whole ${orientation} ${wholeCorrectness}`}
      >
        {wholeText}
      </div>
      <div
        className={`part-whole-box part1 ${orientation} ${part1Correctness}`}
      >
        {part1Text}
      </div>
      <div
        className={`part-whole-box part2 ${orientation} ${part2Correctness}`}
      >
        {part2Text}
      </div>

      <svg width="400" height="300">
        <line
          x1={lines[0][0]}
          y1={lines[0][1]}
          x2={lines[0][2]}
          y2={lines[0][3]}
          stroke="black"
          strokeWidth="5"
        />
        <line
          x1={lines[1][0]}
          y1={lines[1][1]}
          x2={lines[1][2]}
          y2={lines[1][3]}
          stroke="black"
          strokeWidth="5"
        />
      </svg>
    </div>
  );
}
