const firstFormat = data => {
    let text = data.slice(0, 5).toUpperCase();

    while (text.length < 5) text += "9";

    return text;
}

const secondFormat = data => data.slice(data.length - 2, data.length - 1);

const thirdFormat = (data) => {
    const month = data[0].slice(3, data[0].length - 5).slice(0, 3);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    for (let i = 0; i < months.length; i++) {
        let num;

        if (month === months[i]) {

            if (String(i + 1).length === 1) {
                num = "0" + Number(i + 1);
            } else {
                num = i + 1;
            }

            if (data[1] === "F") {
                num = Number(String(num).slice(0, 1)) + 5 + String(num).slice(1, 2);
            }
            return num;
        }

    }

};

const fourthFormat = data => data.slice(0, 2) + data.slice(-1);

const fifthFormat = data => {
    let text = data[0][0];
    if (data[1].length !== 0) text += data[1][0];

    else {
        while (text.length < 2) text += "9";
    }

    text += "9AA";
    return text
}

function driver(data) {

    const first = firstFormat(data[2]);
    const second = secondFormat(data[3]);
    const third = thirdFormat([data[3], data[4]]);
    const fourth = fourthFormat(data[3]);
    const fifth = fifthFormat([data[0], data[1]]);

    return first + second + third + fourth + fifth;

}