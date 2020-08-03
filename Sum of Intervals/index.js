function sumIntervals(intervals) {
    for (let i = 0; i < intervals.length; i++) {
        
        for (let j = 0; j < intervals.length; j++) {

            if (i === j) continue;
            
            if (intervals[i][0] <= intervals[j][0] && intervals[i][1] >= intervals[j][0]) {
                
                if (intervals[i][1] > intervals[j][1]) {
                    intervals.splice(j, 1);
                    i = 0;
                    j = 0;
                }
                else {
                    intervals[i][1] = intervals[j][1];
                    intervals.splice(j, 1);
                    i = 0;
                    j = 0;
                }
            }
            
            if (intervals[i][1] === intervals[j][0]) {
                intervals[i][1] = intervals[j][1];
                intervals.splice(j, 1);
                i = 0;
                j = 0;
            }
        }
    }
    
    return -intervals.map(element => element.reduce((prev, curr) => prev - curr)).reduce((prev, curr) => prev + curr);
}