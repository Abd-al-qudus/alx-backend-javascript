export default function appendToEachArrayValue(array, appendString) {
  const appendArray = [];
  for (const idx of array) {
    appendArray.push(appendString + idx);
  }
  return appendArray;
}
