const longestSlideDown = pyramid => {
    
    return pyramid.reduceRight((prev, curr) =>

        curr.map((element, index) => element + Math.max(prev[index], prev[index + 1]))

    )[0];

};