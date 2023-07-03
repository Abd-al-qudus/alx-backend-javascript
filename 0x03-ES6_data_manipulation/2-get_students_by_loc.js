export default function getStudentsByLocation(stdArray, city) {
  return stdArray.filter((element) => element.location === city);
}
