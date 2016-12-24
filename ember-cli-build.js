/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app')

module.exports = function (defaults) {
  var app = new EmberApp(defaults, {
    // Add options here


    dotEnv: {
      clientAllowedKeys: [
        'BJM_FIREBASE_API_KEY',
        'BJM_FIREBASE_AUTH_DOMAIN',
        'BJM_FIREBASE_DB_URL',
        'BJM_FIREBASE_STORAGE_BUCKET',
        'BJM_FIREBASE_SENDER_ID',
      ],
    },
  })

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree()
}
