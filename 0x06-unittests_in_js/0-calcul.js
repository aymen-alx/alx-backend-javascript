function calculateNumber(a, b) {
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);
    const result = roundedA + roundedB;
    return result;
}

module.exports = calculateNumber;
