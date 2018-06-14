const {assert} = require('chai')
const array2d = require( './array2d' )

describe('array2d', () => {
  it('basic', () => {
    const d = array2d(10, 10)

    for (let i = 0; i < 10; i++)
      for (let j = 0; j < 10; j++) {
        d[i][j] = i * 10 + j
      }

    assert.equal(d[3][5], 35)
    assert.equal(d[7][8], 78)
    assert.equal(d[11], undefined)
    assert.equal(d[9][11], undefined)
  })

})