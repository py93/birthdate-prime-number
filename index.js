var readLineSync = require('readline-sync');
var chalk = require('chalk');

var userName = readLineSync.question(chalk.green("Please enter your name: "));

console.log(chalk.blue("\nWelcome, ", userName));

var userDOB = readLineSync.question(chalk.yellow.underline("\nPlease enter your DOB in format DD/MM: "));

var number = "";
function validateDate(userDOB)
{
  if( validateDateFormat(userDOB) && validateDateRange(userDOB))
  {
    return true;
  }
  else
  {
    return false;
  }
}

function validateDateFormat(userDOB)
{
  var userDD = userDOB.substring(0,2);
  var userMM = userDOB.substring(3,5);
  number = parseInt((userDD + userMM));
  
  if (isNaN(userDD) || isNaN(userMM) || isNaN(number))
  {
    
  }
  return true;
}

function validateDateRange(userDOB)
{
  var userDD = parseInt(userDOB.substring(0,2));
  var userMM = parseInt(userDOB.substring(3,5));

  if((userDD>31) || (userMM>12))
  {
    console.log(chalk.bold.red(userDOB,"is not a valid birthdate"));
    return false;
  }
  else if((userMM===2) && (userDD>29)){
    console.log(chalk.bold.red(userDOB,"is not a valid birthdate"));
    return false;
  }
  else if((userMM===4 || userMM===6 || userMM===9 || userMM===11) && (userDD>30))
  {
    console.log(chalk.bold.red(userDOB,"is not a valid birthdate"));
    return false;
  }
  return true;
}

function checkPrimeNumber(number)
{
  console.log(number);
  if (number < 4) {
    return true;
  } else if (number > 3) {
    for (var i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
  } 
  return true;
}

if(validateDate(userDOB)===true)
  {
    if(checkPrimeNumber(number)){
        console.log(chalk.bold.cyan("\nYour DOB is s PRIME NUMBER!! Share this on your social media! "));
    }
    else {
        console.log(chalk.bold.magenta("\nYour DOB is NOT a prime number"));
    }
  }