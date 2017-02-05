const { defineSupportCode } = require('cucumber')

const google_steps = require('./steps/google_steps')
const yandex_steps = require('./steps/yandex_steps')
const scenario_outlines = require('./steps/scenario_outlines')

defineSupportCode((gherkinObj) => {
  google_steps(gherkinObj)
  yandex_steps(gherkinObj)
  scenario_outlines(gherkinObj)
})
