import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
  test('Должна принимать строку и возвращать строку с первый заглавной буквой и остальными строчными', () => {
    const testString = 'qweRTY';
    const resultString = 'Qwerty';

    expect(toCapitalizeFirstLetter(testString)).toEqual(resultString);
  });

  test('Должна вернуть пустую строку если была передана пустая строка', () => {
    expect(toCapitalizeFirstLetter('')).toEqual('');
  });
});
