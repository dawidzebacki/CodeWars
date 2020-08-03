function abbrevName(name) {
    const splittedName = name.toUpperCase().split(' ');
    return `${splittedName[0].slice(0, 1)}.${splittedName[1].slice(0, 1)}`;
}