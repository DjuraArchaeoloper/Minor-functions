function random(min, max) {
  if (typeof min !== 'number' || typeof max !== 'number')
    return ("The selected parameter is not a number!")

  return Math.floor(Math.random() * (max - min + 1) + min)
};

function minIntegerFromArray(array) {
  var numbers = array.filter((item) => {
    return !isNaN(item)
  })
  if (numbers.length == 0)
    return false
  return Math.min(...numbers)
}

function minIntegerFromString(string) {
  return minIntegerFromArray(string.replace(/[^0-9.]/g, ' ').split(" ").filter(Number.parseFloat));
}

function concatStringsByLength(arrayOfStrings, type) {

  if (type === 0) return arrayOfStrings.sort((a, b) => b.length - a.length).join("");
  if (type === 1) return arrayOfStrings.sort((a, b) => a.length - b.length).join("");

  return false
}

export {
  random,
  minIntegerFromArray,
  minIntegerFromString,
  concatStringsByLength
};