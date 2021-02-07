import * as constants from "constants";

const user : {
  readonly firstName: string,
  age?: number,
} = {
  firstName: 'Andrew',
  age: 34,
}

user.firstName = 'Nikolay';

let keys1: keyof typeof user = 1;
let keys2: keyof typeof user = 'firstName';

/* keyof оператор позволяет захватывать имена ключей типов**/
let value1: (typeof user)[keyof typeof user] = 34;
let value2: (typeof user)['firstName' | 'age'] = true;


/* для описания объекта используем сигнатуру **/
let hashMap: { [id: string]: typeof user } = {
  'sdssdsds22223ded': user,
  'dcvfvf8776hhdjcd': user,
  'dfdfdfdvd334': user,
}

const user1 = hashMap['sdssdsds22223ded'];


/* arr - типизация ячейки массива **/
let arr: readonly number[] = [1, 2, 3, 4];
arr[100] = 12;

/* типизируем кол-во и каждую ячейку в отдельности **/
let tupleArr: readonly [string, number] = ['name', 1];
tupleArr[100] = 12;
tupleArr.push(14);

/* утиная типизация const **/
let str = 'const string' as const;
let a: typeof str = 1;

let arr1 = [1, 2, 3, 4] as const;
arr1.push(10);

let userData = {
  firstName: 'Sasha',
  age: 5,
} as const;

userData.age = 33;
