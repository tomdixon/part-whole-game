import {
  Orientation as PartAndWholeOrientation,
  orientationFromIndex,
} from '@/components/PartAndWhole';
import { randomInt } from './random';

export enum Blank {
  Whole,
  Part1,
  Part2,
}

export interface Question {
  orientation: PartAndWholeOrientation;
  blank: Blank;
  whole: number;
  part1: number;
  part2: number;
}

export function expectedAnswerForQuestion(question: Question): number {
  switch (question.blank) {
    case Blank.Whole:
      return question.whole;
    case Blank.Part1:
      return question.part1;
    case Blank.Part2:
      return question.part2;
  }
}

export function generateQuestion(previousQuestion?: Question): Question {
  const orientation = (() => {
    let orientation: PartAndWholeOrientation;
    while (true) {
      orientation = orientationFromIndex(randomInt(0, 3));
      if (!previousQuestion || orientation !== previousQuestion.orientation) {
        break;
      }
    }

    return orientation;
  })();

  const blank = (() => {
    let blank: Blank;
    while (true) {
      const diceRoll = randomInt(0, 2);
      blank =
        diceRoll === 0
          ? Blank.Whole
          : diceRoll === 1
          ? Blank.Part1
          : Blank.Part2;
      if (!previousQuestion || blank !== previousQuestion.blank) {
        break;
      }
    }

    return blank;
  })();

  const whole = randomInt(1, 9);
  const part1 = randomInt(0, whole);
  const part2 = whole - part1;

  return { orientation, blank, whole, part1, part2 };
}
