/*function greeting(yourName){
    var result = "Hello"+" " + yourName;// string concatenation

    console.log(result);
}
var name = prompt("What is your name")
greeting(name);// calling a function*/
function addNumber(num1,num2){
    var result = num1+num2;
    console.log(result);
}
addNumber(11,16);

//while loop
var num = 0;
while(num<100){
    num+=1
    console.log(num);
}

//for loop
for (let num1 = 0; num1<100; num1++){
    console.log(num1);
}
//strings in JS
let fruits = 'banana';
let moreFruits = 'banana\napple\noranges';  //new line
console.log(moreFruits);
console.log(moreFruits.length);       //length of a string
console.log(moreFruits.indexOf('pp'));  //index of a character on a string
console.log(fruits.slice(1,6));       //string slicing
console.log(fruits.replace('ban','kan')); // replacing characters
console.log(fruits.toUpperCase(moreFruits));  // strings to upper case
console.log(fruits.toLowerCase(moreFruits));   // strings to lower case
console.log(fruits[2]);
console.log(fruits.split(""));  //split by a characters

//arrays in javascript

let fruit = ['banana','apple','oranges','pineapple'];
//or
fruit = new Array('banana','apple','oranges','pineapple');
console.log(fruit[2]);  // accessing values
fruit[0] = 'pawpaw';
console.log(fruit);

// looping through arrays

for(i = 0; i<= fruit.length; i++){
    console.log(fruit[i]);
}

// array common methods
console.log("to string\n", fruit.toString())  // converting array to string
console.log(fruit.join('&'))  // joining arrays by an ampersand
console.log(fruit.push('mapera'), fruit); // pushes a string to an array/appends
console.log(fruit.pop(),fruit);  // removes last element
console.log(fruit.shift(),fruit);  // removes first element
console.log(fruit.unshift('jamna'),fruit); // adds first item to an array

vegetables = new Array('asparagus','tomato','brocoli');
console.log(vegetables)

// combining fruit and vegetable array

let allGrocery = fruit.concat(vegetables);
console.log(allGrocery);

// reversing an array

console.log(allGrocery.reverse());

//sorting of values

console.log(allGrocery.sort());  // sort the array alphabetically.

// sorting with numbers

someNumbers = new Array(23,45,2,45,1,67,89,65,78,09,789,546,333,23,123);
console.log(someNumbers.sort(function(a,b){return a-b}));  // sorts the numbers in ascending order
console.log(someNumbers.sort(function(a,b){return b-a}));  // sorts the numbers in decending order

// adding elements to an empty array using loops
emptyArray = new Array();
for(num = 0; num<=10; num++){
    emptyArray.push(num);

}
console.log(emptyArray);

// OBJECTS IN JAVASCRIPT SAME WITH DICTIONARIES IN PYTHON

let student = {first: 'Evance',
 last:'Omolo', 
 age:21, 
 height:190,
 studentInfo:function(){
     return this.first + '\n' + this.last + '\n'+ this.age +'\n'+ this.height;
 }
};
console.log(student.first);
console.log(student.last);

student.first = 'Vesper';    // change value
console.log(student.first);

student.age++;
console.log(student.age);

console.log(student.studentInfo());

//CONDITIONALS AND THE CONTROL FLOWS(IF AND ELSE)
// if 18 -35 yrs is your target demographic
var age = 41;
if( (age>=18) && (age<=35) ){
    status = 'target audience';
    console.log(status);
}else{
    status = 'not my audience';
    console.log(status);
}

//switch statement
// differenciate between weekday and weekend
// let say day 0 --> Sunday
// and day 6 --> Saturday

switch(2) {
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday';     
} 
console.log(text);