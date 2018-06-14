/**
 * Wagner-fischer algorithm is a dynamic programming
 * algorithm that computes the edit distance between to strings
 * of characters
 */
const array2d = require('../array/array2d')

function edit_distance(s, t) {
  const m = s.length
  const n = t.length

  // For all i and j, d[i,j] will hold the Levenshtein distance
  // between the first i characters of s and the first j characters of
  // t.
  const d = array2d( m + 1 , n + 1 )

  // Initialize first col. and first row
  for(let i = 0; i <= m; i++) {
    d[i][0] = i
  }
  for(let j = 0; j <= n; j++) {
    d[0][j] = j
  }

  for(let j = 1; j <=n; j++) {
    for(let i = 1; i <=m; i++) {
      if(s[i] === t[j]) {
        d[i][j] = d[i-1][j-1]
      }
      else {
        d[i][j] = Math.min(
          d[i-1][j],    // a deletion
          d[i][j-1],   // a insertion
          d[i-1][j-1]  // a replace
        ) + 1
      }
    }
  }

  return d
}

module.exports = edit_distance