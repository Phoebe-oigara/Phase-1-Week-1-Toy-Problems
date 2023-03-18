// importing the readline module
const readline = require('readline');

//start of the function body
function generateStudentGrade() {
    
    //Input prompt and validation.

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });

      rl.question("Kindly input student marks between 0-100:", function(marks){
        marks = parseInt(marks);

        if (isNaN(marks) || marks<0 || marks>100) {
        console.log("Please enter valid marks (between 0-100)");
        rl.close();
        return;
    }

    //switch statement to loop through various inputs and compute grade.
    
    let grade;
    
    switch(true) {
        //grade if marks is greater than 79
        case marks>79:
            grade = "A";
            break;

        //grade if marks is between 60 and 79
        case marks>=60 && marks<=79:
            grade = "B";
            break;

        //grade if marks is between 49 and 59
        case marks>=49 && marks<=59:
            grade = "C";
            break;

        //case if marks is between 40 and 49 
        case marks>=40&& marks<49:
            grade = "D";
            break;

        //case if grade is less than 40
        default :
            grade = "E";

        }
    
    console.log(`Student grade is: ${grade}`);
    rl.close();
    });
}

 //function call.
 generateStudentGrade();