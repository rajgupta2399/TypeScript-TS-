"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = void 0;
let num = 12345645646;
console.log("num: ", num);
let num1 = 12344354355464566456636666456345655436n;
console.log("num1: ", num1);
let character = "Learning Management System";
console.log("Character String : ", character);
let isAvailable = true;
console.log(isAvailable);
let numberArray = [1, 2, 3, 4, 5];
let stringArray = ["a", "b", "c"];
numberArray.forEach((val) => val.toFixed(2));
stringArray.forEach((val) => val.includes("a"));
console.log("numberArray : ", numberArray);
console.log("stringArray : ", stringArray);
let value = undefined;
console.log(value);
let value1 = null;
console.log(value1);
let obj1 = {
    name: "Raj",
    age: 20,
};
let obj = {
    name: "Raj",
    age: 20,
};
let obj2 = { ...obj, techStack: "MERN" };
console.log(obj2);
let NumStringAnyValue;
NumStringAnyValue = 77;
NumStringAnyValue = "Raj";
function testAnyType(val) {
    console.log(val);
}
let MixArray = [1, "a", 2];
console.log(MixArray);
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "blue";
    Color["Blue"] = "blue";
})(Color || (exports.Color = Color = {}));
console.log(Color.Blue);
let color = Color.Red;
console.log(color);
//# sourceMappingURL=index.js.map