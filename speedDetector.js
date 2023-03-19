// importing the readline  module 

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//input prompt and validation

rl.question("Kindly enter the car speed: ", (speed)=>{

    if(isNaN(speed) || speed < 0){
        console.log("Invalid input");
        rl.close();
        return;
    }

    //initializing demerit points
    let demeritPoints = 0;

    //output if speed is less than or equal to 70
    if(speed <= 70) {
        console.log("Ok");

    // computation of demerit points if speed exceeds 70
    } else {
        demeritPoints = Math.floor((speed - 70) / 5);
        console.log(`Points: ${demeritPoints}`);
    }
    
    //output if points exceed 12
    if (demeritPoints > 12) {
        console.log("License suspended");
    }

    rl.close();
});