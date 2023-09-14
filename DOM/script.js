// let smallImg = document.getElementsByClassName("imgs");
// for(let i=0; i<smallImg.length; i++){
//     console.dir(smallImg[i].src);
// } 



//changing class /id / src / href etc name using get/set attributes
// let img = document.querySelector('img');
// img.getAttribute('class');
// console.log(img)
// img.setAttribute('class', 'shamra')


// let links = document.querySelectorAll('.order a');
// for(let i=0; i<links.length; i++){
//     links[i].style.color = 'green'; 
//     links[i].style.textDecoration = 'none'; 

// }

// for (link of links){
//     link.style.color = 'red';
//     link.style.textDecoration = 'none'
// }


// let heading = document.querySelector('h1');
// console.log(heading)
// heading.classList;



// let heading = document.querySelector('h1');
// heading.classList.add('heading');


//practice question 

// let body = document.querySelector('body');
// let para = document.createElement('p');
// para.innerText = 'Hey iam red !';
// // para.style.color = 'red' //or
// para.classList.add('red');
// body.appendChild(para);
// body.append(para); add in the last
// body.prepend(para); // add in the fist 


// let body = document.querySelector('body');
// let newDiv = document.createElement('div');
// newDiv.style.border = '1px solid black';
// newDiv.style.backgroundColor = 'pink';
// body.append(newDiv)

// let newH1 = document.createElement('h1');
// newH1.innerText = 'iam ia div';
// newDiv.appendChild(newH1)

// let newPara = document.createElement('p');
// newPara.innerText = 'MEE TOO';
// newDiv.appendChild(newPara)



// DOM EVENT

//accessing single button
// let btn = document.querySelector('.btn');
// btn.onclick = function (){
//     alert('button was clicked !')
// }

//accessing multiple button

// let mulBtn = document.querySelectorAll('.btn');
// for (btn of mulBtn){
//     btn.onclick = funBtn;
// }

// function funBtn (){
//     alert(`Button was clicked`)
//     console.log(mulBtn)
// }


// onmouseenter // if you hover on button or any element then onmouseenter func triggred

// let btn = document.querySelectorAll('.btn'); // accessing all btn
// for(btns of btn){
//     btns.onmouseenter = function(){
//         alert('mouse hover on btn')
//     }
// }


//EVENT LISTNER IN JS
//addEventListener 
//element.addEventListener .(event, callback)

// let btn = document.querySelectorAll('.btn');

// for(btns of btn){
//     addEventListener('click', sayGoodMorning);
//     btns.addEventListener('dblclick', ()=>{
//         console.log('button was double clicked !!')
//     })
// }


// function sayHello (){
//     alert('Hello !!!');
// }

// function sayGoodMorning (){
//     alert('Good Morning !')
// }



// let colorChange = document.querySelector('#change');
// colorChange.addEventListener('mouseenter', ()=>{
//     colorChange.style.color = 'white';
//     colorChange.style.backgroundColor = 'red';
//     colorChange.style.border = 'none';
// })


//***********ACTIVITY*******small project color picker***/


// let btn = document.querySelector('#btn');
// let heading = document.querySelector('#heading');
// let box = document.querySelector('#box');

// btn.addEventListener('click', ()=>{
//     let randomColor = generateRandomColor(); //calling func
//     console.log(randomColor)
//     heading.innerText = randomColor; //inserting randomColor value in heaing
//     box.style.backgroundColor = randomColor; // inserting style in div/box

    
// })



// function generateRandomColor (){
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let colors = `rgb(${red}, ${green}, ${blue})`;
//     return colors;
// }





//event listner for elenent

// let div = document.querySelector('div');
// div.addEventListener('mouseenter', ()=>{
//     div.style.backgroundColor = 'blue';
// })

// div.addEventListener('mouseleave', function(){
//     div.style.backgroundColor = 'green';
// })

// let para = document.querySelector('p');
// para.addEventListener('click', ()=>{
//     // alert('iam para !!!');
//     para.classList.add('para')
// })


//this keyword in event listner

//when 'this' is used in a callback of event handler of something, it refers to that something.


// let btn = document.querySelector('button');
// let h4 = document.querySelector('h4');
// let h5 = document.querySelector('h5');

// function changeColor (){
//     alert('iam clicked !!');
//     this.style.backgroundColor = 'red';
//     this.style.color = 'white';
// }


// btn.addEventListener('click', changeColor);
// h4.addEventListener('click', changeColor);
// h5.addEventListener('mouseenter', changeColor);




//***********KEYBOARD EVENTS**********

// let keyText = document.querySelector('#text');
//********keydown*******
// keyText.addEventListener('keydown', function(event){
//     // console.log(event.target.value)
//     console.log('key was pressed !');
// })

//********keyup*******
// keyText.addEventListener('keyup', function(event){
//     console.log('key was released !');
// })

//********keypress*******
// keyText.addEventListener('keypress', function(event){
//     // console.log(event.target.value)
//     let result = event.target.value;
//     console.log(`you press ${result}`);
//     // console.log('key was press')
// })



// let keyText = document.querySelector('#text');
// let para = document.querySelector('#para');

// keyText.addEventListener('keypress', function(event){
//     let result = event.target.value;
//     console.log(result)
//     para.innerText =  `you press : ${result}`;
// })



//********form event*******

// let form = document.querySelector('form');
// form.addEventListener('submit', function(event){
//     event.preventDefault();
//     // alert('form submitted !!');
//     let input = document.querySelector('input');
//     console.dir(input)
//     console.log(input.value)
// })


// let form = document.querySelector('form');
// let name = document.querySelector('#name');
// let password = document.querySelector('#password');
// let para = document.querySelector('#para');

// form.addEventListener('submit', function(event){
//     event.preventDefault();
//     // let name = name.value;
//     // let password = password.value;
//     let result = `your name is : ${name.value} and password is : ${password.value}`;
//     para.innerText = result;
// })

//*****OR*****
// let form = document.querySelector('form');
// let para = document.querySelector('#para');

// form.addEventListener('submit', function(event){
//     event.preventDefault();
//     let name = this.elements[0];
//     let password = this.elements[1];
//     let result = `your name is : ${name.value} and password is : ${password.value}`;
//     para.innerText = result;
// })


//*****Practice Questions*****



// Qsl . Try out the following events in Event Listener on your own : mouseout 
// keypress Scroll load
// [Use MDN for help]















// Qs2. Create a button on the page using JavaScript. Add an event listener to the 
// butto that changes the button's color to green when it is clicked.


// let body = document.querySelector('body');
// let btn = document.createElement('button');
// btn.innerText = 'click Me'
// body.append(btn);


// btn.addEventListener('click', function(){
//     btn.classList.add('colorBtn');

// })









// Qs3. Create an input element on the page with a placeholder "enter your name" and a H2 
// heading on the page inside HTML.
// The purpose of this input element is to enter a user's name so it should only input letters 
// from a-z, A-Z and space (all other characters should not be detected).
// Whenever the user inputs their name, their input should be dynamically visible inside 
// the heading.
// [Please note that no other character apart from the allowed characters should be visible in 
// the heading]

let names = document.querySelector('#name');
let heading = document.querySelector('#heading');

names.addEventListener('keydown', function(event) {
   let keyCodes = event.keyCode;

   if ((keyCodes >= 65 && keyCodes <= 90) || (keyCodes >= 97 && keyCodes <= 122) || keyCodes === 8 || keyCodes === 13) {
      console.log('You are good to go!');
   } else {
      event.preventDefault(); // Prevent the input of characters outside A-Z and a-z, as well as other keys
      alert('Only Enter Alphabet !')
   }
});


names.addEventListener('input', function(){
    heading.textContent = names.value
})
























