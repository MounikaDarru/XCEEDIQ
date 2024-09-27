////22nd Aug////

//Variables Declarations

/*Create variables
var firstName = "Mounika";
let lastName = "Darru";
const age = 20;
console.log(firstName,lastName+", I\'m "+age+" years old.");
*/

/*Variable scope
var Y = 10;
let X = 20;
const Z = 30;
function scope(){
    var y = 40;
    let x = 30;
    const z = 20;
    console.log(Y);
    console.log(X);
    console.log(Z);
    console.log(x);
    console.log(y);
    console.log(z);
}
scope();
//console.log(x); // ReferenceError: x is not defined
//console.log(y); // ReferenceError: y is not defined
//console.log(z); // ReferenceError: z is not defined
console.log(X);
console.log(Y);
console.log(Z);
*/

//Operators

/*Arithmetic operators
let a = 30;
let b = 10;
result1 = a*b - a+b % a/b;
result = ((a*b)-(a+b)) % (a/b); //300 - 40 => 260 % 3 => 2
console.log(result1);
console.log(result);
*/

/*Comparison operators
let a = 40;
let b = 20;
console.log(a==b, a!=b, a===b, a!==b, a<b, a>b, a<=b, a>=b);
*/

/*Logical operators
let a = 20;
let b = 30;
console.log(a<b && a!=b, a<b || a==b, !(a<b && a>b));
*/

//Data Types

/*Primitive data types
let varaible = 40;
console.log(typeof varaible);
varaible = "Hello";
console.log(typeof varaible);
varaible = true;
console.log(typeof varaible);
console.log(typeof null);
let x;
console.log(typeof x);
*/

/*Object data type
let x = {firstName : "Mounika", lastName : "Darru", age : 20, display : function(){return "Hello I\'m " + this.firstName + " " + this.lastName;}}
console.log(x.firstName, x.lastName, x.age, x.display())
x.age = 21;
console.log(x.age)
*/

//Type Conversion and Coercion

/*Explicit type conversion
let a = 20;
let b = "30";
let c = a>b;
console.log(Number(b));
console.log(String(20));
console.log(Boolean(c));
console.log(Number(true+20));
console.log(String(1.0));
console.log(String(5>6));
*/

/*Implicit type coercion
console.log("5"+5);
console.log("5"*5);
console.log(null-5);
console.log(undefined+5);
console.log(7+true);
*/

/*Strings and Template Literals

//String manipulation
let str = "Hello";
console.log(str+", Mounika!");
console.log(str.charAt(4));
console.log(str.length);
str = "Hello Mounika";
console.log(str.substring(6,13));

//Template literals
age = 18;
console.log(`age : ${age+2}`);
console.log(`It is a multiline string
first line
second line 
age = ${age}`);

*/

/*Decision Making Statements

//If-else statements
let number = -2;
if(number > 0) console.log("Positive");
else if(number == 0) console.log("Zero");
else console.log("Negative");

//Switch statements
let a = 5;
let b = 6;
let opr = "*";
switch(opr){
    case "+" : console.log(a+b);
               break;
    case "-" : console.log(a-b);
               break;
    case "*" : console.log(a*b);
               break;
    case "/" : console.log(a/b);
               break;
    case "%" : console.log(a%b);
               break;
}

*/

/*Use Strict

//Enable strict mode
"use strict";
//x = 10 give's ReferenceError: x is not defined
//vraibles must be declared
var x = 10
console.log(x);

*/

/*Function Call and Its Definition

//Function declaration
function sum(a, b){
    console.log(a+b);
}
sum(5,6);

//Function expression
function sum(a, b){
    return a+b;
}
x = sum(5,6);
console.log(x);

*/

/*Passing Parameters to Functions

//Passing arguments
function sum(a, b){
    console.log(a+b);
}
sum("5",6);

//Default parameters
function greetings(name = "sir"){
    console.log("Hello " + name);
}
greetings();
greetings("Mounika");

*/

/*Return Statement

//Returning values
function div(a, b){
    return a/b;
}
result = div(5,2);
console.log(result);

//Chaining function calls
function sum(a, b){
    return a+b;
}
function mul(a,b){
    console.log(a*b);
}
mul(sum(5,6), 7);//mul(11,7)

*/

////31st Aug////

/*Introduction to Arrays, Creating, Accessing - Arrays, Methods in Arrays

//Create an array of fruits and print the elements using a for loop.
const fruits = ['apple', 'banana', 'grape', 'orange', 'kiwi'];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//Access the third element of an array and print it.
console.log(fruits[2]);

//Find the length of an array and print it.
console.log(fruits.length);

*/

/*Operations: Add, Remove - push(), pop(), unshift(), shift() Methods in Arrays

//Add an element to the end of an array using the `push()` method.
const fruits = ['apple', 'banana', 'grape', 'orange', 'kiwi'];
fruits.push('mango');
console.log(fruits);

//Remove the last element from an array using the `pop()` method.
const fruits = ['apple', 'banana', 'grape', 'orange', 'kiwi'];
fruits.pop();
console.log(fruits);

//Add an element to the beginning of an array using the `unshift()` method.
const fruits = ['apple', 'banana', 'grape', 'orange', 'kiwi'];
fruits.unshift('mango');
console.log(fruits);

//Remove the first element from an array using the `shift()` method.
const fruits = ['apple', 'banana', 'grape', 'orange', 'kiwi'];
fruits.shift();
console.log(fruits);

*/

/* Introduction to Objects: Creating Objects with its Properties, Accessing Properties with dot (.) & square bracket [] representations, Appending New Properties to the Existing Objects using dot & bracket representations

//Create an object representing a person with properties like name, age, and city.
person = {name : "Mounika", age : 20, city : "vizag"};

//Access the person's name using both dot notation and square bracket notation.
console.log(person.name);
console.log(person['name']);

//Add a new property "occupation" to the person object using dot notation.
person.occupation = "Software Engineer";

//Add a new property "hobbies" to the person object using square bracket notation.
person['hobbies'] = "reading, writing, coding";

*/

/*Creating Objects with Properties & Methods, Calling Methods, Understanding about 'this' keyword, Coding Exercise in Objects Declaration, Properties & Methods Accessing

//Create a `Car` object with properties like `make`, `model`, and `year`. Add a method `drive()` that logs a message when called.
const car = {name : "ford", model : "mustang ", year : 2001, drive : function(){return "drive method is called"}}

//Create a `Calculator` object with methods like `add`, `subtract`, `multiply`, and `divide`. Call these methods with different numbers.
const cal = {add : function(a, b){return "SUM : "+(a+b)}, sub : function(a, b){return "DIFFERENCE : "+(a-b)}, mul : function(a, b){return "PRODUCT : "+(a*b)}, div : function(a, b){return "QUOFIENT : "+(a/b)}}
console.log(cal.add(2,3), cal.sub(5,3), cal.mul(2,2), cal.div(10,5));

*/


/*Iterations: For Loop, While Loop, Break & Continue Statement

// Iterate over an array of numbers using a `for` loop and print each number.
const num = [1, 2, 3, 4, 5]
for(i=0; i<num.length; i++){
    console.log(num[i]);
} 

//Iterate over an array of strings using a `while` loop and print each string.
const fruits = ['apple', 'banana', 'grape', 'orange', 'kiwi'];
var i=0;
while(i<fruits.length){
    console.log(fruits[i]);
    i++
} 

//Use a `for` loop to find the sum of all elements in an array.
const num = [1, 2, 3, 4, 5]
var sum = 0;
for(i=0; i<num.length; i++){
    sum = sum + num[i];
}
console.log(sum);

//Use a `while` loop to find the first even number in an array.
const num = [1, 2, 3, 4, 5]
var i = 0;
while(i<num.length){
    if(num[i]%2 == 0){
        console.log(num[i]);
        break;
    }
    i++;
}

//Use a `for` loop with a `break` statement to exit the loop when a certain condition is met.
const num = [1, 2, 3, 4, 5]
for(i=0; i<num.length; i++){
    if(num[i]%2 == 0){
        console.log(num[i]);
        break;
    }
}

//Use a `for` loop with a `continue` statement to skip certain elements in the array.
const num = [1, 2, 3, 4, 5]
for(i=0; i<num.length; i++){
    if(num[i] == 3){
        continue;
    }
    console.log(num[i]);
}

*/

/*Behind The Scenes: Variable Scope - Global vs Local Variables, Hoisting: Variables, Functions

//Demonstrate the difference between global and local variables using examples.
var x = "I am a global variable";
function scope(){
    var y = "I am a local variable";
    console.log(x, y);
}
scope();
console.log(x);
//console.log(y); This will throw an error because y is a local variable

//Explain the concept of hoisting and its impact on variable declaration and function calls.
Hoisting is a behavior that allows you to use functions and variables before they are formally declared in your code. 

//Write code to illustrate hoisting and its consequences.
//console.log(x); undefiend
var x = 42;
hoist();
function hoist(){
console.log("Hello");
}

*/

/*Hosting Coding Exercise, Understanding 'this' keyword, Normal Functions with Keyword 'this', Object's with Keyword 'this', Regular Functions vs Arrow Functions using Keyword 'this', Understanding about 'arguments' Keyword, Objects vs Primitives

//Create a function that demonstrates hoisting by calling a function before it's declared.
hoist();
function hoist(){
console.log("Hello");
}

//Explain how the `this` keyword behaves in different contexts (e.g., regular functions, object methods, arrow functions).
function RegularFunction(){
    console.log(this);
}
RegularFunction();

ArrowFunction=()=>
{
    console.log(this);
}
ArrowFunction();

const object={
    name : "hello",
    age : 20,
    add : console.log(this),
    ObjFunction : function(){
        console.log(this);
    }
}

object.ObjFunction();

//Write code to illustrate the difference between regular functions and arrow functions in terms of `this` binding.
function RegularFunction(){
    console.log(this);
}
RegularFunction();

ArrowFunction=()=>
{
    console.log(this);
}
ArrowFunction();

*/

////6th Sep////

// Behind the Scenes: Copying Objects
/*1. Shallow Copy:
- Create an object `person1` with properties `name` and `age`.
- Create a shallow copy `person2` of `person1`.
- Modify a property in `person2`.
- Check if the property in `person1` has also changed.

// Creating an object person1
const person1 = { name: 'Alice', age: 30 };

// Creating a shallow copy of person1
const person2 = { ...person1 };

// Modifying person2
person2.age = 35;

console.log(person1.age); // 30 (not affected by person2 change)
console.log(person2.age); // 35
*/
/*2. Deep Copy:
- Create a function `deepCopy` that recursively copies objects, including nested objects.
- Test `deepCopy` with an object containing nested objects.


function deepCopy(obj) {
    let copy = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        copy[key] = deepCopy(obj[key]);
      } else {
        copy[key] = obj[key];
      }
    }
    return copy;
  }
  
  const person3 = { name: 'Bob', details: { age: 40, address: '123 Street' } };
  const person4 = deepCopy(person3);
  
  // Modifying nested property
  person4.details.age = 45;
  
  console.log(person3.details.age); // 40 (not affected)
  console.log(person4.details.age); // 45
*/
  
// Data Structures and Operators
/*1. Restaurant Code:
- Create an object `restaurant` with properties like `name`, `location`, and `menu`.
- The `menu` property should be an array of objects, each representing a dish with `name`, `price`, and `description`.
- Use spread operators to create a new menu item.
- Use JSON.stringify to convert the restaurant object to JSON.

const restaurant = {
  name: 'The Food Place',
  location: 'Main Street',
  menu: [
    { name: 'Pizza', price: 12, description: 'Cheese and tomato' },
    { name: 'Burger', price: 8, description: 'Beef with lettuce' }
  ]
};

// Adding a new item using spread operator
const newDish = { ...restaurant.menu[0], name: 'Pasta', price: 10, description: 'Creamy sauce' };
restaurant.menu.push(newDish);

// Convert to JSON
const restaurantJSON = JSON.stringify(restaurant);
console.log(restaurantJSON);

*/
/*2. JSON Parameters:
- Create a function that takes a JSON object as a parameter and logs its properties.

const restaurant = {
    name: 'The Food Place',
    location: 'Main Street'
  };
  
  // Convert to JSON
  const restaurantJSON = JSON.stringify(restaurant);
function logProperties(jsonObj) {
    const obj = JSON.parse(jsonObj);
    for (let key in obj) {
      console.log(`${key}: ${obj[key]}`);
    }
  }
  
  logProperties(restaurantJSON);
*/

//Advance Functions
/*1. Default Parameters:
- Create a function that calculates the area of a rectangle, with default values for width and height.

function calculateArea(width = 5, height = 10) {
    return width * height;
  }
  
  console.log(calculateArea()); // 50
  console.log(calculateArea(7, 3)); // 21
  
*/
/*2. Pass by Value & Pass by Reference:
- Demonstrate the difference between passing primitive values and objects by value and reference.

// Pass by value (primitive)
let x = 10;
let y = x;
y = 20;
console.log(x); // 10 (x is unchanged)

// Pass by reference (object)
const obj1 = { val: 1 };
const obj2 = obj1;
obj2.val = 2;
console.log(obj1.val); // 2 (obj1 is changed)
*/
/*3. Callback Functions:
- Create a function that takes a callback function as an argument and calls it after a certain delay.

function delayedExecution(callback, delay) {
    setTimeout(callback, delay);
  }
  delayedExecution(() => console.log('Executed after delay'), 2000);
  
*/

//Functions Returning Functions
/*1. Creating Functions:
- Create a function that returns another function.
- Test the returned function.

function createMultiplier(factor) {
    return function (num) {
      return num * factor;
    };
  }
  
  const double = createMultiplier(2);
  console.log(double(5));  // 10

*/
/*2. call(), apply(), and bind() with Objects:
- Create an object representing a flight booking with passenger details.
- Use `call`, `apply`, and `bind` to call methods of the object with different contexts.

const flightBooking = {
    flightNumber: 'AI101',
    passengerName: 'John Doe',
    bookFlight() {
        console.log(`Booking flight ${this.flightNumber} for ${this.passengerName}`);
    }
};

const anotherBooking = {
    flightNumber: 'BA202',
    passengerName: 'Jane Smith'
};

// Using call
flightBooking.bookFlight.call(anotherBooking); // Output: Booking flight BA202 for Jane Smith

// Using apply
flightBooking.bookFlight.apply(anotherBooking); // Output: Booking flight BA202 for Jane Smith

// Using bind
const boundBooking = flightBooking.bookFlight.bind(anotherBooking);
boundBooking(); // Output: Booking flight BA202 for Jane Smith

*/

//IIFE, Closures, and Self-Executing Functions

/*1. IIFE:
- Create an IIFE that logs a message to the console.

(function() {
    console.log('This is an IIFE!');
})();// Output: This is an IIFE!

*/
/*2. Self-Executing Functions:
- Create a self-executing function that initializes a variable.

(function() {
    let counter = 0;
    console.log(`Counter initialized to ${counter}`);
})();// Output: Counter initialized to 0

*/
/*3. Closures:
- Demonstrate closure by creating a function that returns a function that remembers a value.

function outerFunction(outerValue) {
    return function innerFunction(innerValue) {
        console.log(`Outer: ${outerValue}, Inner: ${innerValue}`);
    };
}

const closureExample = outerFunction('Hello');
closureExample('World'); // Output: Outer: Hello, Inner: World

*/

//Strings

/*1. String Methods:
- Implement methods like `split`, `join`, `toUpperCase`, `toLowerCase`, `padStart`, `padEnd`, `slice`, `repeat`, `replace`, `trim`, `startsWith`, `endsWith`, and `includes`.

const str = "hello world";
console.log(str.split(" "));          // ["hello", "world"]
console.log(str.join("-"));           // "hello-world"
console.log(str.toUpperCase());       // "HELLO WORLD"
console.log(str.toLowerCase());       // "hello world"
console.log(str.padStart(15, "*"));   // "***hello world"
console.log(str.padEnd(15, "*"));     // "hello world***"
console.log(str.slice(0, 5));         // "hello"
console.log(str.repeat(2));           // "hello worldhello world"
console.log(str.replace("world", "everyone"));  // "hello everyone"
console.log(str.trim());              // "hello world"
console.log(str.startsWith("hello")); // true
console.log(str.endsWith("world"));   // true
console.log(str.includes("hello"));   // true

*/
/*2. Examples:
- Mask a credit card number using `padStart` and `padEnd`.
function maskCreditCard(cardNumber) {
    return cardNumber.slice(-4).padStart(cardNumber.length, '*');
}
console.log(maskCreditCard('1234567812345678')); // Output: ************5678


- Capitalize the first letter of each word in a sentence.
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeWords('hello world from code')); // Output: Hello World From Code

- Compare email addresses for equality.
function compareEmails(email1, email2) {
    return email1.toLowerCase().trim() === email2.toLowerCase().trim();
}
console.log(compareEmails('test@Example.com', 'test@example.com')); // Output: true

*/

//Booleans

/*1. Boolean Methods:
- Implement methods like `indexOf`, `lastIndexOf`, `startsWith`, `endsWith`, and `includes`.

const text = "JavaScript is awesome";

console.log(text.indexOf("is"));         // 11
console.log(text.lastIndexOf("is"));     // 11
console.log(text.startsWith("Java"));    // true
console.log(text.endsWith("awesome"));   // true
console.log(text.includes("awesome"));   // true

*/
/*2. Examples:
- Check if a string starts or ends with a specific substring.
const phrase = "The quick brown fox";
console.log(phrase.startsWith("The")); // true
console.log(phrase.endsWith("fox"));   // true

- Find the index of a substring within a string.
const sentence = "Learning JavaScript is fun";
console.log(sentence.indexOf("JavaScript")); // 9
console.log(sentence.lastIndexOf("fun"));    // 23

*/
