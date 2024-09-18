const {
  potencia,
  inverterString,
  ehPalindromo,
  funcaoFatorial,
  celsiusParaFahrenheit,
} = require("../src/funcoes");

describe("Teste do módulo de funções", () => {
  // potencia
  test("Deveria retornar o primeiro número elevado ao segundo", () => {
    expect(potencia(2, 3)).toBe(8);
    expect(potencia(1, 5)).toBe(1);
    expect(potencia(0, 4)).toBe(0);
  });
  test("Deveria lançar um erro ao tentar usar string", () => {
    expect(() => potencia("a", 2)).toThrow("Entrada inválida");
  });
  // inverterString
  test("Deveria retornar uma string invertida", () => {
    expect(inverterString("teste")).toBe("etset");
    expect(inverterString("abc def")).toBe("fed cba");
    expect(inverterString("")).toBe("");
  });
  test("Deveria lançar um erro se o valor informado não for uma string", () => {
    expect(() => inverterString(123)).toThrow("Não é uma string");
  });
  // ehPalindromo
  test("Deveria infrmar se a string é um palíndromo", () => {
    expect(ehPalindromo("ana")).toBeTruthy();
    expect(ehPalindromo("teste")).toBeFalsy();
    expect(ehPalindromo("a santa at nasa")).toBeFalsy();
  });
  test("Deveria lançar um erro se o valor informado não for uma string", () => {
    expect(() => ehPalindromo(123)).toThrow("Não é uma string");
  });
  // funcaoFatorial
  test("Deveria calcular o fatorial de um número corretamente", () => {
    expect(funcaoFatorial(0)).toBe(1);
    expect(funcaoFatorial(5)).toBe(120);
  });
  test("Deveria lançar um erro se o valor informado for um número negativo", () => {
    expect(() => funcaoFatorial(-3)).toThrow("Entrada inválida");
  });
  test("Deveria lançar um erro se o valor informado for um número fracionado", () => {
    expect(() => funcaoFatorial(4.5)).toThrow("Entrada inválida");
  });
  test("Deveria lançar um erro se o valor informado não for um número", () => {
    expect(() => funcaoFatorial("a")).toThrow("Entrada inválida");
  });
  // celsiusParaFahrenheit
  test("Deveria converter celsius para fahrenheit", () => {
    expect(celsiusParaFahrenheit(0)).toBe(32);
    expect(celsiusParaFahrenheit(100)).toBe(212);
    expect(celsiusParaFahrenheit(-40)).toBe(-40);
  });
  test("Deveria lançar um erro se o valor informado não for um número", () => {
    expect(() => celsiusParaFahrenheit("a")).toThrow("Entrada inválida");
  });
});
