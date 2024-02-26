export const getRandomNumber = (maxNumber = 100, minNumber = 1) => {
  const result = Math.round(Math.random() * (maxNumber - minNumber) + minNumber);
  return result;
};

export const isEvenNumber = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};
