function parse(data) {

    const arr = [];
    let counter = 0;

    data.split('').forEach(element => {
        if (element === "i") counter++;
        else if (element === "d") counter--;
        else if (element === "s") counter *= counter;
        else if (element === "o") arr.push(counter);
    });
    
    return arr;
}