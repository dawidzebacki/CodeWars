function rowWeights(array) {
    let teamA = 0;
    let teamB = 0;

    array.forEach((element, index) => {
        (index + 1) % 2 === 0 ? teamB += element : teamA += element;
    });

    return [teamA, teamB];
}