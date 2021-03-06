/* global require, module */
const EmberApp    = require('ember-cli/lib/broccoli/ember-app')
const environment = process.env.EMBER_ENV || 'development'

module.exports = function (defaults) {
  var app = new EmberApp(defaults, {
    fingerprint: {
      exclude: [
        'images/layers-2x.png',
        'images/layers.png',
        'images/marker-icon-2x.png',
        'images/marker-icon.png',
        'images/marker-shadow.png'
      ]
    },

    babel: {
      optional: ['es7.decorators']
    },

    dotEnv: {
      clientAllowedKeys: [
        'BJM_FIREBASE_API_KEY',
        'BJM_FIREBASE_AUTH_DOMAIN',
        'BJM_FIREBASE_DB_URL',
        'BJM_FIREBASE_STORAGE_BUCKET',
        'BJM_FIREBASE_SENDER_ID',
        'BJM_ROOT_URL',
      ],
    },

    favicons: {
      faviconsConfig: {
        // these options are passed directly to the favicons module
        path: environment === 'production' ? process.env.BJM_ROOT_URL : '/',
      }
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

  // app.import('bower_components/yandex-maps/index.1', {
  //   outputFile: 'assets/vendor.js'
  // })

  return app.toTree()
}
