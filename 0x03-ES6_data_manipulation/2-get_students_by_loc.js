import getListStudents from './0-get_list_students';

export default function getStudentsByLocation(studs = getListStudents(), city) {
  return studs.filter((e) => e.location === city);
}
