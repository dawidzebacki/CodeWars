function myLanguages(results) {
    return Object.keys(results).filter(element => results[element] >= 60).sort((a, b) => results[b] - results[a]);
}