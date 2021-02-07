/* динамическая типизация **/
let anyType: any = {};
anyType.a = 1;
anyType.a();
anyType();

/* нельзя обратиться к св-вам **/
let objType: object = {};
objType = { foo: 'bar' };
objType.foo = 'what';
objType.foo();
objType();

/* нельзя обратиться к св-вам **/
let unkType: unknown = {};
unkType = { foo: 'bar' };
unkType.foo = 'what';
unkType.foo();
unkType = () => {

};

/* только undefined (функция ничего не возвращает) **/
let voidType: void;
voidType = undefined;
