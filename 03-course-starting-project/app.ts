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
