import randomNames from './random-names.json';
import uniqueRandomArray from 'unique-random-array';

export default  {
  all: randomNames,
  random: uniqueRandomArray(randomNames),
};



