## TypeScript-TS

#### What is TypeScript..?
TypeScript is a programming language that is a strict syntactical superset of JavaScript, which means that any valid JavaScript code is also a valid TypeScript code. Thus, if one is familiar with JavaScript, picking up and using TypeScript is easier than learning a completely unrelated language.
TypeScript was developed and is still maintained by Microsoft, and it was originally released to the public in October 2012 with the primary goal of bringing the benefits of static typing to JavaScript. Fairly soon after its release, there was excitement around the new language, but there were also some criticisms that it lacked support in IDEs, build tools, and linters. However, over the years, TypeScript has grown in popularity and is an integral tool in many development environments.

#### What are the key differences between JS and TS...?
##### JavaScript
- Designed by Brendan Eich (Netscape) and released in 1995
- A lightweight scripting language that helps create dynamic web page content and is supported by all browsers
- Dynamic typing — weakly typed (no option for static typing)
- Best suited for small projects
Can be directly used in browsers
- JS libraries work by default

```
let a = 7;
a = "raj";
```

##### TypeScript
- Designed by Microsoft and released in 2012
- Superset of JavaScript developed to overcome code complexity for large projects (OOP language)
- Strongly typed — supports both static and dynamic typing
- Best suited for large web apps
- Converted into JavaScript code to be understandable for browsers (Transpiler)
- Since it’s a superset, all the JavaScript libraries and other JavaScript code works without any changes

``` 
let a1: number = 7;
a1 = 77;
```

#### How TypeScript Works...?
TypeScript is a statically-typed superset of JavaScript, which means that it extends JavaScript by introducing optional static typing and additional features while maintaining full compatibility with existing JavaScript code. TypeScript code is transpiled into plain JavaScript, which can then be executed in any modern web browser or Node.js environment.

The most significant difference between TypeScript and JavaScript is the support for static typing. In TypeScript, developers can explicitly declare the data types of variables, function parameters, and return values. For example, a variable can be declared with a specific type, such as number, string, boolean, array, or custom types defined through interfaces or classes.

#### Basic Types In JavaScript & TypeScript
- String
- Symbol
- Number 
- Null
- BigInt
- Boolean
- Object : Arrays & Obj
- Void
- Never
- Any
- Unknown
- Tuple
- Enums
- Type Inference
- Type Assertion
- Union types
- Type Narrowing
