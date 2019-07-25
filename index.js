const { join } = require('path')
const { readFileSync } = require('fs')
const { safeLoad } = require('js-yaml')
const C = require('./constants')

const pkg = require('./package.json')
const yaml = readFileSync(join(__dirname, process.argv[2]), 'utf8')
let unarmoured = []
const proofs = []
const lines = yaml.split('\n')
// TODO use filter
let in_sig = false
lines.forEach(l => {
  let include_flag = true
  Object.keys(C).forEach(armour_key => {
    const armour = C[armour_key]
    if (l === armour) {
      include_flag = false
    }
  })
  if (l === C.CREV_REVIEW_SIG) {
    in_sig = true
  } else if (l === C.CREV_REVIEW_END) {
    in_sig = false
  } else if (l === '') {
    proofs.push(safeLoad(unarmoured.join('\n')))
    unarmoured = []
    includ_flag = false
  }
  if (include_flag && !in_sig) {
    unarmoured.push(l)
  }
})

// console.log(p.package)
// console.log(pkg.dependencies, pkg.devDependencies)
console.log('Parsed', proofs.length, 'proofs.')
