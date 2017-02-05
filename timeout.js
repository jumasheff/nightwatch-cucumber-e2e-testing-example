const {defineSupportCode} = require('cucumber')

defineSupportCode(({setDefaultTimeout}) => {
  setDefaultTimeout(40 * 1000)
})
