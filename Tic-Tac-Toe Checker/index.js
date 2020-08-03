function isSolved(board) {

    let counter = 0;

    if (board[0][0] === board[1][1] &&
        board[0][0] === board[2][2] &&
        board[1][1] !== 0) return board[1][1];
    else if (board[0][2] === board[1][1] &&
            board[0][2] === board[2][0] &&
            board[1][1] !== 0) return board[1][1];
    else {
        for (let i = 0; i < board.length; i++) {

            if ([... new Set(board[i])].length === 1 &&
                board[i][0] !== 0) return board[i][0];

            for (let j = 0; j < board[i].length; j++) {

                if (board[i][j] > 0) counter++;

                if (i === 0) {

                    const arr = [board[i][j], board[i + 1][j], board[i + 2][j]];
                    if ([... new Set(arr)].length === 1 && board[i][j] !== 0) return board[i][j];

                }

            }

        }

        return counter < 9 ? -1 : 0; 
    }

}