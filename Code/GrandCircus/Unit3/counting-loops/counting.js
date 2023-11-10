// Skills: Loops

/* Counting Loops:
Use a for loop to log numbers from 1 to 10, then another for loop to count down, logging numbers from 10 to 1.*/

console.log ("For Loop, count up");
for (let i = 1; i <= 10; i++){
    console.log (i);
}

console.log ("For Loop, count down");
for (let i = 10; i >= 1; i--) {
    console.log (i);
}


// Repeat with a while loop.

console.log ("While Loop, count up");
let countUp = 1;

while (countUp <= 10) {
    console.log (countUp);
    countUp++;
}

console.log ("While Loop, count down");
let countDown = 10;

while (countDown >= 1) {
    console.log (countDown);
    countDown--;
}

// Repeat with a do while logo.

console.log ("Do While Loop, count down");

let doCountUp = 1;
do {
    console.log (doCountUp);
    doCountUp++;
} while (doCountUp <=10);


console.log ("Do While Loop, count up");

let doCountDown = 10;
do {
    console.log (doCountDown);
    doCountDown--;
} while (doCountDown >=1);


/* Create this array: const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. Use a for…of loop to loop through the array 
and log all the numbers. (Note: we’re not asking you to also count down on this one.)*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log ("For Loop to log each number")
for (const number of numbers){
    console.log(number);
}

// Extended Challenge:
/* Given any string, use a loop to add padding (extra spaces) to the front to make the string ten characters long. 
For example, given the string “planet”, log “    planet” (add four spaces), and for the string “headlamp”, log “  
headlamp” (add two spaces).*/

function addPadding(inputString) {
    const spacesToAdd = 10 - inputString.length;

    if (spacesToAdd > 0) {
        const padding = ' '.repeat(spacesToAdd);
        const paddedString = padding + inputString;
        console.log(paddedString);
    } else {
        console.log(inputString);
    }
}

// Example usage:
addPadding("planet");
addPadding("headlamp"); 