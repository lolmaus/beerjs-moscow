'use strict';

define('beerjs-moscow/tests/adapters/application.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - adapters/application.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'adapters/application.js should pass ESLint.\n1:58  - Extra semicolon. (semi)\n4:3  - Extra semicolon. (semi)');
  });
});
define('beerjs-moscow/tests/app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint.\n');
  });
});
define('beerjs-moscow/tests/authenticators/torii.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - authenticators/torii.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticators/torii.js should pass ESLint.\n');
  });
});
define('beerjs-moscow/tests/helpers/array.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/array.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/array.js should pass ESLint.\n');
  });
});
define('beerjs-moscow/tests/helpers/create-offline-ref', ['exports', 'firebase'], function (exports, _firebase) {
  exports['default'] = createOfflineRef;
  var DEFAULT_NAME = '[EmberFire offline test app]';

  exports.DEFAULT_NAME = DEFAULT_NAME;
  /**
   * Creates an offline firebase reference with optional initial data and url.
   *
   * Be sure to `stubfirebase()` and `unstubfirebase()` in your tests!
   *
   * @param  {!Object} [initialData]
   * @param  {string} [url]
   * @param  {string} [apiKey]
   * @return {!firebase.database.Reference}
   */

  function createOfflineRef(initialData) {
    var url = arguments.length <= 1 || arguments[1] === undefined ? 'https://emberfire-tests-2c814.firebaseio.com' : arguments[1];
    var apiKey = arguments.length <= 2 || arguments[2] === undefined ? 'AIzaSyC9-ndBb1WR05rRF1msVQDV6EBqB752m6o' : arguments[2];

    if (!_firebase['default']._unStub) {
      throw new Error('Please use stubFirebase() before calling this method');
    }

    var config = {
      apiKey: apiKey,
      authDomain: 'emberfire-tests-2c814.firebaseapp.com',
      databaseURL: url,
      storageBucket: ''
    };

    var app = undefined;

    try {
      app = _firebase['default'].app(DEFAULT_NAME);
    } catch (e) {
      app = _firebase['default'].initializeApp(config, DEFAULT_NAME);
    }

    var ref = app.database().ref();

    app.database().goOffline(); // must be called after the ref is created

    if (initialData) {
      ref.set(initialData);
    }

    return ref;
  }
});
define('beerjs-moscow/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('beerjs-moscow/tests/helpers/destroy-app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/destroy-app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint.\n');
  });
});
define('beerjs-moscow/tests/helpers/destroy-firebase-apps', ['exports', 'ember', 'firebase'], function (exports, _ember, _firebase) {
  exports['default'] = destroyFirebaseApps;
  var run = _ember['default'].run;

  /**
   * Destroy all Firebase apps.
   */

  function destroyFirebaseApps() {
    var deletions = _firebase['default'].apps.map(function (app) {
      return app['delete']();
    });
    _ember['default'].RSVP.all(deletions).then(function () {
      return run(function () {
        // NOOP to delay run loop until the apps are destroyed
      });
    });
  }
});
define('beerjs-moscow/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'beerjs-moscow/tests/helpers/start-app', 'beerjs-moscow/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _beerjsMoscowTestsHelpersStartApp, _beerjsMoscowTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _beerjsMoscowTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _beerjsMoscowTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('beerjs-moscow/tests/helpers/module-for-acceptance.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/module-for-acceptance.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint.\n');
  });
});
define('beerjs-moscow/tests/helpers/replace-app-ref', ['exports'], function (exports) {
  exports['default'] = replaceAppRef;
  /**
   * Updates the supplied app adapter's Firebase reference.
   *
   * @param  {!Ember.Application} app
   * @param  {!firebase.database.Reference} ref
   * @param  {string} [model]  The model, if overriding a model specific adapter
   */

  function replaceAppRef(app, ref) {
    var model = arguments.length <= 2 || arguments[2] === undefined ? 'application' : arguments[2];

    app.register('service:firebaseMock', ref, { instantiate: false, singleton: true });
    app.inject('adapter:firebase', 'firebase', 'service:firebaseMock');
    app.inject('adapter:' + model, 'firebase', 'service:firebaseMock');
  }
});
define('beerjs-moscow/tests/helpers/replace-firebase-app-service', ['exports'], function (exports) {
  exports['default'] = replaceFirebaseAppService;
  /**
   * Replaces the `firebaseApp` service with your own using injection overrides.
   *
   * This is usually not needed in test modules, where you can re-register over
   * existing names in the registry, but in acceptance tests, some registry/inject
   * magic is needed.
   *
   * @param  {!Ember.Application} app
   * @param  {!Object} newService
   */

  function replaceFirebaseAppService(app, newService) {
    app.register('service:firebaseAppMock', newService, { instantiate: false, singleton: true });
    app.inject('torii-provider:firebase', 'firebaseApp', 'service:firebaseAppMock');
    app.inject('torii-adapter:firebase', 'firebaseApp', 'service:firebaseAppMock');
  }
});
define('beerjs-moscow/tests/helpers/resolver', ['exports', 'beerjs-moscow/resolver', 'beerjs-moscow/config/environment'], function (exports, _beerjsMoscowResolver, _beerjsMoscowConfigEnvironment) {

  var resolver = _beerjsMoscowResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _beerjsMoscowConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _beerjsMoscowConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('beerjs-moscow/tests/helpers/resolver.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/resolver.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint.\n');
  });
});
define('beerjs-moscow/tests/helpers/start-app', ['exports', 'ember', 'beerjs-moscow/app', 'beerjs-moscow/config/environment'], function (exports, _ember, _beerjsMoscowApp, _beerjsMoscowConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    // use defaults, but you can override
    var attributes = _ember['default'].assign({}, _beerjsMoscowConfigEnvironment['default'].APP, attrs);

    _ember['default'].run(function () {
      application = _beerjsMoscowApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('beerjs-moscow/tests/helpers/start-app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/start-app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint.\n');
  });
});
define('beerjs-moscow/tests/helpers/stub-firebase', ['exports', 'firebase'], function (exports, _firebase) {
  exports['default'] = stubFirebase;

  /**
   * When a reference is in offline mode it will not call any callbacks
   * until it goes online and resyncs. The ref will have already
   * updated its internal cache with the changed values so we shortcut
   * the process and call the supplied callbacks immediately (asynchronously).
   */

  function stubFirebase() {
    // check for existing stubbing
    if (!_firebase['default']._unStub) {
      var originalSet = _firebase['default'].database.Reference.prototype.set;
      var originalUpdate = _firebase['default'].database.Reference.prototype.update;
      var originalRemove = _firebase['default'].database.Reference.prototype.remove;

      _firebase['default']._unStub = function () {
        _firebase['default'].database.Reference.prototype.set = originalSet;
        _firebase['default'].database.Reference.prototype.update = originalUpdate;
        _firebase['default'].database.Reference.prototype.remove = originalRemove;
      };

      _firebase['default'].database.Reference.prototype.set = function (data, cb) {
        originalSet.call(this, data);
        if (typeof cb === 'function') {
          setTimeout(cb, 0);
        }
      };

      _firebase['default'].database.Reference.prototype.update = function (data, cb) {
        originalUpdate.call(this, data);
        if (typeof cb === 'function') {
          setTimeout(cb, 0);
        }
      };

      _firebase['default'].database.Reference.prototype.remove = function (cb) {
        originalRemove.call(this);
        if (typeof cb === 'function') {
          setTimeout(cb, 0);
        }
      };
    }
  }
});
define('beerjs-moscow/tests/helpers/torii', ['exports'], function (exports) {
  exports.stubValidSession = stubValidSession;

  function stubValidSession(application, sessionData) {
    var session = application.__container__.lookup('service:session');
    var sm = session.get('stateMachine');
    Ember.run(function () {
      sm.send('startOpen');
      sm.send('finishOpen', sessionData);
    });
  }
});
define('beerjs-moscow/tests/helpers/unstub-firebase', ['exports', 'firebase'], function (exports, _firebase) {
  exports['default'] = unstubFirebase;

  function unstubFirebase() {
    if (typeof _firebase['default']._unStub === 'function') {
      _firebase['default']._unStub();
      delete _firebase['default']._unStub;
    }
  }
});
define('beerjs-moscow/tests/models/bar.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - models/bar.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/bar.js should pass ESLint.\n');
  });
});
define('beerjs-moscow/tests/pods/application/route.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - pods/application/route.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/application/route.js should pass ESLint.\n');
  });
});
define('beerjs-moscow/tests/pods/bars/bar/controller.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - pods/bars/bar/controller.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/bars/bar/controller.js should pass ESLint.\n63:36  - A space is required after \',\'. (comma-spacing)');
  });
});
define('beerjs-moscow/tests/pods/bars/bar/route.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - pods/bars/bar/route.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/bars/bar/route.js should pass ESLint.\n');
  });
});
define('beerjs-moscow/tests/pods/bars/index/controller.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - pods/bars/index/controller.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/bars/index/controller.js should pass ESLint.\n');
  });
});
define('beerjs-moscow/tests/pods/bars/index/route.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - pods/bars/index/route.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/bars/index/route.js should pass ESLint.\n');
  });
});
define('beerjs-moscow/tests/pods/components/edit-bar/component.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - pods/components/edit-bar/component.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/edit-bar/component.js should pass ESLint.\n');
  });
});
define('beerjs-moscow/tests/resolver.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - resolver.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint.\n');
  });
});
define('beerjs-moscow/tests/router.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - router.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint.\n');
  });
});
define('beerjs-moscow/tests/services/google-maps.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - services/google-maps.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/google-maps.js should pass ESLint.\n');
  });
});
define('beerjs-moscow/tests/services/yandex-maps.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - services/yandex-maps.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/yandex-maps.js should pass ESLint.\n');
  });
});
define('beerjs-moscow/tests/test-helper', ['exports', 'beerjs-moscow/tests/helpers/resolver', 'ember-qunit'], function (exports, _beerjsMoscowTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_beerjsMoscowTestsHelpersResolver['default']);
});
define('beerjs-moscow/tests/test-helper.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - test-helper.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint.\n');
  });
});
define('beerjs-moscow/tests/torii-adapters/firebase.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - torii-adapters/firebase.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'torii-adapters/firebase.js should pass ESLint.\n');
  });
});
define('beerjs-moscow/tests/validations/bar.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - validations/bar.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'validations/bar.js should pass ESLint.\n');
  });
});
/* jshint ignore:start */

require('beerjs-moscow/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
