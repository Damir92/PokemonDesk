// Работа с простыми типами
// Напиши тип функции, конкатенирующей две строки

function concat(first: string, second: string): string {
  return `${first}${second}`;
}

concat('Hello ', 'World');

// Работа с интерфейсами
// Напиши интерфейс для описания следующих данных

interface MyInterface {
  howIDoIt: string;
  simeArray: (number | string)[];
  withData?: MyInterface[];
}

// eslint-disable-next-line
const MyHometask: MyInterface = {
  howIDoIt: 'I Do It Wel',
  simeArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
};

// Типизация функций, используя Generic
// В уроке про Generics мы написали интерфейс массива MyArray...
// Добавь типизацию для метода reduce

interface MyArray<T> {
  [n: number]: T;

  reduce<U>(fn: (prev: U, curr: T, currIndex: number) => U, initial: U): U;
}

const tsArr: MyArray<number> = [1, 2, 3, 4];

tsArr.reduce((i, j) => i + j, 0);
