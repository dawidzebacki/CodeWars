function solution(str, ending){
    return ending ? str.slice(-ending.length) === ending : true;
}