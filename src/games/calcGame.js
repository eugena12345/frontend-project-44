import {

  getRandomNumber, engine,

} from '../index.js';

const getRandomMathOperation = () => {
  const optionsMathOperations = ['+', '-', '*'];
  const result = optionsMathOperations[getRandomNumber((optionsMathOperations.length - 1), 0)];
  return result;
};

const calculateExpression = (firstNumber, secondNumber, mathOperation) => {
  switch (mathOperation) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return 'ask another question';
  }
};

const getGameData = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
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
