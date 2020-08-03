function stat(strg) {

    if (strg.length === 0) return '';

    const secondsToFullTime = (seconds) => {
        let minutes = Math.floor(seconds / 60);
        seconds = Math.floor(seconds % 60);
        let hours = Math.floor(minutes / 60);
        minutes = Math.floor(minutes % 60);

        if (String(seconds).length === 1) seconds = "0" + seconds;
        if (String(minutes).length === 1) minutes = "0" + minutes;
        if (String(hours).length === 1) hours = "0" + hours;

        return `${hours}|${minutes}|${seconds}`;
    }

    const times = strg.split(',').map(element => element.split('|'));
    const timesInSeconds = times.map(element => element.reduce((prev, curr) => Number(curr) + 60 * prev)).sort((a, b) => a - b);

    let median;

    if (times.length % 2 === 0) {
        median = secondsToFullTime(Math.floor(timesInSeconds[timesInSeconds.length / 2] + timesInSeconds[timesInSeconds.length / 2 - 1] ) / 2);
    } else {
        median = secondsToFullTime(timesInSeconds[Math.floor(timesInSeconds.length / 2)]);
    }

    const average = secondsToFullTime(Math.floor(timesInSeconds.reduce((prev, curr) => prev + curr) / times.length));
    const range = secondsToFullTime(timesInSeconds[timesInSeconds.length - 1] - timesInSeconds[0]);

    return `Range: ${range} Average: ${average} Median: ${median}`;
}