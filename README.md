# Utility Functions with Jest Unit Tests

This repository contains a collection of utility functions written in JavaScript, along with comprehensive unit tests using **Jest**. The functions handle mathematical operations, string manipulations, and temperature conversion.

## File Structure

### 1. `funcoes.js`

This file includes various utility functions:

- `potencia(x, y)`: Returns the result of raising `x` to the power of `y`. Throws an error for invalid inputs.
- `inverterString(texto)`: Reverses the given string. Throws an error if the input is not a string.
- `ehPalindromo(texto)`: Checks if a given string is a palindrome. Throws an error if the input is not a string.
- `funcaoFatorial(num)`: Recursively calculates the factorial of a number. Throws an error for negative or non-numeric inputs.
- `celsiusParaFahrenheit(num)`: Converts a temperature from Celsius to Fahrenheit. Throws an error for non-numeric inputs.

### 2. `funcoes.test.js`

This file contains unit tests for each of the above functions using the **Jest** framework. These tests ensure that the functions perform correctly across different input scenarios, including edge cases and error handling.

## How to Run the Tests

1. Make sure you have **Node.js** installed on your machine.
2. Clone this repository.
3. Install the dependencies (Jest) by running:

```bash
npm install
```

4. To run the tests, use the command:

```bash
npm test
```

## Example Tests

```javascript
test("Should return the first number raised to the power of the second", () => {
  expect(potencia(2, 3)).toBe(8);
});

test("Should throw an error for invalid string input in potencia function", () => {
  expect(() => potencia("a", 2)).toThrow("Entrada inválida");
});
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
