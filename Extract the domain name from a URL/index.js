function domainName(url) {
    const splittedUrl = url.split('');
    const domainName = [];
    let found = false;
    for (let i = 0; i < splittedUrl.length; i++) {

        if (found) {
            if (splittedUrl[i] === '.') {
                break;
            }
            domainName.push(splittedUrl[i]);
        }

        else if (url.slice(0, 7) === 'http://') {
            if (url.slice(0, 11) === 'http://www.') {
                i += 10;
                found = true;
            } else {
                i += 6;
                found = true;
            }
        }

        else if (url.slice(0, 8) === 'https://') {
            if (url.slice(0, 12) === 'https://www.') {
                i += 11;
                found = true;
            } else {
                i += 7;
                found = true;
            }
        }
        
        else if (url.slice(0, 4) === 'www.') {
            i += 3;
            found = true;
        } else {
            found = true;
            i--;
        }

    }

    return domainName.join('');
}