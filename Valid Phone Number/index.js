function validPhoneNumber(phoneNumber) {
    for (let i = 0; i < phoneNumber.length; i++) {
      
        if (i === 0 && phoneNumber[i] === "(") continue;
        else if (i === 4 && phoneNumber[i] === ")") continue;
        else if (i === 5 && phoneNumber[i] === " ") continue;
        else if (i === 9 && phoneNumber[i] === "-") continue;
        else if (phoneNumber[i] === " ") return false;
        else if (Number(phoneNumber[i]) / 1 === Number(phoneNumber[i])) continue;
        else return false;
      
    }
    return true;
}