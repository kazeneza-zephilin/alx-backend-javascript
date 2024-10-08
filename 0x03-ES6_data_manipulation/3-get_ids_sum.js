export default function getStudentIdsSum(studentList = []) {
  return studentList.reduce((prev, current) => prev + current.id, 0);
}
