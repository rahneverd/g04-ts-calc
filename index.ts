#! /usr/bin/env node

import inquirer from 'inquirer'

let answers = await inquirer.prompt([
  {
    name: 'firstNumber',
    message: 'Enter the first number?',
    type: 'number'
  },
  {
    name: 'secondNumber',
    message: 'Enter the second number?',
    type: 'number'
  },
  {
    name: 'operator',
    message: 'Select the operator?',
    type: 'list',
    choices: ['+', '-', '*', '/']
  }
])

// console.log(answers)

// operation 
let result: number
if (answers.operator === '+') {
  // Addition
  result = answers.firstNumber + answers.secondNumber
} else if (answers.operator === '-') {
  // Subtraction
  result = answers.firstNumber - answers.secondNumber
}else if (answers.operator === '*') {
  // Multiplication
  result = answers.firstNumber * answers.secondNumber
}else {
  // Division
  result = answers.firstNumber / answers.secondNumber
}
//  console.log("Result is ", result)

 console.log(`Result is ${result}`)



// let x = y

// let resp = {
//   firstNumber: 10,
//   secondNumber: 20,
//   operator: '+', 
// }