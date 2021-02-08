// type, interface< function, classes
//параметры для типа

type Info = { salary: number }

interface IAccount<UserInfo extends Info & { male: boolean }, UserId = string> {
  id: UserId;
  name: string;
  info: UserInfo;
}

let user: IAccount<{ male: boolean, salary: number }> = {
  id: 'qwscc6785vjnlfkjv',
  name: 'Andrew',
  info: {
    male: true,
    salary: 3000,
  }
}

let admin: IAccount<{salary: number, male: boolean, subjects: string[]}, number> = {
  id: 23212,
  name: 'Andrew',
  info: {
    salary: 3000,
    subjects: ['TS', 'JS'],
    male: true,
  }
}

let arr: Array<number>

interface IUser {
  name: string;
  age: number
}

interface IProduct {
  name: string;
  price: number;
}

interface ICartProduct extends IProduct {
  count: number;
}

type TState = {
  user: IUser,
  products: IProduct[],
  cart: ICartProduct[],
}

const state: TState = {
  user: {name: 'Adam', age: 32},
  products: [
    {name: "Iphone", price: 300}
  ],
  cart: [
    {name: "Iphone", price: 300, count: 2}
  ],
}

type Select<State> = <Field extends keyof State>(state: State, field: Field) => State[Field];
const select: Select<TState> = (storeState, field) => storeState[field];
const user1: IUser = select(state, 'user');
const products: IProduct[] = select(state, 'products');
const cart: ICartProduct[] = select(state, 'cart');

function getProperty<Obj, Key extends keyof Obj>(obj: Obj, key: Key) {
  return obj[key];
}

getProperty({a: 1}, 'a');
