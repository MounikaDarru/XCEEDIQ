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
