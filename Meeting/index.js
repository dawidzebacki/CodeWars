function meeting(s) {
    let str = "";
    const people = s.toLowerCase().split(';').map(element => element.split(':').reverse()).sort().forEach(element => {
        str += `(${element[0].toUpperCase()}, ${element[1].toUpperCase()})`;
    });
    return str;
}