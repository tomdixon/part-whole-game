import Keypad from '@/components/keypad/Keypad';
import PartAndWhole from '@/components/PartAndWhole';
import PressToStart from '@/components/PressToStart';
import Results from '@/components/Results';
import Title from '@/components/Title';
import {
  Blank,
  expectedAnswerForQuestion,
  generateQuestion,
  Question,
} from '@/util/questions';
import React, { useState } from 'react';

enum Phase {
  WaitingToStart,
  InProgress,
  Results,
}

const LEVELS = [9, 20, 99];

const QUESTIONS_PER_ROUND = 10;
const RESULT_FEEDBACK_MS = 2000;

export default function Game() {
  const [phase, setPhase] = useState(Phase.WaitingToStart);
  const [level, setLevel] = useState<0 | 1 | 2>(2);
  const [results, setResults] = useState<boolean[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question | undefined>(
    undefined,
  );
  const [currentGuess, setCurrentGuess] = useState('');
  const [showingFeedback, setShowingFeedback] = useState(false);

  const maxAnswerDigits = `${LEVELS[level]}`.length;

  function reset() {
    setPhase(Phase.WaitingToStart);
    setLevel(0);
    setResults([]);
    setCurrentQuestion(undefined);
    setCurrentGuess('');
  }

  function processGuess() {
    const expected = expectedAnswerForQuestion(currentQuestion);
    const answerCorrect = currentGuess === `${expected}`;
    const questionsAnswered = results.length + 1;

    setResults([...results, answerCorrect]);
    setShowingFeedback(true);
    setCurrentGuess(answerCorrect ? '🥳' : '🤔');

    setTimeout(() => {
      if (questionsAnswered < QUESTIONS_PER_ROUND) {
        setCurrentGuess('');
        setCurrentQuestion(generateQuestion(LEVELS[level], currentQuestion));
      } else {
        setPhase(Phase.Results);
      }

      setShowingFeedback(false);
    }, RESULT_FEEDBACK_MS);
  }

  return (
    <main>
      <Title />

      {phase === Phase.WaitingToStart && (
        <PressToStart
          onPress={(level) => {
            setLevel(level);
            setCurrentQuestion(generateQuestion(LEVELS[level], undefined));
            setPhase(Phase.InProgress);
          }}
        />
      )}

      {phase === Phase.InProgress && currentQuestion && (
        <>
          <PartAndWhole
            orientation={currentQuestion.orientation}
            whole={
              currentQuestion.blank === Blank.Whole
                ? currentGuess
                : `${currentQuestion.whole}`
            }
            part1={
              currentQuestion.blank === Blank.Part1
                ? currentGuess
                : `${currentQuestion.part1}`
            }
            part2={
              currentQuestion.blank === Blank.Part2
                ? currentGuess
                : `${currentQuestion.part2}`
            }
          />

          <Keypad
            keypadDisabled={showingFeedback}
            deleteDisabled={currentGuess.length === 0}
            enterDisabled={currentGuess.length === 0}
            onKeyPress={(key) => {
              switch (key.type) {
                case 'number': {
                  if (currentGuess.length < maxAnswerDigits) {
                    setCurrentGuess(`${currentGuess}${key.number}`);
                  }
                  break;
                }
                case 'delete': {
                  if (currentGuess.length > 0) {
                    setCurrentGuess(
                      currentGuess.slice(0, currentGuess.length - 1),
                    );
                  }
                  break;
                }
                case 'enter': {
                  if (currentGuess.length > 0) {
                    processGuess();
                  }
                  break;
                }
              }
            }}
          />
        </>
      )}

      {phase === Phase.Results && (
        <Results
          results={results}
          outOf={QUESTIONS_PER_ROUND}
          onPlayAgainPressed={reset}
        />
      )}
    </main>
  );
}
