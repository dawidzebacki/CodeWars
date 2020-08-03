function list(names) {
    let people = "";
    for (let i = 0; i < names.length; i++) {
        if (people === "") {
            people = names[i].name;
        } else if (names.length - 1 === i) {
            people = `${people} & ${names[i].name}`
        } else {
            people = `${people}, ${names[i].name}`
        }
    }
    return people;
}