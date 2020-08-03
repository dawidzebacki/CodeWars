var number = function (busStops) {
    return busStops.map(element => element.reduce((prev, curr) => prev - curr)).reduce((prev, curr) => prev + curr);
}