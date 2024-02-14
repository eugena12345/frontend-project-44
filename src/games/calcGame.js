import {

  getRandomMathOperation, getRandomNumber, calculateExpression, engine,

} from '../index.js';

const getGameData = () => {
  const firstNumber = getRandomNumber(100);
  const secondNumber = getRandomNumber(100);
  const randomMathOperation = getRandomMathOperation();
  const expressionForGame = `${firstNumber} ${randomMathOperation} ${secondNumber}`;
  const rightAnswer = calculateExpression(firstNumber, secondNumber, randomMathOperation);
  const conditions = { expressionForGame, rightAnswer };
  return conditions;
};

const calcGame = () => {
  const generalQuestion = 'What is the result of the expression?';
  engine(generalQuestion, getGameData);
};
export default calcGame;
