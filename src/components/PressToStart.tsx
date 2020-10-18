import React from 'react';

export default function PressToStart({ onPress }: { onPress: () => void }) {
  return (
    <div className="press-to-start-container">
      <div onClick={onPress} className="button press-to-start">
        Start
      </div>
    </div>
  );
}
