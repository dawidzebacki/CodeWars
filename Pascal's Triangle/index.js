function pascalsTriangle(n) {

    const pascalArray = [];

    for (let i = 0; i < n; i++) {

        const tempArray = [];

        for (let j = 0; j < i + 1; j++) {

            if (j === 0 & i !== 0 || j === i) tempArray.push(1);
            else tempArray.push(pascalArray[i - 1][j - 1] + pascalArray[i-1][j]);
                
        }

        pascalArray.push(tempArray);
    }

    return pascalArray.reduce((prev, curr) => prev.concat(curr));
    
}