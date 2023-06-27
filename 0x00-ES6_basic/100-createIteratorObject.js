export default function createIteratorObject(report) {
  const ret = [];
  for (const idx of Object.values(report.allEmployees)) {
    ret.push(...idx);
  }
  return ret;
}
