import {
  getRandomNumber, engine,
} from '../index.js';

const getAllDivisors = (number) => {
  if (number === 1) {
    return [1];
  }
  const divisorsColl = [1, number];
  const iter = (divisor) => {
    if (divisor < number / 2) {
      if (number % divisor === 0) {
        const secondDivisor = number / divisor;
        if (!divisorsColl.includes(divisor)) {
          divisorsColl.push(divisor);
        }
        if (!divisorsColl.includes(secondDivisor)) {
          divisorsColl.push(secondDivisor);
        }
      }
      iter(divisor + 1);
    }
  };
  iter(2);
  divisorsColl.sort((a, b) => a - b);
  return divisorsColl;
};

const generalQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getRightAnswer = (number) => {
  const allNumberDivisor = getAllDivisors(number);
  return allNumberDivisor.length > 2 ? 'no' : 'yes';
};
const getGameData = () => {
  const firstNumber = getRandomNumber();
  const expressionForGame = `${firstNumber}`;
  const rightAnswer = getRightAnswer(firstNumber);
  return { expressionForGame, rightAnswer };
};

export default () => {
  engine(generalQuestion, getGameData);
};
