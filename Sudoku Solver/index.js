const numbers = [1,2,3,4,5,6,7,8,9];

function sudoku(puzzle) {

    for (let i = 0; i < puzzle.length; i++) {

        for (let j = 0; j < puzzle[i].length; j++) {

            if (puzzle[i][j] === 0) {

                const arrayOfPossibleNumbers = [];

                for (let k = 0; k < puzzle[i].length; k++) {

                    if (puzzle[i][k] !== 0) arrayOfPossibleNumbers.push(puzzle[i][k]);
                  
                    if (puzzle[k][j] !== 0) arrayOfPossibleNumbers.push(puzzle[k][j]);

                }

                let m = i < 3 ? 0 : i < 6 ? 3 : 6;
                let n = j < 3 ? 0 : j < 6 ? 3 : 6;

                for (let x = m; x < m + 3; x++) {

                    for (let y = n; y < n + 3; y++) {

                        if (puzzle[x][y] !== 0) arrayOfPossibleNumbers.push(puzzle[x][y]);
                    }

                }

                const number = numbers.filter(element => !arrayOfPossibleNumbers.includes(element));

                if (number.length === 1) {

                    puzzle[i][j] = number[0];

                    i = 0;
                    j = -1;

                }

            }

        }

    }

    return puzzle;
    
}