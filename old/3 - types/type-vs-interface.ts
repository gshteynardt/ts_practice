/*  alias **/
type snb = string | number | boolean;

type acc = {
  name: string;
  age: number;
}

let user : acc;

//Object/Function
interface IPoint {
  x: number;
  y: number;
}

type TPoint = {
  x: number;
  y: number;
}

let p1: IPoint = {
  x: 1,
  y: 1,
}

interface ISetPoint {
  (x: number, y: number): void;
}

/* для конструктора используем new **/
type TSetPoint = new (x: number, y: number) => void;

//Extend
type PartialPoint = {
  x: number;
}

interface IPartialPoint {
  y: number;
}

/* расширяем существующий type**/
//type Point = PartialPoint & {y: number};
//type Point = PartialPoint & IPartialPoint;
//множественное наследование типов в области деларации переменных
interface Point extends PartialPoint, IPartialPoint {
  y: number;
}

let p2: Point = {
  x: 1, y: 1
}

// implements
//создаем контракт, должны выполнить этот интерсфейс
class BasePoint implements PartialPoint, IPartialPoint {
  public x: number = 10;
  public y: number = 10;
}

//декларативное слияние
const user3: TAcc = {
  name: 'Andrew',
  age: 32,
}

interface TAcc1 {
  name: string;
  info: {email: boolean};
}

interface TAcc2 {
  age: number;
  info: {salary: number};
}

interface IAccount extends TAcc1, TAcc2 {
  info: { email: boolean, salary: number }
}
