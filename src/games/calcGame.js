import greeting from '../../bin/cli.js';

import {

  getRandomMathOperation, getRandomNumber, calculateExpression, getAnswer,
  formulateQuestion, sayCongratulations, checkResult,

} from '../index.js';

const calcGame = () => {
  const name = greeting();

  console.log('What is the result of the expression?');

  for (let i = 1; i <= 3; i += 1) {
    const firstNumber = getRandomNumber(100);
    const secondNumber = getRandomNumber(100);
    const randomMathOperation = getRandomMathOperation();
    const expressionForGame = `${firstNumber} ${randomMathOperation} ${secondNumber}`;
    const question = formulateQuestion(expressionForGame);
    const answer = getAnswer(question);
    const rightAnswer = calculateExpression(firstNumber, secondNumber, randomMathOperation);
    const checkedResult = checkResult(rightAnswer, answer, name);
    if (!checkedResult) {
      return;
    }
  }
  sayCongratulations(name);
};
export default calcGame;
