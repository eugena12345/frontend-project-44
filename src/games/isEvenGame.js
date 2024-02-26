import { engine } from '../index.js';
import { getRandomNumber, isEvenNumber } from '../utils.js';

const generalQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
const getGameData = () => {
  const randomNumber = getRandomNumber();
  const expressionForGame = `${randomNumber}`;
  const rightAnswer = (isEvenNumber(randomNumber)) ? 'yes' : 'no';
  return { expressionForGame, rightAnswer };
};

const isEvenGame = () => {
  engine(generalQuestion, getGameData);
};
export default isEvenGame;
