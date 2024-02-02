import readlineSync from 'readline-sync';
import greeting from './cli.js';

const isEvenGame = () => {
  const name = greeting();
  const isEvenNumber = (number) => {
    if (number % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const randomNumber = Math.ceil(Math.random() * 10000);
    const answer = readlineSync.question(`Question:${randomNumber} \nYour answer: `);
    const rightAnswer = isEvenNumber(randomNumber);
    if (rightAnswer !== answer.toLocaleLowerCase()) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
export default isEvenGame;
