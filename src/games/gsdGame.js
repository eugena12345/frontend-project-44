import greeting from '../cli.js';

import {

  getRandomNumber, getAnswer,
  formulateQuestion, sayCongratulations, checkResult, getAllDivisors,

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

const gsdGame = () => {
  const name = greeting();

  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 1; i <= 3; i += 1) {
    const firstNumber = getRandomNumber(100);
    const secondNumber = getRandomNumber(100);
    const expressionForGame = `${firstNumber} ${secondNumber}`;
    const question = formulateQuestion(expressionForGame);
    const answer = getAnswer(question);
    const rightAnswer = getMaxDivisor(firstNumber, secondNumber);
    const checkedResult = checkResult(rightAnswer, answer, name);
    if (!checkedResult) {
      return;
    }
  }
  sayCongratulations(name);
};
export default gsdGame;
