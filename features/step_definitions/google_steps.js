
function google_steps(client, Given, Then, When) {
  Given(/^I open Google`s search page$/, () => {
    return client
        .url('http://google.com')
        .waitForElementVisible('body')
  })

  Then(/^the title is "(.*?)"$/, (text) => {
    return client.assert.title(text)
  })

  Then(/^the Google search form exists$/, () => {
    return client.assert.visible('input[name="q"]')
  })
}

module.exports = google_steps