//Variables
var Sales = 1200;
var Sales = 9000;
const monthlyRent = 1500;
const yearlyRent = monthlyRent * 12;
console.log(yearlyRent);
console.log(Sales);
//Numbers,Names,Boolean
const myName = 'Kobe Shelby';
console.log(myName);

const firstName = "Sean";
const LastName = "Thompson";

const sentence = "Hello " + firstName + " " + LastName;
const sentenceWithTemplate = `Hello ${firstName} ${LastName}! How are you!`

console.log(sentence);
console.log(sentenceWithTemplate)
//Control Flow
const skyIsBlue = true;

if(skyIsBlue){
    console.log("The sky is blue!");
} else {
    console.log("The sky is ... not blue?");
}
//for-loops
let characters = 'hi lol'; 
let timesToRepeat = 10;
let answer = ' ';

for(let i = 0; i < timesToRepeat; i++){
  answer += characters;
}
  console.log(answer);

