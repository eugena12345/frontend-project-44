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
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

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
    if (rightAnswer.toString() !== answer.toLocaleLowerCase()) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
