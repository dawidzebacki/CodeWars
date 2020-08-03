function expandedForm(num) {
    
    const splittedNum = String(num).split('');
    let expandNum = "";

    for (let i = 0; i < splittedNum.length; i++) {

        if (splittedNum[i] !== '0') {
            if (i === 0) {
                expandNum += splittedNum[i] + "0".repeat((splittedNum.length - i) - 1);
            } else {
                expandNum += ` + ${splittedNum[i] + "0".repeat((splittedNum.length - i) - 1)}`;
            }
        }

    }

    return expandNum;

}