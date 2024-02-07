import greeting from '../bin/cli.js';

import {

  getRandomNumber, getAnswer,
  formulateQuestion, sayCongratulations, checkResult,

} from '../src/index.js';

const getProgressionColl = (firstNumber, progressionStep) => {
  const progressionColl = [firstNumber];
  let actualNumber = firstNumber;
  for (let j = 1; j < 10; j += 1) {
    actualNumber += progressionStep;
    progressionColl.push(actualNumber);
  }
  return progressionColl;
};

const progressionGame = () => {
  const name = greeting();

  console.log('What number is missing in the progression?');

  for (let i = 1; i <= 3; i += 1) {
    const firstNumberOfProgression = getRandomNumber(20);
    const progressionStep = getRandomNumber(20);
    const progressionColl = getProgressionColl(firstNumberOfProgression, progressionStep);
    const secretItemIndex = getRandomNumber(9);
    const rightAnswer = progressionColl[secretItemIndex];
    progressionColl[secretItemIndex] = '..';
    const expressionForGame = progressionColl.join(' ');
    const question = formulateQuestion(expressionForGame);
    const answer = getAnswer(question);
    const checkedResult = checkResult(rightAnswer, answer, name);
    if (!checkedResult) {
      return;
    }
  }
  sayCongratulations(name);
};

export default progressionGame;
