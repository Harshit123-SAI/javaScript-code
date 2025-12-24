// Primitive 

// 7 types: String, Number ,Boolean , Null, undefined, Symbol, bigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id=== anotherId);



// Refernce (Non Primitive)

// Arrays, Objects, Functions

const heroes = ["shaktiman","naagraj","doga"];
let myObj = {
  name: "harshit",
  age:20,
}

const myFunction = function(){
  //console.log("Hello World");


  
}
//console.log(typeof myFunction);



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 //
 //Stack(Primitive) ,Heap(Non-Primitive)

 let myYoutubename = "harshitSaini"

 let anotherName = myYoutubename
 anotherName = "Saini"

console.log(myYoutubename);
 console.log(anotherName);

 let userOne = {
  email:"hs@gmail.com",
  upi: "user@sbi"
 }
 let userTwo= userOne
 userTwo.email="hc@gmail.com"

 console.log(userOne.email);
 console.log(userTwo.email);
 
 
 