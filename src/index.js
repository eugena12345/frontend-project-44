import readlineSync from 'readline-sync';
import greeting from './cli.js';

export const formulateQuestion = (expression) => `Question: ${expression} \nYour answer: `;

export const getAnswer = (questionText) => {
  const answer = readlineSync.question(questionText);
  return answer;
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
