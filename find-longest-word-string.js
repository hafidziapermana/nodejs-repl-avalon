function findLongestWord(s) {
  return s.split(' ')
    .reduce(function(x, y) {
      return Math.max(x, y.length)
    }, 0);
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));