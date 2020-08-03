function solution(list) {
    
    const arrayOfNumbers = [];

    let stringOfNumbers = false;
    let a;
    let b;

    for (let i = 0; i < list.length; i++) {

            if (list[i] === list[i + 1] - 1 && list[i] === list[i + 2] - 2 && stringOfNumbers === false) {
                stringOfNumbers = true;
                a = list[i];
            }

            else if (list[i] !== list[i + 1] - 1 && list[i] !== list[i + 2] - 2 && stringOfNumbers === true) {
                stringOfNumbers = false;
                b = list[i];
                arrayOfNumbers.push(`${a}-${b}`);
            }

            else if (stringOfNumbers === false) {
                arrayOfNumbers.push(list[i]);
            }

    }

    return arrayOfNumbers.join(',');

}