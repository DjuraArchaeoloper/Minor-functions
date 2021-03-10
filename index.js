
import { min, max, array, string, arrayOfStrings, type } from "./config.js";
import { random, minIntegerFromArray, minIntegerFromString, concatStringsByLength } from "./functions.js";

console.log(random(min, max));
console.log(minIntegerFromArray(array));
console.log(minIntegerFromString(string));
console.log(concatStringsByLength(arrayOfStrings, type));
