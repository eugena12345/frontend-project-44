import {
  getRandomNumber, formulateQuestion, getAnswer, getAllDivisors,
  checkResult, sayCongratulations,
} from '../index.js';
import greeting from '../cli.js';

const getRightAnswer = (number) => {
  const allNumberDivisor = getAllDivisors(number);
  return allNumberDivisor.length > 2 ? 'no' : 'yes';
};

export default () => {
  const name = greeting();

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 1; i <= 3; i += 1) {
    const firstNumber = getRandomNumber(100);
    const expressionForGame = `${firstNumber}`;
    const question = formulateQuestion(expressionForGame);
    const answer = getAnswer(question);
    const rightAnswer = getRightAnswer(firstNumber);
    const checkedResult = checkResult(rightAnswer, answer, name);
    if (!checkedResult) {
      return;
    }
  }
  sayCongratulations(name);
};
