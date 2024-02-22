import { getRandomNumber, engine } from '../index.js';

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
    console.log(`a ${a}, b ${b}, r ${r}`);
    return getGCD(b, r);
  }
  console.log(`right answer ${b}`);
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
