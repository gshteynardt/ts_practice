interface UserAccount {
  name: string,
  age: number,
}

let person1: UserAccount = UserAccount;

let userAccount = {
  name: 'Adam',
  age: 30,
}

let person2: typeof userAccount = {
  name: 'Andrew',
  age: 30,
}

class Point {
  public x = 10;
}

let p: Point = new Point();

let num: string = 'sd';
