// let a1: number = 1;
// a1 = 10;

// function add1(a: number, b: number): number {
//     return a + b; // type checking
// }

// const y = add1(1, a1);
// console.log(y);

// a1 = y;
// console.log(a1);

// Basic types

// Number
let num: number = 1234_564_5646;
console.log("num: ", num);

// BigInteger
let num1: bigint = 12344354355464566456636666456345655436n;
console.log("num1: ", num1);

// String
let character: string = "Learning Management System";
console.log("Character String : ", character);

// Boolean
let isAvailable: boolean = true;
console.log(isAvailable);

// Array
let numberArray: number[] = [1, 2, 3, 4, 5];
let stringArray: string[] = ["a", "b", "c"];
numberArray.forEach((val) => val.toFixed(2));
stringArray.forEach((val) => val.includes("a"));
console.log("numberArray : ", numberArray);
console.log("stringArray : ", stringArray);

// Undefined
let value: undefined = undefined;
console.log(value);

// Null
let value1: null = null;
console.log(value1);

// object
let obj1: object = {
  name: "Raj",
  age: 20,
};

let obj: { name: string; age: number } = {
  name: "Raj",
  age: 20,
};

// we can copt the first obj object and also add new value in the new object
let obj2 = { ...obj, techStack: "MERN" };
console.log(obj2);

// TypeScript Types : Any type
// Any -> we can store any type of value in this any type like number, string etc.
let NumStringAnyValue: any;
NumStringAnyValue = 77;
NumStringAnyValue = "Raj";

function testAnyType(val: any) {
  console.log(val);
}

// Array with different types => Tuple
// Tuples
let MixArray: [number, string, number] = [1, "a", 2];
console.log(MixArray);

// Enums => An enum is a special "class" that represents a group of constants (unchangeable variables).
// Pascal Case
export enum Color {
  Red = "red",
  Green = "blue",
  Blue = "blue",
}

console.log(Color.Blue);

let color: Color = Color.Red;
console.log(color);

// Unknown Type = "Not Sure"
let notSure: unknown = "a";

if (typeof notSure === "number") {
  notSure.toFixed(2);
} else if (typeof notSure === "string") {
  notSure.length;
}

// Never Type => No value Return
