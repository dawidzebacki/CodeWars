function orderWeight(strng) {
  return strng
    .split(" ")
    .map((number) => {
      const weight = number
        .split("")
        .reduce((a, b) => parseInt(a) + parseInt(b), 0);
      return { num: number, weight };
    })

    .sort((a, b) =>
      a.weight === b.weight ? a.num.localeCompare(b.num) : a.weight - b.weight
    )
    .map(({ num }) => num)
    .join(" ");
}