function potencia(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("Entrada inválida");
  }
  return x ** y;
}

function inverterString(texto) {
  if (typeof texto !== "string") {
    throw new Error("Não é uma string");
  }
  return texto.split("").reverse().join("");
}

function ehPalindromo(texto) {
  if (typeof texto !== "string") {
    throw new Error("Não é uma string");
  }

  invertido = texto.split("").reverse().join("");
  if (texto == invertido) {
    return true;
  }
  return false;
}

function funcaoFatorial(num) {
  if (num < 0 || typeof num !== "number") {
    throw new Error("Entrada inválida");
  } else if (num == 0) {
    return 1;
  } else {
    return num * funcaoFatorial(num - 1);
  }
}

function celsiusParaFahrenheit(num) {
  if (typeof num !== "number") {
    throw new Error("Entrada inválida");
  }
  return num * (9 / 5) + 32;
}

module.exports = {
  potencia,
  inverterString,
  ehPalindromo,
  funcaoFatorial,
  celsiusParaFahrenheit,
};
