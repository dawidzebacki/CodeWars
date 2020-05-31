function validParentheses(parentheses) {
  const limit = parentheses.length / 2

  for (let i = 0; i <= limit; ++i) {
    parentheses = parentheses.replace('()', '')
  }

  return parentheses === ''
}