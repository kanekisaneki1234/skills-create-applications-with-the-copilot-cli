#!/usr/bin/env node

/**
 * Node.js CLI Calculator Application
 * Supports the following basic arithmetic operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * 
 * Supports the following advanced mathematical operations:
 * - Modulo (%)
 * - Exponentiation/Power (**)
 * - Square Root (√)
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

  /**
   * Perform modulo operation (remainder)
   * @param {number} a - First number (dividend)
   * @param {number} b - Second number (divisor)
   * @returns {number} Remainder of a divided by b
   * @throws {Error} If b is zero
   */
  modulo(a, b) {
    if (b === 0) {
      throw new Error('Cannot perform modulo with zero divisor');
    }
    return a % b;
  }

  /**
   * Perform exponentiation (power) operation
   * @param {number} base - The base number
   * @param {number} exponent - The exponent to raise the base to
   * @returns {number} Base raised to the exponent power
   */
  power(base, exponent) {
    return Math.pow(base, exponent);
  }

  /**
   * Calculate the square root of a number
   * @param {number} n - The number to find the square root of
   * @returns {number} The square root of n
   * @throws {Error} If n is negative
   */
  squareRoot(n) {
    if (n < 0) {
      throw new Error('Cannot calculate square root of a negative number');
    }
    return Math.sqrt(n);
  }
}

/**
 * Parse command line arguments and perform calculation
 */
function main() {
  const args = process.argv.slice(2);

  // Handle square root operation which takes only one argument
  if (args[0] === 'sqrt' || args[0] === '√') {
    if (args.length < 2) {
      console.log('Usage: calculator sqrt <number>');
      console.log('Example: calculator sqrt 16');
      process.exit(1);
    }
    
    const num = parseFloat(args[1]);
    if (isNaN(num)) {
      console.error('Error: Argument must be a valid number');
      process.exit(1);
    }

    const calculator = new Calculator();
    try {
      const result = calculator.squareRoot(num);
      console.log(`√${num} = ${result}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
    return;
  }

  if (args.length < 3) {
    console.log('Usage: calculator <number1> <operation> <number2>');
    console.log('Operations: add, subtract, multiply, divide, modulo, power');
    console.log('Or: calculator sqrt <number>');
    console.log('Examples:');
    console.log('  calculator 10 add 5');
    console.log('  calculator 17 modulo 5');
    console.log('  calculator 2 power 8');
    console.log('  calculator sqrt 16');
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
      case 'modulo':
      case '%':
        result = calculator.modulo(num1, num2);
        console.log(`${num1} % ${num2} = ${result}`);
        break;
      case 'power':
      case '**':
        result = calculator.power(num1, num2);
        console.log(`${num1} ** ${num2} = ${result}`);
        break;
      default:
        console.error(`Error: Unknown operation '${operation}'`);
        console.log('Supported operations: add, subtract, multiply, divide, modulo, power');
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
