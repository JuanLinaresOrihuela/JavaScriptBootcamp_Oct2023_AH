// Heating/Cooling:
// Define two variables: actualTemp and a desiredTemp. Write conditionals to tell the heating & cooling 
// system what to do. Log one of these three things: Run A/C, Run heat, or Standby.

const actualTemp = 61;
const desiredTemp = 75;

if (actualTemp < desiredTemp) {
    console.log("Run heat");
} else if (actualTemp > desiredTemp){
    console.log("Run A/C");
} else {
    console.log("Standby");
}


// Extended Challenge:
// Start with two variables: tempCelsius (a number) and targetUnit (a string, either “C”, “F”, or “K”). 
// Write a switch statement that checks the targetUnit and logs the temperature converted to that unit. 
// Notes: K stands for Kelvin. C requires no conversion, print out the original temp.

let tempCelsius = 16;
let targetUnit = "C";

switch (targetUnit) {
    case "C":
        console.log (tempCelsius + " C");
        break;

    case "F":
        let tempFarenheit = (tempCelsius * 9/5) + 32;
        console.log (tempFarenheit+ " F");
        break;
    case "K":
        let tempKelvin = (tempCelsius + 273.15);
        console.log (tempKelvin + " K");
        break;
    default:
        console.log ("Please choose 'C', 'F', or 'K'.")
}