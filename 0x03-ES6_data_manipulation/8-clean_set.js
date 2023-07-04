export default function cleanSet(set, startString) {
  const final = [];
  const length = startString.length;

  if (startString === '' || typeof startString !== 'string') return '';
  set.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      final.push(value.slice(length));
    }
  });
  return final.join('-');
}
