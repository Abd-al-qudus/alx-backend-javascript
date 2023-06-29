export default function appendToEachArrayValue(array, appendString) {
  const appendArray = [];
  for (const idx in array) {
    if (Object.prototype.hasOwnProperty.call(array, idx)) {
      const value = array[idx];
      appendArray.push(appendString + value);
    }
  }
  return appendArray;
}
