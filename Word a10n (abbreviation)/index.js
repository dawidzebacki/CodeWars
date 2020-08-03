function abbreviate(string) {

    return string.split(' ').map(element => {

        if (element[element.length - 1].match(/\W/)) {

            const temp = element[element.length - 1];
            element = element.slice(0, element.length - 1);

            if (element.length < 4) return element + temp;
            else {
                return element[0] + (element.length - 2) + element[element.length - 1] + temp;
            }

        }

        else if (element.includes('-')) {

            const firstElement = element[0] + (element.indexOf('-') - 2) + element.slice(element.indexOf('-') - 1, element.indexOf('-'));
            const secondElement = element[element.indexOf('-') + 1] + (element.length - (element.indexOf('-') + 1) - 2) + element[element.length - 1];

            return `${firstElement}-${secondElement}`;

        }

        else {

            if (element.length < 4) return element;
            else {
                return element[0] + (element.length - 2) + element[element.length - 1];
            }

        }

    }).join(' ');

}