import React from 'react';

export default function PressToStart({
  onPress,
}: {
  onPress: (level: 0 | 1 | 2) => void;
}) {
  return (
    <div className="press-to-start-container">
      {[0, 1, 2].map((level: 0 | 1 | 2) => (
        <div
          key={level}
          className="button press-to-start-button"
          onClick={() => {
            onPress(level);
          }}
        >
          Level {level + 1}
        </div>
      ))}
    </div>
  );
}
