function DNAStrand(dna) {
    return dna.split('').map(element => {
        if (element === 'A') return element = 'T';
        else if (element === 'T') return element = 'A';
        else if (element === 'G') return element = 'C';
        else return element = 'G';
    }).join('');
}