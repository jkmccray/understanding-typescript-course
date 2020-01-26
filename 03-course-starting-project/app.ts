function add(n1: number, n2: number) {
    return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);

// ========== Objects ==========
// typescript can infer the object type and properties
const person = {
    name: "Max",
    age: 30,
    hobbies: ["Sports", "Cooking"]
}

let favoriteActivities: string[];
favoriteActivities = ["Crocheting"];
// can use 'any' instead of 'string' type, but we lose the benefit of types in ts

for (var hobby of person.hobbies) {
    // since the program knows each hobby is a string, we can invoke a string method on each hobby
    console.log(hobby.toUpperCase());
}

// ========== Tuples ==========
// js will treat tuples as a normal array, but in ts will check tuples prior to compiling
// example --> role: [2, 'author']
// typescript does not catch if the push method is used to change an element
// consider using a tuple to incorporate more strictness into your app regaring types
const person1 = {
    name: "Max",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [0, "Admin"]
}


// ========== Enum ==========
// enum keyword only exists in ts, not js
// enum is a custom type
// makes it easier to keep track of labels/numbers (compared to simply using variables)

// Instead of starting at 0, the numbers will start at 5 and increment from there
enum Role { ADMIN = 5, READ_ONLY, AUTHOR };

const person2 = {
    name: "Max",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
}

// ========== Any type ==========
// avoid whenever possible
// use if type is unknown and you can do runtime checks


// ========== Union Types ==========
function combine(input1: number | string, input2: number | string) {
    let combination;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        combination = input1 + input2;
    } else {
        combination = input1.toString() + input2.toString();
    }
    return combination;
}

const combinedAges = combine(40, 29);
const combinedNames = combine('Max', 'Anna')

console.log(combinedAges);
console.log(combinedNames);


// ========== Literal Types ==========
function combine1(
    input1: number | string,
    input2: number | string,
    resultConverstion: 'as-number' | 'as-text') {
    let combination;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConverstion === 'as-number') {
        combination = +input1 + +input2;
    } else {
        combination = input1.toString() + input2.toString();
    }
    return combination;
}

const combinedAges1 = combine1(53, '21', 'as-number');
const combinedNames1 = combine1('Don', 'Andi', 'as-text');


// ========== Type Aliases ==========
// custom types commonly used with union types
// cannot use a predefined word in js as a type alias (like 'Date')
type Combinable = number | string;

// can also provide an alias to a more complex object type
type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 };


// ========== Function Return Types and 'void' ==========
function add1(n1: number, n2: number) {
    return n1 + n2;
}

// don't set the type unless there is an explicit reason for it. Let ts infer the type

// in the case of a function that doesn't return anything:
function printResult(num: number) {
    console.log('Result: ' + num);
}

printResult(add(5,12));

// if we tried to console log printResult(add(5,12)), then we would get 'undefined' because we are trying to log something that does not exist
// undefined is also a type in ts (different from the type 'void' and not used very often)

// ========== Functions as Types ==========
// let combineValues;
// combineValues = add1;
// console.log(combineValues(8,8));

// note: if we were to reassign combineValues to a number, we would not get an error upon compiling, but we would get a run-time error

// How to create a function type:
let combineValues: (a: number, b: number) => number;
// 'combineValues should accept two numbers and produce a result that is a number
combineValues = add1;
// combineValues = printResult; --> the compiler would show an error


// ========== Function Types and Callbacks ==========
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

addAndHandle(10, 20, (result) => console.log(result));


// ========== The 'unknown' type ==========
// can store value of any type without getting errors
let userInput: unknown;

// 'any' is the most flexible type in ts
// 'uknown' is more restrictive. We have to check the type that is currently stored before setting a variable with a fixed type equal to a variable of type 'unkown'
// 'unknown' is better than 'any'


// ========== The 'never' type ==========
function generateError(message: string, code: number): never {
    throw{ message: message, errorCode: code ;}
}

// generateError('An error occurred!', 500); --> this works, but it throws an error that stops the program

// The return type of this function is not just void--it never returns anything, so the return type is 'never'
// ts will infer the function return type is 'void' but you can be more explicit about the intent of your code by assigning the return type as 'never'

