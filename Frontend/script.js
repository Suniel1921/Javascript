//string in javascript
// Note : string are immutable in js

//trim
// let user = prompt('Enter your Name : ');
// let result = user.trim();
// console.log(user);
// console.log(result);

//toUpperCase()
// let names = 'sunil';
// let result = names.toUpperCase();
// console.log(result)

//toLowerCase
// let names = 'SUNIL SHARMA';
// let result = names.toLowerCase();
// console.log(result)

//****string method with arguments ****/

//argument is a some value that we pass to the method
//format
//stringName.method(arg)

//indexOf - retuns the first index of occurrence of some
//value in string . or gives -1 if not found.

// let str = 'ilovecoding';
// let result = str.indexOf('coding');
// console.log(result);

//****method chaining ****

//ex : - str.toUpperCase().trim();
// let msg = '     hello duniya    ';
// let newMsg = msg.trim().toUpperCase();
// console.log(newMsg);

//****slic method****
// let str = 'ilovecoding';
// let result = str.slice(1,5)
// console.log(result);

// let user = 'sunil sharma';
// //sunil sharma
// let result = user.slice(5 , 12);
// console.log(result)

//*** replce****/

// let str = 'ilovecoding';
// let result = str.replace('love', 'do');
// console.log(result)

//*** repeat****/

// let msg = 'sunil';
// let result = msg.repeat(2);
// console.log(result)

//PRACTICE QS
//1 QS. for the given string:
// let msg = 'help!';
// trim it and covert it to upperCase

// let msg = 'help!';
// let result = msg.trim().toUpperCase();
// console.log(result);

//2 QS. for the string -> let name ='sunil sharma', predit the out of the following
// let names ='sunil sharma';
// console.log(names.slice(6,12));  //output : sharma
// console.log(names.indexOf('su')); //output ; 0
// console.log(names.replace('sunil', 'anil')); // output: anil sharma

//3 QS. seperate the 'sharam' part in above string and replce 's' with 'a' in it

// let names = 'sunil sharma';
// let seperateNames = names.slice(6,12);
// console.log(seperateNames);
// let replaceName = seperateNames.replace('s', 'S');
// console.log(replaceName)

//---ARRAY DATASTRUCTURE :- LINEAR COLLECTION OF THINGS---

// let arr = ['anil', 'sunil', 'amit', 'biraj'];
// console.log(arr[0]); //output in console anil
// console.log(arr[1]); //output in console sunil
// console.log(arr[2]); //output in console amit
// console.log(arr[3]); //output in console biraj

// Accessing array element/value using loops
//**USING FOR LOOP**/
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

//**USING FOR EACH LOOP**/

//Array are mutable
// let fruits = ['apple', 'banana', 'orange'];
// fruits[0] = 'litchi';
// console.log(fruits)

// ***ARRAY METHODS***

//------PUSH------ // to add element in last position of array
// let fruits = ['banana', 'mango', 'apple'];
// fruits.push('banana');
// console.log(fruits);

//-----POP---- // to remove last element from array
// let fruits = ['banana', 'mango', 'apple'];
// fruits.pop();
// console.log(fruits);

// ----UNSHIFT----
// let fruits = ['banana', 'mango', 'apple'];
// fruits.unshift('litchi');
// console.log(fruits);

//----SHIFT----- // to remove first element from array
// let fruits = ['banana', 'mango', 'apple'];
// fruits.shift();
// console.log(fruits)

//*******PRACTICE QUESTION******

//QS:  FOR THE GIVEN START STATE OF AN ARRAY, CHANGE IT TO FINAL FORM USING METHOD
//START ['JANUARY', 'JULY', 'MARCH', 'AUGUST'];
//FINIAL ['JULY', 'JUN', 'MARCH', 'AUGUST'];

// let months = ['JANUARY', 'JULY', 'MARCH', 'AUGUST'];
// months.shift();
// months.shift();
// months.unshift('JUNE');
// months.unshift('JULY');
// console.log(months)

// ----INDEXOF-----

// let colors = ['red', 'black', 'orange'];
// let newColors = colors.indexOf('black');
// console.log(newColors);

// let colors = ['red', 'black', 'orange'];
// let user = prompt('Enter your Colors : ')
// let check = colors.indexOf(user);

// if(check !== -1){
//     console.log('you can choose good colors')
// }
// else{
//     console.log('you can choose bad colors')
// }

// ----INCLUDES-----
// let colors = ['red', 'black', 'orange'];
// let newColors = colors.includes('red');
// console.log(newColors)

// let colors = ['red', 'black', 'orange'];
// let user = prompt('Enter Your Colors : ');
// let check = colors.includes(user);
// if(check === true){
//     console.log('you choose right color');
// }
// else{
//     console.log('you choose bad colors')
// }

//----CONTACT----

// let num1 = [1, 2, 3, 4];
// let num2 = [5, 6, 7, 8];
// // let contcatNum1Num2 = num1.concat(num2); //or
// let contcatNum1Num2 = num2.concat(num1);
// console.log(contcatNum1Num2);

//---REVERSE----
// let num = [1, 2, 3, 4];
// num.reverse();
// console.log(num)

// let names = ['sunil', 'anil', 'logins'];
// names.reverse();
// console.log(names)

//----SLICE-----
// let colors = ['red', 'blue', 'green', 'yellow', 'pink'];
// // let copyColors = colors.slice(2);
// let copyColors = colors.slice(2,4);
// console.log(copyColors);

//----SPLICE----- // REMOVE / REPLACE / ADD ELEMENT
// splice (start, deleteCount, item0...itemN);
//its can change in orignal array

// let colors = ['red', 'blue', 'green', 'yellow', 'pink'];
// // let result = colors.splice(2); // 'green', 'yellow', 'pink'
// // let result = colors.splice(1, 1); // 'blue' delete blue form array
// let result = colors.splice(1, 2, 'orange', 'pineapple'); // 'blue', 'green' delete blue form array and 'orange', 'pineapple'
// console.log(result)
// console.log(colors)

// ---SORT----

// let days = ['monday' , 'friday', 'saturday'];
// days.sort();
// console.log(days)

// let numbers = [12, 45, 64, 3, 200, 1, 100, 453, 19834];
// numbers.sort();
// console.log(numbers)

// The sort method in JavaScript sorts elements as strings by default, which may not produce the correct result for numbers. To sort the numbers in ascending order, you should provide a compare function to the sort method that specifically compares numbers. Here's how you can do it:

// let numbers = [12, 45, 64, 3, 200, 1, 100, 453, 19834];
// numbers.sort(function(a, b){
//     return a - b;
// })
// console.log(numbers)

//****PRACTICE QS*****
// QS. FOR THE GIVEN START STATE OF AN ARRAY, CHANGE IT TO FINIAL FORM USING SPLIC

// START : ['january', 'july', 'march', 'august'];
// FINIAL : ['july', 'june', 'march', 'august'];

// let months = ['january', 'july', 'march', 'august'];
// months.splice(0, 2, 'july', 'june');
// console.log(months)

// QS: Return the index of the 'javascript' from the given array, if it was reversed.
//['c', 'c++','javascript', 'python', 'c#', 'sql'];

// let lang = ['c', 'c++', 'html','javascript', 'python', 'c#', 'sql'];
// let result = lang.reverse();
// let rs = result.indexOf('javascript');
// console.log(rs)
// console.log(lang)

//******ARRAY REFERANCE **** means address in memory

// console.log('name' == 'name'); true
// console.log('name' === 'name'); true

// console.log([1] == [1]); false
// console.log([1] === [1]); false

// console.log([] == []); false
// console.log([] === []) false

///*****NESTED ARRAY****
// let num = [[12,45] , [34, 45], [56, 67]];
// console.log(num[0][0])
// console.log(num[0][1]);

// console.log(num[1][0]);
// console.log(num[1][1]);

// console.log(num[2][0]);
// console.log(num[2][1]);

// for(let i=0; i<num.length; i++){
//     console.log(num[i])
// }

//practice question tictactoe

// let game = [['x', null, 'o'], [null, 'x', 'null'], ['o', null, 'x']]
// // game[0][1] = 'o';
// // game[1][0] = 'o';
// // game[1][2] = 'o';
// // game[2][1] = 'o';
// console.log(game)

//******************Loops**************** */

// pring odd number using loop
// for(let i=1; i<=15; i+=2){
//     console.log(i)
// }
// console.log('Backward')

// for(let i=15; i>=1; i-=2){
//     console.log(i)
// }

// pring even number using loop

// for(let i=2; i<=10; i+=2){
//     console.log(i)
// }

//Multiplication table of 5
// 5 X 1 = 5
// 5 X 2 = 10

// let num = 5;
// for(let i=1; i<=10; i++){
//     let result = num * i;
//     console.log(`${num} X ${i} = ${result}`)
// }

//project movies guess
// let movies = 'avatar';
// let guessMoviesName = prompt('Guess the Movies Name');

// if (movies !== guessMoviesName) {
//     console.log('Your guess: ' + guessMoviesName);
//     console.log('You are wrong!');
// } else {
//     console.log('Your guess: ' + guessMoviesName);
//     console.log('You are right!');
// }

//project movies guess using loop
// const favMovies = 'avatar';
// let guess = prompt('Guess my Fav Movies');

// while((guess != favMovies) && (guess != 'quite')){
//     guess = prompt('Wrong Guess. Please Try Again');

// }

// if(guess == favMovies){
//     console.log('contgrats !! you are right !');
// }
// else{
//     console.log('you quite !')
// }

//***for of loop */

// let fruits = ['nono', 'apple', 'banana'];

// for(fruit of fruits){
//     console.log(fruit)
// }

//*****OBJECT LITERALS*****/

// let empDetails = {
//     name : 'sunil',
//     age : 23,
//     address : 'Gaushala',
//     2 : 'random check'
// }
// // console.log(empDetails.name)
// // console.log(empDetails.age)
// // console.log(empDetails.address)
// console.log(empDetails['name'])
// console.log(empDetails[2])
// console.log(empDetails['2'])

//*******updating and adding value in object********

// let obj = {
//     name : 'sunil sharma',
//     age : 23,
//     address : 'gaushala',
// }

// //updating value in object
// obj.name = 'anil';
// obj.age = 20;
// //adding value in object
// obj.city = 'nawarjpur';
// obj.gender = 'Male'
// //deleting key and value from obj
// delete obj.gender;
// console.log(obj)

//*****OBJECTS OF OBJECTS*******

// let students = {
//     emp1: {
//         name : 'sunil sharma',
//         age : 34,
//         address : 'Gaushala',
//     },
//     emp2: {
//         name : 'anil sharma',
//         age : 20,
//         address : 'Kathmandu',
//     },
// }
// console.log(students.emp1)
// console.log(students.emp1.name)
// console.log(students.emp1.age)
// console.log(students.emp1.address)

// console.log(students.emp2)
// console.log(students.emp2.name)
// console.log(students.emp2.age)
// console.log(students.emp2.address)

///*****ARRAY OF OBJECTS*******/

// let students = [
//     {
//         name : 'sunil sharma',
//         grade : 'A',
//         city : 'Gaushala',
//     },
//     {
//         name : 'anil sharma',
//         grade : 'A+',
//         city : 'Kathmandu',
//     },
// ]

// console.log(students)
// console.log(students[0])
// console.log(students[0].name)
// console.log(students[0].grade)
// console.log(students[0].city)

// console.log(students[1])
// console.log(students[1].name)
// console.log(students[1].grade)
// console.log(students[1].city)

///*****MATCH OBJECTS*******/
//properties
// Math.PI
// Math.E
//methods
// Math.abs(n)
// Math.pow(a,b)
// Math.floor(n)
// Math.ceil(n)
// Math.random()

// console.log(Math.PI) //3.141592653589793
// console.log(Math.E) //2.718281828459045

//******RANDOM INTERGERS*******/
// let num = Math.random(); // step1:--> 0.13760109335727
// num = num*10; //step2: ---> 9.57147030883011
// num = Math.floor(num); //step3: ----> 5
// num = num + 1 // step 4 : ----> 6 //Note: here + 1 mean to generate 1 to 10
// // if we cannot use + 1 then they print only 1 to 9
// console.log(num);

//OR using this one line of code

// let oneLine = Math.floor(Math.random()*10 + 1);
// console.log(oneLine)

//Qs: Generate a random number between 1 to 100
// let random = Math.floor(Math.random()*100 + 1);
// console.log(random);

//Qs: Generate a random number between 1 to 5
// let num = Math.floor(Math.random() * 5 + 1);
// console.log(num)

//********Guessing Game*******

//QS : user enters a max number & then tries to guess a random generated number between 1 to max.

// let max = prompt('Enter the max number');

// const random = Math.floor(Math.random() * max + 1);

// let guess = prompt('Guess the number');

// while(true){
//     if(guess == 'quite'){
//         console.log('quiting game !!');
//         break;
//     }

//     if(guess == random){
//         console.log(`Contratualtion !! You Guess Right ! number is : ${random}`);
//         break;
//     }
//     else if(guess < random){
//         guess = prompt('Your guess is too small . please try again !')
//     }
//     else{
//         guess = prompt('Your Number is too large. Pleae try again !');
//     }

// }

//*****FUNCTION IN JS******

// function Hello (){
//     console.log('iam function 😁');
// }

// Hello(); // this is called function calling
// // Hello();
// // Hello();

// function adult (){
//     let age = 19;

//     if(age >=18){
//         console.log('you are adult !');
//     }
//     else{
//         console.log('Your are not adult !');
//     }

// }
// adult();

//QS: practice

// function rollDice(){
//     let random = Math.floor(Math.random() * 6 ) + 1;
//     console.log(random);
// }
// rollDice();
// rollDice();
// rollDice();
// rollDice();

//*****FUNCTION WITH ARGUMENTS******
//value we pass to the function

// function sum (a, b){
//     return  a + b ;

// }
// console.log(sum(4,5));

// function userInfo(name, age=45){
//     console.log(`Name is : ${name} & age : ${age}`);
// }

// userInfo('sunil', 20);
// userInfo('anil', 23);
// userInfo('logins');

//----PRACTICE QUESTION-----
//QS:- crate a function that gives us the avearage of 3 numbers

// function avearage (a, b, c){
//     return (a + b + c) / 3; //or
// //   console.log((a + b + c )/ 3);  //or
// }
// console.log(avearage(3,3,3)) // for return
// avearage(3,3,3) //for console

//----PRACTICE QUESTION-----
//QS :create a function that prints the multiplication table of a number

// function MulTable (){
//     // let num = 5;
//     let num = prompt('Enter the number For MulTable5')
//     for(let i=1; i<=10; i++){
//         console.log(`${num} X ${i} = ${num*i}`);
//     }
// }
// MulTable();

//******RETURN KEYWORD IN JS******

//practice question
//crate a function that return the sum of numbers from 1 to n

// function getSum (n){
//     let sum = 0;
//     for(let i=1; i<=n; i++){
//       //sum = sum+i;
//       sum+=i;
//     }
//      return sum;
// }

// console.log(getSum(10))

//****This Keyword in js ********
//'This' keyword refers to an object that is executing the current piece of code
// const student = {
//     name : 'sunil sharma',
//     age : 20,
//     eng : 98,
//     phy : 97,
//     math : 92,
//     getAvg(){
//         console.log(this)
//         let avg = (this.eng + this.phy + this.math) / 3
//         console.log(`${this.name} your avg mark is : ${avg}`)
//     }

// }
// student.getAvg();

//****try catch in js******/

// console.log('hello duniya')

// try {
//     console.log(a) // a is not define

// } catch (error) {
//     console.log(`caught an error ...${error}`)

// }

// console.log('hello')
// console.log('hello')

// ****Miscellaneous Topics*****
//arrow function
// const sum = (a,b)=>{
//     console.log(a + b );
// }
// sum(3,4)

// ****set Timeout*****
//setTimeout (function, timeout);

// console.log('hi there !');
// setTimeout(()=>{
//     console.log('iam settimeout 😉');

// }, 2000)
// console.log('swagat nahi karo ge hamra !');

// ****set Interval*****
//setInterval (function, timeout);
//clearInterval(id)

// let id = setInterval(()=>{
//     console.log('iam setinterval')
// }, 2000)
// console.log(id);
// clearInterval(id)

//*****Array method - higher order function*****

// let arr = [1,2,3,4,5];
// function print(el){
//     console.log(el);
// }
// arr.forEach(print);

//OR

// arr.forEach(function(el){
//     console.log(el)
// })

//accessing object value using forEach loop

// let obj = [
//     {
//     name : 'sunil shamra',
//     age : 32,
//     },
//     {
//     name : 'anil shamra',
//     age : 12,
//     },
//     {
//     name : 'logins',
//     age : 52,
//     },
// ]

// obj.forEach((el)=>{
//     console.log(el)
//     console.log(el.name);
//     console.log(el.age);
// })

//----MAP----
//let newArr = arr.map(some function definition or name)

// let num = [1,2,3,4,5,6];
// let mul = num.map((el)=>{
//     return el * 2;
// })

// console.log(mul)

//----FILTER----
//let newArr = arr.filter(some function definition or name)
// let num = [2,3,5,67,78,78];
// let filterData = num.filter((el)=>{
//     return el > 5;
// })
// console.log(filterData)

//----FILTER----
//arr.reduce (reduce function with 2 variables for (accumulator, element))

// let sum = [1,2,3,4].reduce((res, ele)=>(res+ele))
// console.log(sum)
// //or
// let sum2 = [1,2,3,4];
// let result = sum2.reduce((acc, ele)=>{
//     return acc * ele;
// })
// console.log(result)

//*****CALL STACK*****

// function hello(){
//     console.log('inside hello func')
//     console.log('Hello');
// }

// function demo(){
//     console.log('calling hello func')
//     hello();
// }

// console.log('calling demo func')
// demo();
// console.log('done Bye !!!')

// function one(){
//     return 1;
// }
// function two(){
//     return one() + one();
// }

// function three(){
//     let ans = two() + one();
//     console.log(ans)
// }
// three();

//****single thread in js*******

// let a = 23;
// console.log(a)
// let b = 56;
// console.log(b)
// console.log(a + b)

// setTimeout(() => {
//     console.log('hello duniya !');
// }, 2000);

// console.log('hello')

//****call back hell*******

// let h1 = document.querySelector('h1');

// setTimeout(()=>{
//     h1.style.color = 'green';
// },1000);
// setTimeout(()=>{
//     h1.style.color = 'red';
// },2000);
// setTimeout(()=>{
//     h1.style.color = 'blue';
// },3000);

// let h1 = document.querySelector('h1');

// function changeColor (colors, delay, nextColorChange){
//     setTimeout(() => {
//         h1.style.color = colors;
//         if(nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor('red', 1000,()=>{
//     changeColor('blue', 1000, ()=>{
//         changeColor('green', 1000, ()=>{
//             changeColor('yellow', 1000)
//         })
//     })
// })

//callback hell
// function savetoDb(data, success, failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed > 4){
//         success();
//     }
//     else{
//         failure();
//     }
// }

// savetoDb('sunil sharma', ()=>{
//     console.log('success: Your Data was Saved !');
//     savetoDb('anil sharma', ()=>{
//         console.log('success2 : Your Data Was Saved !');
//         savetoDb('logins', ()=>{
//             console.log('success3 : Your Data was saved !');
//         }, ()=>{
//             console.log('failure3 : Poor Connection! data not saved ')
//         })
//     }, ()=>{
//         console.log('failure : Poor Connection ! Data Not Saved !')
//     })

// },()=>{
//     console.log('failure : Poor Connection ! Data Not Saved!')

// })

//*******Promises in js*******
//The promise object represents the eventual completion (or failure) of an asynchrounous operation ans its resulting value.

function saveData() {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("Data was saved in DB");
      // console.log('data was saved in db')
    } else {
      reject("poor Connectoin ! Data not saved !");
      // console.log('poor connection ! data not saved')
    }
  });
}

// saveData('sunil sharma').then(()=>{
//     console.log('promise was resolved')
// })
// .catch(()=>{
//     console.log('promise was reject')
// })

//*****or*****

// let request = saveData('sunil sharma');
// request.then(()=>{
//     console.log('promse was resolved !');
// })
// .catch(()=>{
//     console.log('promise was reject')
// })

///****promise chaining*****
// saveData('sunil sharma').then(()=>{
//     console.log('data1 was saved ! promise was resolved');
//     saveData('anil sharma')
//     .then(()=>{
//         console.log('data2 was saved ! promise resolved')
//     })
// })
// .catch(()=>{
//     console.log('promise was reject')
// })
//******or improved version*****
// saveData('sunil sharma').then(()=>{
//     console.log('data1 was saved ! promise was resolved');
//     return saveData('anil sharma')
// })
// .then(()=>{
//     console.log('data2 was saved ! promise resolved')
// })
// .catch((error)=>{
//     console.log('promise was reject')
//     console.log('error of promise is :', error)
// })

//****async function*******
//async funtion return promise

// async function greet(){
//     // abc.abc()
//     throw 'poor connection !'
//     return 'Hello world '
// }

// greet()
// .then((result)=>{
//     console.log('promise was resolved !')
//     console.log('result was : ', result)
// })
// .catch((error)=>{
//     console.log('promise was rejected !',error)
// })

//****await keyword*******
//pauses the execution of its surroundings async function until the promise is settled (resolved or rejected)

// let h3 = document.querySelector('h3');

// function changeColor(colors, delay){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(() => {
//             h3.style.color = colors;
//             console.log(`color changed to : ${colors}`);
//             resolve("color changed");
//         }, delay);
//     });
// }

// async function demoColors(){
//     await changeColor('red', 1000);
//     await changeColor('blue', 1000);
//     await changeColor('green', 1000);
//     await changeColor('yellow', 1000);
// }
// demoColors();

//*******API******
//api list
//https://catfact.ninja/fact
//https://boredapi.com/api/activity
//https://dog.ceo/api/breeds/image/random

//fetch api using promise
// let url = 'https://catfact.ninja/fact';
// fetch(url)
// .then((res)=>{
//     console.log(res);
//     res.json().then((data)=>{
//         // console.log(data)
//         console.log(data.fact)
//     })
// })
// .catch((error)=>{
//     console.log(error)
// })

// fetching data using async await

// let url = 'https://catfact.ninja/fact';

// async function getFacts (){
//     try {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact)

//     let res2 = await fetch(url);
//     let data2 = await res2.json();
//     console.log(data2.fact)

//     } catch (error) {
//         console.log(error)
//     }

// }

// getFacts();

// let h3 = document.querySelector('h3');
// let btn = document.querySelector('button');

// // let url = 'https://catfact.ninja/fact';
// let url = 'https://dog.ceo/api/breeds/image/random';

// const getData = async () =>{
//    try {
//     let res = await fetch(url);
//     let data = await res.json();
//     // console.log(data.fact);
//     h3.innerText = data.fact
//    } catch (error) {
//     console.log(error);
//    }

// }
// btn.addEventListener('click', ()=>{
//     getData();
// })
// getData();


//get random dog iamge 

// let h3 = document.querySelector("h3");
// let btn = document.querySelector("button");

// let url = "https://dog.ceo/api/breeds/image/random";

// const getImg = async () => {
//   try {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.message);

//     //creating element
//     let img = document.createElement("img");
//     img.src = data.message;

//     h3.innerHTML = ""; // Clear any previous content in the <h3> element (not compulsory)
//     h3.append(img); // Append the <img> element to the <h3> element
//   } catch (error) {
//     console.log(error);
//   }
// };
// btn.addEventListener("click", () => {
//   getImg();
// });

// getImg();





//******fetching data using axios************

// let h3 = document.querySelector('h3');
// let btn = document.querySelector('button');

// let url = 'https://catfact.ninja/fact';


// async function getFacts(){
//     try {
//         let res = await axios.get(url);
//         // console.log(res.data.fact);
//         h3.innerText = res.data.fact
        
//     } catch (error) {
//         console.log(error);        
//     }
// }

// btn.addEventListener('click', function(){
//     getFacts();    
    
// })
// getFacts()

//or

let h3 = document.querySelector('h3');
let btn = document.querySelector('button');



btn.addEventListener('click', async ()=>{
    let fact = await getFacts();
    console.log(fact)
    h3.innerText = fact;

})

let url = 'https://catfact.ninja/fact';

async function getFacts(){
    try {
        let res = await axios.get(url);
        return res.data.fact;
        
    } catch (error) {
        console.log(error);
        return "No Fact Found !"
        
    }
}