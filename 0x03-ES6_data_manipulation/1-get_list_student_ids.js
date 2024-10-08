export default function getListStudentIds(arrList = []) {
  if (Array.isArray(arrList)) {
    return arrList.map((elem) => elem.id);
  }
  return [];
}
