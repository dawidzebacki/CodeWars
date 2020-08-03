function toWeirdCase(string) {
    return string.split(' ')
        .map(word => {
            return word.split('')
                .map((element, index) => {
                    if (index % 2 === 0) return element.toUpperCase()
                    return element;
                })
                .join('')
        })
        .join(' ')
}