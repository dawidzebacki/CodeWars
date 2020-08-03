function solution(input, markers) {

    const splittedInput = input.split('\n');

    for (let i in markers) {

        for (let j in splittedInput) {

            let marker = splittedInput[j].indexOf(markers[i]);


            if (marker >= 0) {
                splittedInput[j] = splittedInput[j].substring(0, marker).trim();
            }

        }

    }

    return splittedInput.join('\n');

}