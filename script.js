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

//Strings and Template Literals

/*String manipulation
let str = "Hello";
console.log(str+", Mounika!");
console.log(str.charAt(4));
console.log(str.length);
str = "Hello Mounika";
console.log(str.substring(6,13));
*/

/*Template literals
age = 18;
console.log(`age : ${age+2}`);
console.log(`It is a multiline string
first line
second line 
age = ${age}`);
*/

//Decision Making Statements

/*If-else statements
let number = -2;
if(number > 0) console.log("Positive");
else if(number == 0) console.log("Zero");
else console.log("Negative");
*/

/*Switch statements
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


//Use Strict

/*Enable strict mode
"use strict";
//x = 10 give's ReferenceError: x is not defined
//vraibles must be declared
var x = 10
console.log(x);
*/

//Function Call and Its Definition

/*Function declaration
function sum(a, b){
    console.log(a+b);
}
sum(5,6);
*/

/*Function expression
function sum(a, b){
    return a+b;
}
x = sum(5,6);
console.log(x);
*/

//Passing Parameters to Functions

/*Passing arguments
function sum(a, b){
    console.log(a+b);
}
sum("5",6);
*/

/*Default parameters
function greetings(name = "sir"){
    console.log("Hello " + name);
}
greetings();
greetings("Mounika");
*/

//Return Statement

/*Returning values
function div(a, b){
    return a/b;
}
result = div(5,2);
console.log(result);
*/

/*Chaining function calls
function sum(a, b){
    return a+b;
}
function mul(a,b){
    console.log(a*b);
}
mul(sum(5,6), 7);//mul(11,7)
*/

