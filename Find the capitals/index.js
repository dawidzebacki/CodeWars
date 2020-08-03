var capitals = function (word) {
    const answer = [];
    word.split('').forEach((element, index) => {
        if (element.toUpperCase() === element) answer.push(index); 
    })
    return answer;
};