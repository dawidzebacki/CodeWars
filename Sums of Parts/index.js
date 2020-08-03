function partsSums(ls) {
    let sum = ls.reduce((prev, curr) => prev + curr, 0);
    let result = [sum]
    for (let i = 1; i <= ls.length; i++){
        sum -= ls[i-1]
        result.push(sum )
    }
    return result
}