import {

  getRandomMathOperation, getRandomNumber, calculateExpression, engine,

} from '../index.js';

const calcGame = () => {
  const generalQuestion = 'What is the result of the expression?';

  const getGameConditions = () => {
    const firstNumber = getRandomNumber(100);
    const secondNumber = getRandomNumber(100);
    const randomMathOperation = getRandomMathOperation();
    const expressionForGame = `${firstNumber} ${randomMathOperation} ${secondNumber}`;
    const rightAnswer = calculateExpression(firstNumber, secondNumber, randomMathOperation);
    const conditions = { expressionForGame, rightAnswer };
    return conditions;
  };
  engine(generalQuestion, getGameConditions);
};
export default calcGame;
