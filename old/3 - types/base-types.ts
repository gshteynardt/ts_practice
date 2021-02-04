let num: number | undefined = 1;
num = NaN;
num = 0x0202;


let bool: boolean = true;
bool = false;

let str: string = `${num}`;
str = 'string';

let nill: null = null;
let und: undefined = undefined;

let bigNum: bigint = 4n;

const key1: unique symbol = Symbol('key1');
const key2: unique symbol = Symbol('key2');
const key3 = Symbol('key3');

let strictObj = {
  [key1]: 100,
  [key2]: 'TS',
  [key3]: 'React',
}

let v1 = strictObj[key1];
let v2 = strictObj[key2];
let v3 = strictObj[key3];
