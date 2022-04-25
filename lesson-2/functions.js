/**
 * суммирует два переданных числа.
 * @param {number} a  Первое число.
 * @param {number} b  Второе число.
 * @returns {number}  Результат вычисления суммы.
 */
function sum(a, b) {
  return a + b;
}

/**
 * Разность переданных двух чисел.
 * @param {number} a  Первое число.
 * @param {number} b  Второе число.
 * @returns {number}  Результат вычисления разности.
 */
function dif(a, b) {
  return Math.abs(a - b);
}

/**
 * Произведение переданных двух чисел.
 * @param {number} a  Первое число.
 * @param {number} b  Второе число.
 * @returns {number}  Результат вычисления произведения.
 */
function multi(a, b) {
  return a * b;
}

/**
 * Деление переданных двух чисел.
 * @param {number} a  Первое число.
 * @param {number} b  Второе число.
 * @returns {number}  Результат вычисления деления.
 */
function sub(a, b) {
  return Math.round((a / b) * 100) / 100;
}