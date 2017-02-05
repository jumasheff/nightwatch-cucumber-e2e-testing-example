module.exports = {
  // Abort all on test fail
  abortOnAssertionFailure: true,
  waitForConditionPollInterval : 300,
  waitForConditionTimeout : 5000,
  /*
   * Define if the test failed when many HTML elements are found when
   * we expect only one
   */
  throwOnMultipleElementsReturned: false
}