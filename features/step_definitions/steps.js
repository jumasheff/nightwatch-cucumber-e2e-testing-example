const {client} = require('nightwatch-cucumber')
const {defineSupportCode} = require('cucumber')
const google_steps = require('./google_steps')
const yandex_steps = require('./yandex_steps')
const scenario_outlines = require('./scenario_outlines')

defineSupportCode(({Given, Then, When}) => {
  google_steps(client, Given, Then, When)
  yandex_steps(client, Given, Then, When)
  scenario_outlines(client, Given, Then, When)
})
