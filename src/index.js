import readlineSync from 'readline-sync';
import greeting from './cli.js';

export const formulateQuestion = (expression) => `Question: ${expression} \nYour answer: `;

export const getAnswer = (questionText) => {
  const answer = readlineSync.question(questionText);
  return answer;
};

export const getRandomNumber = (maxNumber = 100, minNumber = 1) => {
  const result = Math.round(Math.random() * (maxNumber - minNumber) + minNumber);
  return result;
};

export const isEvenNumber = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export const getRandomMathOperation = () => {
  const optionsMathOperations = ['+', '-', '*'];
  const result = optionsMathOperations[getRandomNumber(optionsMathOperations.length - 1)];
  return result;
};

export const calculateExpression = (firstNumber, secondNumber, mathOperation) => {
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

export const sayCorrect = () => {
  console.log('Correct!');
};

export const sayItIsWrong = (userAnswer, rightAnswer, name) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
};

export const sayCongratulations = (name) => {
  console.log(`Congratulations, ${name}!`);
};

export const checkResult = (rightAnswer, answer, name) => {
  if (rightAnswer.toString() !== answer.toLocaleLowerCase()) {
    sayItIsWrong(answer, rightAnswer, name);
    return false;
  }
  sayCorrect();
  return true;
};

export const getAllDivisors = (num) => {
  const divisors = [];
  for (let i = 1; i * i <= num; i += 1) {
    if (num % i === 0) {
      const divisor = num / i;
      divisors.push(i);
      if (divisor !== i) {
        divisors.push(divisor);
      }
    }
  }
  divisors.sort((a, b) => a - b);
  return divisors;
};
const numberOfGames = 3;

export const engine = (generalQuestion, getGameData) => {
  const name = greeting();
  console.log(generalQuestion);
  for (let i = 1; i <= numberOfGames; i += 1) {
    const { expressionForGame, rightAnswer } = getGameData();
    const question = formulateQuestion(expressionForGame);
    const answer = getAnswer(question);
    const checkedResult = checkResult(rightAnswer, answer, name);
    if (!checkedResult) {
      return;
    }
  }
  sayCongratulations(name);
};
