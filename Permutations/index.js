function permutations(string) {

    const input = string.split('');
    const output = [];

    permute(0);

    function permute(i) {
        if (i == input.length)
            output.push(input.slice(0));
        else {
            for (let j = i; j < input.length; j++) {
                swap(i, j);
                permute(i + 1);
                swap(i, j); // backtrack
            }
        }
    };

    function swap(i, j) {

        const temp = input[i];
        input[i] = input[j];
        input[j] = temp;
    }

    return [... new Set(output.map(element => element.join('')))];
    
}