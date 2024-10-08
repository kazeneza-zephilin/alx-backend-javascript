export default function getStudentsByLocation(arrList = [], city = '') {
  return arrList.filter((elem) => elem.location === city);
}
