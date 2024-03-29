import { engine } from '../index.js';
import { getRandomNumber } from '../utils.js';

const getGCD = (number1, number2) => {
  let a;
  let b;
  if (number1 >= number2) {
    a = number1;
    b = number2;
  } else {
    a = number2;
    b = number1;
  }
  if (a % b !== 0) {
    const r = a % b;
    return getGCD(b, r);
  }
  return b;
};

const generalQuestion = 'Find the greatest common divisor of given numbers.';
const getGameData = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const expressionForGame = `${firstNumber} ${secondNumber}`;
  const rightAnswer = getGCD(firstNumber, secondNumber);
  return { expressionForGame, rightAnswer };
};

const gcdGame = () => {
  engine(generalQuestion, getGameData);
};
export default gcdGame;
