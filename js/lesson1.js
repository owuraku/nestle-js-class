"use strict";
// document.write('This is a javascript function from another file');

// // creating variables 
// // use keywords const, let or var 
// // let firstname;

// // console.log(firstname, firstName);


// // // variables + datatypes 
// // let firstName = 'Seth';
// // let age = 20;
// // console.log(typeof(age))


// // conditions

// // if conditions 
// // declare a variable age
// // and use the condition if age is greater than 18 run code 
// const age = prompt('What is your age');

// if (age > 18){
//     alert('You are old enough')
// } else if (age == 18 ){
//     alert('You are lucky papa!')
// } else {
//     alert('You are too young')
// }


// age > 18 ? alert('You are old enough') : age == 18 ?  alert('You are lucky papa!'): alert('You are too young');

// function sayHello(){
//     alert('Hello')
// }

// function sayHi(){
//     alert('hi')
// }

// const a = 2 
// sayHello()
// sayHi()

// if(age>18) {
//     alert('hi') 
//     sayHello()
// }


//get data from user
// const age = +prompt('What is your age?');
// const maritalStatus = prompt('Are you married? y/Y for yes, any other key for no');
// const numberOfChildren = +prompt('How many children do you have?');

// const isMarried = maritalStatus.toLowerCase() == 'y';
// const isAbove18 = age > 18;
// const hasMoreThan3Kids = numberOfChildren > 3;

// let bonus = 0;

// if (age > 18){
//     bonus=5;
// }

// if (isMarried){
//     bonus+= 10; // bonus = bonus + 10 
// }

// const moreThanThreeKids = (numberOfChildren - 3) > 0;
// if (moreThanThreeKids){
//     const kidsBonus = (numberOfChildren - 3) * 2;
//     bonus+=kidsBonus;
// }

// bonus = bonus > 30 ? 30 : bonus;

// if (isAbove18 && !isMarried){
//     bonus = 3;
// } else if (isAbove18 && isMarried){
//     bonus = 4;
// } else if (hasMoreThan3Kids && isMarried && isAbove18){
//     bonus = 10;
// } else if(!isAbove18){
//     bonus = 2;
// } else if (hasMoreThan3Kids && !isMarried){
//     bonus = 8
// } else {
//     bonus = 0
// }

// alert(`You are entitled to ${bonus}`)


// for(i=0;i<10;i++){
//     console.log(i)
// }

// const NUMBER_OF_TRIES = 3;
// const CORRECT_PIN = 8992;

// let userEnteredPIN = +prompt('Enter your PIN');
// let userAttempts = 1;


// solution 1
// function isPINWrong(){
//     return userEnteredPIN !== CORRECT_PIN; 
// }

// while(isPINWrong() && userAttempts < NUMBER_OF_TRIES){
//     userEnteredPIN = +prompt(`Wrong PIN. Please re-enter ${NUMBER_OF_TRIES - userAttempts} attempt(s) left`);
//     userAttempts++;
// }

// if(isPINWrong()){
//     alert('CARD BLOCKED !!')
// } else {
//     alert('PIN correct. Success!');
// }

// //solution 2
// for(userAttempts = 1; userAttempts <= NUMBER_OF_TRIES; userAttempts++){
//     if( userEnteredPIN === CORRECT_PIN){
//         alert('PIN correct. Success!');
//         break;
//     }

//     if(userAttempts === NUMBER_OF_TRIES){
//         break;
//     }
    
//     userEnteredPIN = +prompt(`Wrong PIN. Please re-enter ${NUMBER_OF_TRIES - userAttempts} attempt(s) left`);
// }

// if(userEnteredPIN !== CORRECT_PIN){
//     alert('CARD BLOCKED !!')
// }

//  function 

// syntax of functions

// function sayHello(name, age) {
//     alert(`Hello ${name}. You are ${age} year(s) old`);
// }

// sayHello('Owuraku',20);

// function changeBackgroundColour(colour="red"){
//     document.body.style.backgroundColor = colour;
// }

// function addTwoNumbers(num1, num2){
//     return num1 + num2;
// }
// const sum = addTwoNumbers(10,20);
// alert(sum);


// const anotherFunction = changeBackgroundColour;

// console.log(typeof anotherFunction)

// changeBackgroundColour();


// arrays 

// const listOfNumbers = [1,2,3,4,19,9.99,902];
// const mixedArray = [ 'me', {  name: 'Seth' }, [ 1, 3, 5], null, undefined, 0, true ]

// (function(){
//     alert('Hello');
// })()


//  arrays are 0 base indexed 
/**
 * listOfNames[4]
undefined
listOfNames[10]
undefined
listOfNames
(4) ['Seth', 'Owuraku', 'Kofi', 'Ama']
listOfNames.sort()
(4) ['Ama', 'Kofi', 'Owuraku', 'Seth']
listOfNames.filter(
    function(name){ 
        return name.includes('a');
    })
(2) ['Ama', 'Owuraku']
listOfNames.findIndex(
    function (name) {
        return name == 'Ama'
    }
)
0
listOfNames.findIndex(
    function (name) {
        return name == 'Akua'
    }
)
-1
listOfNames.includes('Seth')
true
listOfNames.map(
    function() {
)
VM5711:3 Uncaught SyntaxError: Unexpected token ')'
const h1 = listOfNames.map(
    function(name) {
        return `<h1>${name}</h1>`;
    }
)
undefined
document.write(h1)
Navigated to http://127.0.0.1:5500/lesson1.html
undefined
h1
(4) ['<h1>Ama</h1>', '<h1>Kofi</h1>', '<h1>Owuraku</h1>', '<h1>Seth</h1>']0: "<h1>Ama</h1>"1: "<h1>Kofi</h1>"2: "<h1>Owuraku</h1>"3: "<h1>Seth</h1>"length: 4[[Prototype]]: Array(0)
h1.forEach(function(n){ document.write(n)})
undefined
 */

// objects 
// const student = {
//     name: 'Seth',
//     level: 300,
//     subjects: [ 'English', 'Maths'],
//     isRegistered: true,
//     displayInfo : function() {
//         alert(`Student Name: ${this.name} Level: ${this.level} Registered: ${this.isRegistered}`);
//     }
// }

// // dot notation
// console.log(student.name);

// student['name'];

// const infoNeeded = 'level';
// console.log(student[infoNeeded]);


// function whatWasClicked(thisVariable){
//     console.log(thisVariable);
//     thisVariable.style.display = 'none';
// }


function display(){

}

const display = ( ) => {
    console.log('Hello');
}

display();

const displayName = name => {
    console.log(name)
}

const displayNames = (firstname, lastname) => {
    console.log(firstname, lastname)
}


const listOfNames = ['Seth', 'Owuraku', 'Kofi', 'Ama'];

listOfNames.filter(function(name){ 
    return name.includes('a');
 });

listOfNames.filter((name)=>{
    return name.includes('a');
});

listOfNames.filter(name=>{
    return name.includes('a');
});

listOfNames.filter(name=>name.includes('a'));

// function sumOfTwoNumbers(num1, num2){
//     return num1 + num2;
// }

// const sumOfTwoNumbers = (num1, num2) => {
//     return num1 + num2;
// }

const sumOfTwoNumbers = (num1, num2) => num1 + num2;


// const student = {
//     name: 'Seth',
//     level: 300,
//     subjects: [ 'English', 'Maths'],
//     isRegistered: true,
//     displayInfo() {
//         alert(`Student Name: ${this.name} Level: ${this.level} Registered: ${this.isRegistered}`);
//     }
// }

const student = {
    name: 'Seth',
    level: 300,
    subjects: [ 'English', 'Maths'],
    isRegistered: true,
    displayInfo: () => {
        alert(`Student Name: ${this.name} Level: ${this.level} Registered: ${this.isRegistered}`);
    }
}