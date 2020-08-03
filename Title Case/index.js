function titleCase(title, minorWords) {
    if (!title) return '';
    if (minorWords !== undefined) {
        minorWords = minorWords.toLowerCase().split(' ');
    }

    title = title.toLowerCase().split(' ');

    return title.map((element, index) => {
        if (index === 0 || minorWords === undefined || !minorWords.includes(element)) return element[0].toUpperCase() + element.slice(1);
        else return element;
    }).join(' ');


}