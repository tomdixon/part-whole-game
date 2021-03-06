import * as Mousetrap from 'mousetrap';
import React, { useEffect } from 'react';

type Key = NumberKey | { type: 'delete' } | { type: 'enter' };

interface NumberKey {
  type: 'number';
  number: number;
}

const characterForKey = (key: Key) => {
  switch (key.type) {
    case 'delete':
      return '←';
    case 'enter':
      return '✓';
    case 'number':
      return `${key.number}`;
  }
};

const keyboard: Key[][] = [
  [
    { type: 'number', number: 1 },
    { type: 'number', number: 2 },
    { type: 'number', number: 3 },
    { type: 'number', number: 4 },
    { type: 'number', number: 5 },
    { type: 'delete' },
  ],
  [
    { type: 'number', number: 6 },
    { type: 'number', number: 7 },
    { type: 'number', number: 8 },
    { type: 'number', number: 9 },
    { type: 'number', number: 0 },
    { type: 'enter' },
  ],
];

export default function Keypad({
  keypadDisabled,
  enterDisabled,
  deleteDisabled,
  onKeyPress,
}: {
  keypadDisabled: boolean;
  enterDisabled: boolean;
  deleteDisabled: boolean;
  onKeyPress: (key: Key) => void;
}) {
  useEffect(() => {
    Mousetrap.bind(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], (e) => {
      if (!keypadDisabled) {
        onKeyPress({ type: 'number', number: parseInt(e.key) });
      }
    });

    Mousetrap.bind(['backspace'], () => {
      if (!keypadDisabled && !deleteDisabled) {
        onKeyPress({ type: 'delete' });
      }
    });

    Mousetrap.bind(['enter'], () => {
      if (!keypadDisabled && !enterDisabled) {
        onKeyPress({ type: 'enter' });
      }
    });

    return () => {
      Mousetrap.reset();
    };
  }, [keypadDisabled, enterDisabled, deleteDisabled, onKeyPress]);

  const rows = keyboard.map((keyRow, index) => {
    return (
      <div key={index} className="keypad-row">
        {keyRow.map((key, index) => {
          const disabled =
            keypadDisabled ||
            (key.type === 'enter' && enterDisabled) ||
            (key.type === 'delete' && deleteDisabled);
          return (
            <div
              key={index}
              className={`button keypad-key ${key.type} ${
                disabled ? 'disabled' : ''
              }`}
              onClick={!disabled ? () => onKeyPress(key) : undefined}
            >
              {characterForKey(key)}
            </div>
          );
        })}
      </div>
    );
  });

  return <div className="keypad-container">{rows}</div>;
}
