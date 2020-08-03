function solution(string) {
    return string.split('').map(element => element.toUpperCase() === element ? " " + element : element).join('');
}