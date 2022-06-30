//This is a in-line comment

/* undefined, null, boolean, string, symbol, number, and object */
//The forecast in kelvin area is 293.
const kelvin = 293;
//The forecast is converted into celsius.
const celsius = kelvin - 273;
//celsius is converted into fahrenheit.
let Newton = celsius * (33 / 100);
Newton = Math.floor(Newton);
console.log(`The temperature is ${Newton} degrees Newton.`);
"I LOVE YOU TOO!".toLocaleLowerCase();
var myName = "I LOVE YOU TOO!".toLocaleLowerCase();
console.log(myName);

let Season = 'Winter';

switch(Season){
    case 'Summer':
        console.log('It\'s to hot out here!');
        break;
    case 'Fall':
        console.log('The leaves are falling everywhere');
        break;
    case 'Spring':
        console.log('Flowers re blooming');
        break;
    case 'Winter':
        console.log('It\'s to chilly out here');
        break;
        default:
            console.log('No Season');
        break;
}
