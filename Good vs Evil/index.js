function goodVsEvil(good, evil) {
    const goodArmy = good.split(' ');
    const evilArmy = evil.split(' ');
    const goodPower = goodArmy[0] * 1 + goodArmy[1] * 2 + goodArmy[2] * 3 + goodArmy[3] * 3 + goodArmy[4] * 4 + goodArmy[5] * 10;
    const evilPower = evilArmy[0] * 1 + evilArmy[1] * 2 + evilArmy[2] * 2 + evilArmy[3] * 2 + evilArmy[4] * 3 + evilArmy[5] * 5 + evilArmy[6] * 10;

    if (evilPower > goodPower) {
        return 'Battle Result: Evil eradicates all trace of Good';
    } else if (evilPower < goodPower) {
        return 'Battle Result: Good triumphs over Evil';
    } else {
        return 'Battle Result: No victor on this battle field';
    }
}