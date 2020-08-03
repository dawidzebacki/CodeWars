var vampire_test = function (a, b) {

    const num = String(a * b).split('').sort().join('');
    const num2 = (String(a) + String(b)).split('').sort().join('');

    return num === num2;
    
}