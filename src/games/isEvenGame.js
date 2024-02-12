import greeting from '../cli.js';
import {
  getRandomNumber, formulateQuestion, getAnswer, checkResult, sayCongratulations,
} from '../index.js';

const isEvenNumber = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const isEvenGame = () => {
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const randomNumber = getRandomNumber(100);
    const expressionForGame = `${randomNumber}`;
    const question = formulateQuestion(expressionForGame);
    const answer = getAnswer(question);
    const rightAnswer = isEvenNumber(randomNumber);
    const checkedResult = checkResult(rightAnswer, answer, name);
    if (!checkedResult) {
      return;
    }
  }
  sayCongratulations(name);
};
export default isEvenGame;
