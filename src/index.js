module.exports = function multiply(first, second) {
  let result = [];

  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      let multiplication = first[i] * second[j]
      result[i + j] = result[i + j] ? result[i + j] + multiplication : multiplication;
    }
  }

  for (let i = result.length; i > 0; i--) {
    if (result[i] > 9) {
      let number = Math.floor(result[i] / 10);
      result[i] = result[i] % 10;
      result[i - 1] = result[i - 1] + number;
    }
  }

  return result.join("");
}