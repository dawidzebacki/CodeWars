function removeUrlAnchor(url) {
    for (let i = 0; i < url.length; i++) {
        if (url[i] === "#") {
            url = url.slice(0, i);
            break;
        }
    }
    return url;
}