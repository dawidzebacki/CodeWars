function evaporator(content, evap_per_day, threshold) {
  
    const result = [];
    const len = (content * threshold) / 100

    for (let i = content; i > len; i -= (i * evap_per_day / 100)) {

        result.push((i))
      
    }
  
    return result.length

}