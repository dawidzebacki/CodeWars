function declareWinner(fighter1, fighter2, firstAttacker) {
    while (fighter1.health > 0 && fighter2.health > 0) {
        fighter1.health -= fighter2.damagePerAttack;
        fighter2.health -= fighter1.damagePerAttack;
    }

    if ( fighter1.health <= 0 && fighter2.health <= 0) {
        return firstAttacker;
    } else if (fighter1.health <= 0 && fighter2.health > 0) {
        return fighter2.name;
    } else {
        return fighter1.name;
    }
}

function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function () { return this.name; }
}