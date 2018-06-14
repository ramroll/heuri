/**
 * Generate a two-dimension array
 */
function array2d(rows, cols) {
  const arr = new Array(rows)
  let i = arr.length
  while(i-- > 0)  {
    arr[i] = new Array(cols)
  }
  return arr
}


module.exports = array2d