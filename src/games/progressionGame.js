import { engine } from '../index.js';
import { getRandomNumber } from '../utils.js';

const getProgressionColl = (firstNumber, progressionStep) => {
  const progressionColl = [firstNumber];
  let actualNumber = firstNumber;
  const lengthOfCollection = 10;
  for (let j = 1; j < lengthOfCollection; j += 1) {
    actualNumber += progressionStep;
    progressionColl.push(actualNumber);
  }
  return progressionColl;
};
const generalQuestion = 'What number is missing in the progression?';
const getGameData = () => {
  const firstNumberOfProgression = getRandomNumber(20);
  const progressionStep = getRandomNumber(20);
  const progressionColl = getProgressionColl(firstNumberOfProgression, progressionStep);
  const secretItemIndex = getRandomNumber(progressionColl.length - 1);
  const rightAnswer = progressionColl[secretItemIndex];
  progressionColl[secretItemIndex] = '..';
  const expressionForGame = progressionColl.join(' ');
  return { expressionForGame, rightAnswer };
};

const progressionGame = () => {
  engine(generalQuestion, getGameData);
};

export default progressionGame;
