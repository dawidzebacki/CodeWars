function removeDuplicateWords(s) {
    const items = s.split(' ');
    return items.filter((element, index) => items.indexOf(element) === index).join(' ');
}