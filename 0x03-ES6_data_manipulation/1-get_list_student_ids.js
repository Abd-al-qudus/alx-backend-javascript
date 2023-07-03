export default function getListStudentIds(stdArray) {
  if (!(stdArray instanceof Array)) return [];
  const idArray = stdArray.map((element) => element.id);
  return idArray;
}
