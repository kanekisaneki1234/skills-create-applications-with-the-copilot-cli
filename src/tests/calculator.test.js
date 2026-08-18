const Calculator = require('../calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('Addition', () => {
    test('should add two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should add two negative numbers', () => {
      expect(calculator.add(-5, -10)).toBe(-15);
    });

    test('should add positive and negative numbers', () => {
      expect(calculator.add(10, -4)).toBe(6);
    });

    test('should add zero to a number', () => {
      expect(calculator.add(5, 0)).toBe(5);
    });

    test('should add two zeros', () => {
      expect(calculator.add(0, 0)).toBe(0);
    });

    test('should add decimal numbers', () => {
      expect(calculator.add(2.5, 3.7)).toBeCloseTo(6.2);
    });

    test('should add large numbers', () => {
      expect(calculator.add(1000000, 2000000)).toBe(3000000);
    });
  });

  describe('Subtraction', () => {
    test('should subtract two positive numbers', () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    test('should subtract resulting in negative number', () => {
      expect(calculator.subtract(5, 10)).toBe(-5);
    });

    test('should subtract two negative numbers', () => {
      expect(calculator.subtract(-5, -10)).toBe(5);
    });

    test('should subtract zero from a number', () => {
      expect(calculator.subtract(10, 0)).toBe(10);
    });

    test('should subtract a number from zero', () => {
      expect(calculator.subtract(0, 5)).toBe(-5);
    });

    test('should subtract two zeros', () => {
      expect(calculator.subtract(0, 0)).toBe(0);
    });

    test('should subtract decimal numbers', () => {
      expect(calculator.subtract(10.5, 3.2)).toBeCloseTo(7.3);
    });

    test('should subtract large numbers', () => {
      expect(calculator.subtract(5000000, 2000000)).toBe(3000000);
    });
  });

  describe('Multiplication', () => {
    test('should multiply two positive numbers', () => {
      expect(calculator.multiply(45, 2)).toBe(90);
    });

    test('should multiply by zero', () => {
      expect(calculator.multiply(50, 0)).toBe(0);
    });

    test('should multiply zero by zero', () => {
      expect(calculator.multiply(0, 0)).toBe(0);
    });

    test('should multiply positive and negative numbers', () => {
      expect(calculator.multiply(7, -3)).toBe(-21);
    });

    test('should multiply two negative numbers', () => {
      expect(calculator.multiply(-5, -4)).toBe(20);
    });

    test('should multiply by one', () => {
      expect(calculator.multiply(100, 1)).toBe(100);
    });

    test('should multiply decimal numbers', () => {
      expect(calculator.multiply(2.5, 4)).toBe(10);
    });

    test('should multiply two decimal numbers', () => {
      expect(calculator.multiply(1.5, 2.5)).toBeCloseTo(3.75);
    });

    test('should multiply large numbers', () => {
      expect(calculator.multiply(1000, 5000)).toBe(5000000);
    });
  });

  describe('Division', () => {
    test('should divide two positive numbers', () => {
      expect(calculator.divide(20, 5)).toBe(4);
    });

    test('should divide resulting in decimal', () => {
      expect(calculator.divide(10, 3)).toBeCloseTo(3.333, 2);
    });

    test('should divide by one', () => {
      expect(calculator.divide(42, 1)).toBe(42);
    });

    test('should divide positive and negative numbers', () => {
      expect(calculator.divide(10, -2)).toBe(-5);
    });

    test('should divide two negative numbers', () => {
      expect(calculator.divide(-20, -4)).toBe(5);
    });

    test('should divide zero by a number', () => {
      expect(calculator.divide(0, 5)).toBe(0);
    });

    test('should divide decimal numbers', () => {
      expect(calculator.divide(7.5, 2.5)).toBe(3);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => {
        calculator.divide(10, 0);
      }).toThrow('Cannot divide by zero');
    });

    test('should throw error when dividing negative by zero', () => {
      expect(() => {
        calculator.divide(-5, 0);
      }).toThrow('Cannot divide by zero');
    });

    test('should throw error when dividing zero by zero', () => {
      expect(() => {
        calculator.divide(0, 0);
      }).toThrow('Cannot divide by zero');
    });

    test('should divide large numbers', () => {
      expect(calculator.divide(1000000, 100)).toBe(10000);
    });
  });

  describe('Edge Cases and Special Scenarios', () => {
    test('should handle very small decimal numbers', () => {
      expect(calculator.add(0.0001, 0.0002)).toBeCloseTo(0.0003, 5);
    });

    test('should handle negative zero', () => {
      expect(calculator.add(-0, 5)).toBe(5);
    });

    test('should handle multiplication chain', () => {
      let result = calculator.multiply(2, 3);
      result = calculator.multiply(result, 5);
      expect(result).toBe(30);
    });

    test('should handle mixed operations', () => {
      let result = calculator.add(10, 5);
      result = calculator.multiply(result, 2);
      result = calculator.subtract(result, 10);
      expect(result).toBe(20);
    });
  });

  describe('Modulo', () => {
    test('should perform modulo with positive numbers', () => {
      expect(calculator.modulo(5, 2)).toBe(1);
    });

    test('should perform modulo operation from image example', () => {
      expect(calculator.modulo(5, 2)).toBe(1);
    });

    test('should perform modulo with larger numbers', () => {
      expect(calculator.modulo(17, 5)).toBe(2);
    });

    test('should perform modulo resulting in zero', () => {
      expect(calculator.modulo(10, 5)).toBe(0);
    });

    test('should perform modulo with negative dividend', () => {
      expect(calculator.modulo(-17, 5)).toBe(-2);
    });

    test('should perform modulo with negative divisor', () => {
      expect(calculator.modulo(17, -5)).toBe(2);
    });

    test('should perform modulo with two negative numbers', () => {
      expect(calculator.modulo(-17, -5)).toBe(-2);
    });

    test('should perform modulo with decimal numbers', () => {
      expect(calculator.modulo(5.5, 2)).toBeCloseTo(1.5);
    });

    test('should throw error when modulo by zero', () => {
      expect(() => {
        calculator.modulo(10, 0);
      }).toThrow('Cannot perform modulo with zero divisor');
    });

    test('should throw error when modulo negative by zero', () => {
      expect(() => {
        calculator.modulo(-5, 0);
      }).toThrow('Cannot perform modulo with zero divisor');
    });

    test('should perform modulo with one', () => {
      expect(calculator.modulo(42, 1)).toBe(0);
    });
  });

  describe('Power', () => {
    test('should raise base to positive exponent', () => {
      expect(calculator.power(2, 3)).toBe(8);
    });

    test('should perform power operation from image example', () => {
      expect(calculator.power(2, 3)).toBe(8);
    });

    test('should raise to power of zero', () => {
      expect(calculator.power(5, 0)).toBe(1);
    });

    test('should raise to power of one', () => {
      expect(calculator.power(7, 1)).toBe(7);
    });

    test('should raise to negative exponent', () => {
      expect(calculator.power(2, -2)).toBeCloseTo(0.25);
    });

    test('should raise negative base to positive exponent', () => {
      expect(calculator.power(-2, 3)).toBe(-8);
    });

    test('should raise negative base to even exponent', () => {
      expect(calculator.power(-2, 4)).toBe(16);
    });

    test('should raise to large exponent', () => {
      expect(calculator.power(2, 8)).toBe(256);
    });

    test('should raise decimal base to exponent', () => {
      expect(calculator.power(2.5, 2)).toBeCloseTo(6.25);
    });

    test('should raise base to decimal exponent', () => {
      expect(calculator.power(4, 0.5)).toBe(2);
    });

    test('should raise zero to positive exponent', () => {
      expect(calculator.power(0, 5)).toBe(0);
    });

    test('should raise one to any exponent', () => {
      expect(calculator.power(1, 100)).toBe(1);
    });
  });

  describe('Square Root', () => {
    test('should calculate square root of perfect square', () => {
      expect(calculator.squareRoot(16)).toBe(4);
    });

    test('should perform square root from image example', () => {
      expect(calculator.squareRoot(16)).toBe(4);
    });

    test('should calculate square root of one', () => {
      expect(calculator.squareRoot(1)).toBe(1);
    });

    test('should calculate square root of zero', () => {
      expect(calculator.squareRoot(0)).toBe(0);
    });

    test('should calculate square root of non-perfect square', () => {
      expect(calculator.squareRoot(10)).toBeCloseTo(3.162, 2);
    });

    test('should calculate square root of decimal number', () => {
      expect(calculator.squareRoot(2.25)).toBe(1.5);
    });

    test('should calculate square root of large number', () => {
      expect(calculator.squareRoot(10000)).toBe(100);
    });

    test('should throw error when square root of negative number', () => {
      expect(() => {
        calculator.squareRoot(-4);
      }).toThrow('Cannot calculate square root of a negative number');
    });

    test('should throw error when square root of negative decimal', () => {
      expect(() => {
        calculator.squareRoot(-0.5);
      }).toThrow('Cannot calculate square root of a negative number');
    });

    test('should throw error when square root of large negative number', () => {
      expect(() => {
        calculator.squareRoot(-100);
      }).toThrow('Cannot calculate square root of a negative number');
    });

    test('should calculate square root with high precision', () => {
      expect(calculator.squareRoot(2)).toBeCloseTo(1.41421, 4);
    });
  });

  describe('Extended Operations - All Functions', () => {
    test('should handle complex operation chain with new functions', () => {
      let result = calculator.power(2, 3);
      result = calculator.modulo(result, 5);
      result = calculator.multiply(result, 2);
      expect(result).toBe(6);
    });

    test('should perform modulo on power result', () => {
      const powResult = calculator.power(3, 3);
      const modResult = calculator.modulo(powResult, 10);
      expect(modResult).toBe(7);
    });

    test('should calculate square root of power result', () => {
      const powResult = calculator.power(5, 2);
      const sqrtResult = calculator.squareRoot(powResult);
      expect(sqrtResult).toBe(5);
    });

    test('should combine all operations', () => {
      const sqrt = calculator.squareRoot(9);
      const power = calculator.power(sqrt, 2);
      const modulo = calculator.modulo(power, 4);
      expect(modulo).toBe(1);
    });
  });
});
