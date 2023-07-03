export default function getStudentIdsSum(stdArray) {
  const sum = 0;
  const idArray = stdArray.map((student) => student.id);
  return idArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    sum,
  );
}
