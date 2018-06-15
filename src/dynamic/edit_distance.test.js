const {assert} = require('chai')
const EditDistance = require('./edit_distance')

function pad(str, n) {
  str = str + ''
  for(let i = str.length; i < n; i++) {
    str = str + ' '
  }
  return str
}

function print(d, s, t) {
  const m = d.length
  const n = Math.max(...d.map(x => x.length))

  console.log([' ', ' ', ...t].map(c => pad(c, 3)).join(' '))
  for(let i = 0; i < m; i++) {
    let line = ''
    line += pad(i === 0 ? ' ' : s[i - 1], 3) + ' '
    for(let j = 0; j < n; j++) {
      line += pad( d[i][j].v, 3) + ' '
    }
    console.log(line)
  }
}

describe('edit distance', () => {
  it('basic', () => {
    const s = 'abc'
    const t = 'acb'
    const d = edit_distance(s, t)

    const result = d[s.length][t.length]
    assert.equal(result.v, 2)
  })

})