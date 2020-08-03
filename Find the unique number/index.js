function findUniq(arr) {
    let unique;
    let notUnique;
    for (let i = 0; i < arr.length; i++) {
        if ( arr[0] === arr[1] || arr[0] === arr[2]) {
            notUnique = arr[0];
        } else {
            unique = arr[0];
        }

        if (arr[i] !== notUnique) {
            unique = arr[i];
        }

        if (unique !== undefined) {
            return unique;
        }

    }
}