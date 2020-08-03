function generateHashtag(str) {
    if (str.split(' ').join('').length < 140 && str.split(' ').join('').length > 0) {
        const splittedStr = str.split(' ').map(element => {
            if (element.length > 0) {
                element = element[0].toUpperCase() + element.slice(1, element.length);
            }
            return element;
        });
        return `#${splittedStr.join('')}`;
    }
    return false;
}