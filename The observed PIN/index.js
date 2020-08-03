const possibleNumbers = {
    '1': ['1', '2', '4'],
    '2': ['2', '1', '3', '5'],
    '3': ['3', '2', '6'],
    '4': ['4', '1', '5', '7'],
    '5': ['5', '2', '4', '6', '8'],
    '6': ['6', '3', '5', '9'],
    '7': ['7', '4', '8'],
    '8': ['8', '5', '7', '9', '0'],
    '9': ['9', '6', '8'],
    '0': ['0', '8'],
};

function getPINs(observed) {
    if (!observed || observed.length === 0) return [];
    if (observed.length === 1) return possibleNumbers[observed[0]];

    const newCombos = [];
    const firstDigits = observed.slice(0, observed.length - 1);
    const lastDigit = observed[observed.length - 1];

    getPINs(firstDigits).forEach(oldCombo => {
        possibleNumbers[lastDigit].forEach(newDigit => {
            newCombos.push(oldCombo + newDigit);
        });
    });

    return newCombos;
}