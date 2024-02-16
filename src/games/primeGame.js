import {
  getRandomNumber, getAllDivisors, engine,
} from '../index.js';

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
