//import the readline module
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Input your salary and benefits (separated by a comma): ", (input) => {
    const [basicSalary, benefits] = input.split(","); 
   

    //getting the gross salary
    let gross = Number(basicSalary)+ Number(benefits);

    //calculating payee
    let payee;
    let personalRelief = 2400;
    let taxablePay= Number(gross)-Number(personalRelief);

    if(gross <= 24000) {
        payee = (taxablePay*0.1);
    }

    if(gross > 24000 && gross <= 32333) {
        payee = (taxablePay*0.25);
    }

    if(gross > 32333) {
        payee = (taxablePay*0.3);
    }

    //calculating NHIF Deductions

    let nhifDeduction;
    if (gross <= 5999) {
    nhifDeduction = 150;
    }
    else if (gross <= 7999) {
        nhifDeduction = 300;
    } 
    else if (gross <= 11999) {
        nhifDeduction = 400;
    } 
    else if (gross <= 14999) {
        nhifDeduction = 500;
    } 
    else if (gross <= 19999) {
        nhifDeduction = 600;
    } 
    else if (gross <= 24999) {
        nhifDeduction = 750;
    } 
    else if (gross <= 29999) {
        nhifDeduction = 850;
    } 
    else if (gross <= 34999) {
        nhifDeduction = 900;
    }   
    else if (gross <= 39999) {
        nhifDeduction = 950;
    } 
    else if (gross <= 44999) {
        nhifDeduction = 1000;
    } 
    else if (gross <= 49999) {
        nhifDeduction = 1100;
    } 
    else if (gross<= 59999) {
        nhifDeduction = 1200;
    } 
    else if (gross <= 69999) {
        nhifDeduction = 1300;
    } 
    else if (gross <= 79999) {
        nhifDeduction = 1400;
    } 
    else if (gross <= 89999) {
        nhifDeduction = 1500;
    } 
    else if (gross <= 99999) {
        nhifDeduction = 1600;
    } 
    else {
        nhifDeduction = 1700;
    }


    //calculating NSSF Deductions

    let nssfDeduction;

    if (gross <= 6000) {
        nssfDeduction = gross*0.06;
    }
    if(gross > 6000) {
        nssfDeduction = (gross*0.06)+((gross-6000)*0.06);


    }


    // Calculate net salary
  const netSalary = gross - nhifDeduction - nssfDeduction - payee;

   // Output results
   console.log(`Gross Salary: ${gross}`);
   console.log(`NHIF Deduction: ${nhifDeduction}`);
   console.log(`NSSF Deduction: ${nssfDeduction}`);
   console.log(`Payee (Tax): ${payee}`);
   console.log(`Net Salary: ${netSalary}`);

})

