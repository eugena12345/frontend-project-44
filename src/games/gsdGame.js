import {

  getRandomNumber, getAllDivisors, engine,

} from '../index.js';

const getMaxDivisor = (num1, num2) => {
  const num1Divisors = getAllDivisors(num1);
  const num2Divisors = getAllDivisors(num2);
  const result = [];
  for (let i = 0; i < num1Divisors.length; i += 1) {
    if (num2Divisors.includes(num1Divisors[i])) {
      result.push(num1Divisors[i]);
    }
  }
  result.sort((a, b) => a - b);
  return result[result.length - 1];
};

const generalQuestion = 'Find the greatest common divisor of given numbers.';
const getGameData = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const expressionForGame = `${firstNumber} ${secondNumber}`;
  const rightAnswer = getMaxDivisor(firstNumber, secondNumber);
  return { expressionForGame, rightAnswer };
};

const gsdGame = () => {
  engine(generalQuestion, getGameData);
};
export default gsdGame;
