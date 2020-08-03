function formatDuration(seconds) {
    if (seconds === 0) return 'now';

    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    let years = Math.floor(days / 365);

    seconds -= 60 * minutes;
    if (seconds) seconds > 1 ? seconds += " seconds" : seconds += " second";

    minutes -= 60 * hours;
    if (minutes) minutes > 1 ? minutes += " minutes" : minutes += " minute";

    hours -= 24 * days;
    if (hours) hours > 1 ? hours += " hours" : hours += " hour";

    days -= 365 * years;
    if (days) days > 1 ? days += " days" : days += " day";

    if (years) years > 1 ? years += " years" : years += " year";

    const time = [years, days, hours, minutes, seconds];

    let checkForZeros = true;
    while (checkForZeros) {
        let isZero = time.findIndex(element => element === 0);
        if (isZero !== -1) {
            time.splice(isZero, 1);
        } else {
            checkForZeros = false;
        }
    }

    if (time.length === 1) {
        return time[0];
    } else if (time.length === 2) {
        return `${time[0]} and ${time[1]}`;
    } else if (time.length === 3) {
        return `${time[0]}, ${time[1]} and ${time[2]}`;
    } else if (time.length === 4) {
        return `${time[0]}, ${time[1]}, ${time[2]} and ${time[3]}`;
    } else {
        return `${time[0]}, ${time[1]}, ${time[2]}, ${time[3]} and ${time[4]}`;
    }

}