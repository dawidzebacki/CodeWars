function validateBattlefield(field) {
    
    const ships = {
        battleship: 0,
        cruiser: 0,
        destroyer: 0,
        submarine: 0,
    }

    field.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    field.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    for (let i = 0; i < field.length; i++) {
        field[i].unshift(0);
        field[i].push(0);
    }

    for (let i = 0; i < field.length; i++) {

        for (let j = 0; j < field[i].length; j++) {

            if (field[i][j] === 1) {

                field[i][j] = " ";

                if (field[i][j + 1] === 1) {

                    // check if ship has contact with another ship
                    if (
                        field[i - 1][j + 1] === 1 ||
                        field[i + 1][j + 1] === 1 ||
                        field[i - 1][j] === 1 ||
                        field[i + 1][j] === 1 ||
                        field[i - 1][j - 1] === 1 ||
                        field[i + 1][j - 1] === 1 ||
                        field[i][j - 1] === 1
                    ) return false;

                    field[i][j + 1] = " ";

                    if (field[i][j + 2] === 1) {

                        if (
                            field[i - 1][j + 2] === 1 ||
                            field[i + 1][j + 2] === 1
                        ) return false;

                        field[i][j + 2] = " ";

                        if (field[i][j + 3] === 1) {

                            if (
                                field[i - 1][j + 3] === 1 ||
                                field[i + 1][j + 3] === 1 ||
                                field[i][j + 4] === 1 ||
                                field[i - 1][j + 4] === 1 ||
                                field[i + 1][j + 4] === 1
                            ) return false;

                            field[i][j + 3] = " ";
                            ships.battleship++;

                        }

                        else ships.cruiser++;

                    } else ships.destroyer++;

                }

                else if (field[i + 1][j] === 1) {

                    if (
                        field[i - 1][j - 1] === 1 ||
                        field[i - 1][j] === 1 ||
                        field[i - 1][j + 1] === 1 ||
                        field[i][j - 1] === 1 ||
                        field[i][j + 1] === 1 ||
                        field[i + 1][j - 1] === 1 ||
                        field[i + 1][j + 1] === 1
                    ) return false;

                    field[i + 1][j] = " ";

                    if (field[i + 2][j] === 1) {

                        if (
                            field[i + 2][j - 1] === 1 ||
                            field[i + 2][j + 1] === 1
                        ) return false;

                        field[i + 2][j] = " ";

                        if (field[i + 3][j] === 1) {

                            if (
                                field[i + 3][j - 1] === 1 ||
                                field[i + 3][j + 1] === 1 ||
                                field[i + 4][j - 1] === 1 ||
                                field[i + 4][j] === 1 ||
                                field[i + 4][j + 1] === 1
                            ) return false;

                            field[i + 3][j] = " ";
                            ships.battleship++;

                        }
                        else ships.cruiser++

                    } else ships.destroyer++;
                }

                else ships.submarine++;

            }
        }
    }

    return (
        ships.battleship === 1 &&
        ships.cruiser === 2 &&
        ships.destroyer === 3 &&
        ships.submarine === 4
    )

}