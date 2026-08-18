#!/usr/bin/env node

/**
 * Node.js CLI Calculator Application
 * Supports the following basic arithmetic operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 */

class Calculator {
  /**
   * Perform addition of two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Sum of a and b
   */
  add(a, b) {
    return a + b;
  }

  /**
   * Perform subtraction of two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Difference of a and b
   */
  subtract(a, b) {
    return a - b;
  }

  /**
   * Perform multiplication of two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Product of a and b
   */
  multiply(a, b) {
    return a * b;
  }

  /**
   * Perform division of two numbers
   * @param {number} a - First number (dividend)
   * @param {number} b - Second number (divisor)
   * @returns {number} Quotient of a divided by b
   * @throws {Error} If b is zero
   */
  divide(a, b) {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }
}

/**
 * Parse command line arguments and perform calculation
 */
function main() {
  const args = process.argv.slice(2);

  if (args.length < 3) {
    console.log('Usage: calculator <number1> <operation> <number2>');
    console.log('Operations: add, subtract, multiply, divide');
    console.log('Example: calculator 10 add 5');
    process.exit(1);
  }

  const num1 = parseFloat(args[0]);
  const operation = args[1].toLowerCase();
  const num2 = parseFloat(args[2]);

  if (isNaN(num1) || isNaN(num2)) {
    console.error('Error: Both arguments must be valid numbers');
    process.exit(1);
  }

  const calculator = new Calculator();
  let result;

  try {
    switch (operation) {
      case 'add':
      case '+':
        result = calculator.add(num1, num2);
        console.log(`${num1} + ${num2} = ${result}`);
        break;
      case 'subtract':
      case '-':
        result = calculator.subtract(num1, num2);
        console.log(`${num1} - ${num2} = ${result}`);
        break;
      case 'multiply':
      case '*':
        result = calculator.multiply(num1, num2);
        console.log(`${num1} * ${num2} = ${result}`);
        break;
      case 'divide':
      case '/':
        result = calculator.divide(num1, num2);
        console.log(`${num1} / ${num2} = ${result}`);
        break;
      default:
        console.error(`Error: Unknown operation '${operation}'`);
        console.log('Supported operations: add, subtract, multiply, divide');
        process.exit(1);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

module.exports = Calculator;

if (require.main === module) {
  main();
}
