import { engine } from '../index.js';
import { getRandomNumber } from '../utils.js';

const isPrime = (number) => {
  if (number <= 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generalQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getRightAnswer = (number) => {
  const answer = isPrime(number) ? 'yes' : 'no';
  return answer;
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
