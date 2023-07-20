//to be replaced with actual API requests
import { faker } from '@faker-js/faker';

export default class TextService {
  static getLines(count, maxLineLenght) {
    const result = [];

    for (let i = 0; i < count; i++) {
      const temp = this.getLine(maxLineLenght - 1);
      result.push(temp)
    }

    return result;
  }

  static getLine(maxLineLenght) {
    let temp = "";

    while (temp.length < maxLineLenght) {
      let word = faker.random.word();
      if (temp.length + word.length > maxLineLenght) {
        break;
      }
      temp += `${word} `;
    }

    return temp.slice(0, -1);
  }
}