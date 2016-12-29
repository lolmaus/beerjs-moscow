"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('beerjs-moscow/adapters/application', ['exports', 'emberfire/adapters/firebase'], function (exports, _emberfireAdaptersFirebase) {
  exports['default'] = _emberfireAdaptersFirebase['default'].extend({});
});
define('beerjs-moscow/app', ['exports', 'ember', 'beerjs-moscow/resolver', 'ember-load-initializers', 'beerjs-moscow/config/environment'], function (exports, _ember, _beerjsMoscowResolver, _emberLoadInitializers, _beerjsMoscowConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _beerjsMoscowConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _beerjsMoscowConfigEnvironment['default'].podModulePrefix,
    Resolver: _beerjsMoscowResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _beerjsMoscowConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('beerjs-moscow/authenticators/torii', ['exports', 'ember-simple-auth/authenticators/torii', 'ember-service/inject'], function (exports, _emberSimpleAuthAuthenticatorsTorii, _emberServiceInject) {
  // import {getProperties} from 'ember-metal/get'
  // import RSVP from 'rsvp'

  exports['default'] = _emberSimpleAuthAuthenticatorsTorii['default'].extend({

    // ----- Services -----
    torii: (0, _emberServiceInject['default'])()

  });
});
// // ----- Overridden methods -----
// authenticate (provider, options) {
//   this._assertToriiIsPresent()
//
//   return this
//     .get('torii')
//     .open(provider, options || {})
//     .then(data => {
//       console.log('provider', provider)
//       console.log('data', data)
//       this._authenticateWithProvider(provider, data)
//       return this._readData(data)
//     })
// },
//
// restore (data) {
//   this._assertToriiIsPresent()
//
//   data = data || {}
//
//   if (!data.provider) {
//     delete this._provider;
//     return RSVP.reject();
//   }
//
//   const { provider } = data;
//
//   return this
//     .get('torii')
//     .fetch(data.provider, data)
//     .then((data) => {
//       this._authenticateWithProvider(provider, data)
//       return this._readData(data)
//     })
//     .catch(() => delete this._provider)
// },
//
//
//
// // ----- Custom methods -----
// _readData (data) {
//   return getProperties(data, 'displayName', 'email', 'emailVerified', 'isAnonymous', 'photoURL', 'provider', 'refreshToken', 'uid')
// }
define('beerjs-moscow/components/array-path-layer', ['exports', 'ember-leaflet/components/array-path-layer'], function (exports, _emberLeafletComponentsArrayPathLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsArrayPathLayer['default'];
    }
  });
});
define('beerjs-moscow/components/async-button', ['exports', 'ember-async-button/components/async-button'], function (exports, _emberAsyncButtonComponentsAsyncButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAsyncButtonComponentsAsyncButton['default'];
    }
  });
});
define('beerjs-moscow/components/base-layer', ['exports', 'ember-leaflet/components/base-layer'], function (exports, _emberLeafletComponentsBaseLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsBaseLayer['default'];
    }
  });
});
define('beerjs-moscow/components/circle-layer', ['exports', 'ember-leaflet/components/circle-layer'], function (exports, _emberLeafletComponentsCircleLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsCircleLayer['default'];
    }
  });
});
define('beerjs-moscow/components/circle-marker-layer', ['exports', 'ember-leaflet/components/circle-marker-layer'], function (exports, _emberLeafletComponentsCircleMarkerLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsCircleMarkerLayer['default'];
    }
  });
});
define('beerjs-moscow/components/click-outside', ['exports', 'ember-click-outside/components/click-outside'], function (exports, _emberClickOutsideComponentsClickOutside) {
  exports['default'] = _emberClickOutsideComponentsClickOutside['default'];
});
define('beerjs-moscow/components/container-layer', ['exports', 'ember-leaflet/components/container-layer'], function (exports, _emberLeafletComponentsContainerLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsContainerLayer['default'];
    }
  });
});
define('beerjs-moscow/components/div-overlay-layer', ['exports', 'ember-leaflet/components/div-overlay-layer'], function (exports, _emberLeafletComponentsDivOverlayLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsDivOverlayLayer['default'];
    }
  });
});
define('beerjs-moscow/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
  });
});
define('beerjs-moscow/components/fields-for', ['exports', 'ember-form-for/components/fields-for'], function (exports, _emberFormForComponentsFieldsFor) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFieldsFor['default'];
    }
  });
});
define('beerjs-moscow/components/form-controls/button', ['exports', 'ember-form-for/components/form-controls/button'], function (exports, _emberFormForComponentsFormControlsButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormControlsButton['default'];
    }
  });
});
define('beerjs-moscow/components/form-controls/reset', ['exports', 'ember-form-for/components/form-controls/reset'], function (exports, _emberFormForComponentsFormControlsReset) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormControlsReset['default'];
    }
  });
});
define('beerjs-moscow/components/form-controls/submit', ['exports', 'ember-form-for/components/form-controls/submit'], function (exports, _emberFormForComponentsFormControlsSubmit) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormControlsSubmit['default'];
    }
  });
});
define('beerjs-moscow/components/form-errors', ['exports', 'ember-form-for/components/form-errors'], function (exports, _emberFormForComponentsFormErrors) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormErrors['default'];
    }
  });
});
define('beerjs-moscow/components/form-field', ['exports', 'ember-form-for/components/form-field'], function (exports, _emberFormForComponentsFormField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormField['default'];
    }
  });
});
define('beerjs-moscow/components/form-fields/checkbox-field', ['exports', 'ember-form-for/components/form-fields/checkbox-field'], function (exports, _emberFormForComponentsFormFieldsCheckboxField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsCheckboxField['default'];
    }
  });
});
define('beerjs-moscow/components/form-fields/checkbox-group', ['exports', 'ember-form-for/components/form-fields/checkbox-group'], function (exports, _emberFormForComponentsFormFieldsCheckboxGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsCheckboxGroup['default'];
    }
  });
});
define('beerjs-moscow/components/form-fields/checkbox-group/option', ['exports', 'ember-form-for/components/form-fields/checkbox-group/option'], function (exports, _emberFormForComponentsFormFieldsCheckboxGroupOption) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsCheckboxGroupOption['default'];
    }
  });
});
define('beerjs-moscow/components/form-fields/color-field', ['exports', 'ember-form-for/components/form-fields/color-field'], function (exports, _emberFormForComponentsFormFieldsColorField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsColorField['default'];
    }
  });
});
define('beerjs-moscow/components/form-fields/custom-field', ['exports', 'ember-form-for/components/form-fields/custom-field'], function (exports, _emberFormForComponentsFormFieldsCustomField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsCustomField['default'];
    }
  });
});
define('beerjs-moscow/components/form-fields/date-field', ['exports', 'ember-form-for/components/form-fields/date-field'], function (exports, _emberFormForComponentsFormFieldsDateField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsDateField['default'];
    }
  });
});
define('beerjs-moscow/components/form-fields/datetime-field', ['exports', 'ember-form-for/components/form-fields/datetime-field'], function (exports, _emberFormForComponentsFormFieldsDatetimeField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsDatetimeField['default'];
    }
  });
});
define('beerjs-moscow/components/form-fields/datetime-local-field', ['exports', 'ember-form-for/components/form-fields/datetime-local-field'], function (exports, _emberFormForComponentsFormFieldsDatetimeLocalField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsDatetimeLocalField['default'];
    }
  });
});
define('beerjs-moscow/components/form-fields/email-field', ['exports', 'ember-form-for/components/form-fields/email-field'], function (exports, _emberFormForComponentsFormFieldsEmailField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsEmailField['default'];
    }
  });
});
define('beerjs-moscow/components/form-fields/file-field', ['exports', 'ember-form-for/components/form-fields/file-field'], function (exports, _emberFormForComponentsFormFieldsFileField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsFileField['default'];
    }
  });
});
define('beerjs-moscow/components/form-fields/hidden-field', ['exports', 'ember-form-for/components/form-fields/hidden-field'], function (exports, _emberFormForComponentsFormFieldsHiddenField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsHiddenField['default'];
    }
  });
});
define('beerjs-moscow/components/form-fields/month-field', ['exports', 'ember-form-for/components/form-fields/month-field'], function (exports, _emberFormForComponentsFormFieldsMonthField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsMonthField['default'];
    }
  });
});
define('beerjs-moscow/components/form-fields/number-field', ['exports', 'ember-form-for/components/form-fields/number-field'], function (exports, _emberFormForComponentsFormFieldsNumberField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsNumberField['default'];
    }
  });
});
define('beerjs-moscow/components/form-fields/password-field', ['exports', 'ember-form-for/components/form-fields/password-field'], function (exports, _emberFormForComponentsFormFieldsPasswordField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsPasswordField['default'];
    }
  });
});
define('beerjs-moscow/components/form-fields/radio-field', ['exports', 'ember-form-for/components/form-fields/radio-field'], function (exports, _emberFormForComponentsFormFieldsRadioField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsRadioField['default'];
    }
  });
});
define('beerjs-moscow/components/form-fields/radio-group', ['exports', 'ember-form-for/components/form-fields/radio-group'], function (exports, _emberFormForComponentsFormFieldsRadioGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsRadioGroup['default'];
    }
  });
});
define('beerjs-moscow/components/form-fields/range-field', ['exports', 'ember-form-for/components/form-fields/range-field'], function (exports, _emberFormForComponentsFormFieldsRangeField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsRangeField['default'];
    }
  });
});
define('beerjs-moscow/components/form-fields/search-field', ['exports', 'ember-form-for/components/form-fields/search-field'], function (exports, _emberFormForComponentsFormFieldsSearchField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsSearchField['default'];
    }
  });
});
define('beerjs-moscow/components/form-fields/select-field', ['exports', 'ember-form-for/components/form-fields/select-field'], function (exports, _emberFormForComponentsFormFieldsSelectField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsSelectField['default'];
    }
  });
});
define('beerjs-moscow/components/form-fields/tel-field', ['exports', 'ember-form-for/components/form-fields/tel-field'], function (exports, _emberFormForComponentsFormFieldsTelField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsTelField['default'];
    }
  });
});
define('beerjs-moscow/components/form-fields/text-field', ['exports', 'ember-form-for/components/form-fields/text-field'], function (exports, _emberFormForComponentsFormFieldsTextField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsTextField['default'];
    }
  });
});
define('beerjs-moscow/components/form-fields/textarea-field', ['exports', 'ember-form-for/components/form-fields/textarea-field'], function (exports, _emberFormForComponentsFormFieldsTextareaField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsTextareaField['default'];
    }
  });
});
define('beerjs-moscow/components/form-fields/time-field', ['exports', 'ember-form-for/components/form-fields/time-field'], function (exports, _emberFormForComponentsFormFieldsTimeField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsTimeField['default'];
    }
  });
});
define('beerjs-moscow/components/form-fields/url-field', ['exports', 'ember-form-for/components/form-fields/url-field'], function (exports, _emberFormForComponentsFormFieldsUrlField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsUrlField['default'];
    }
  });
});
define('beerjs-moscow/components/form-fields/week-field', ['exports', 'ember-form-for/components/form-fields/week-field'], function (exports, _emberFormForComponentsFormFieldsWeekField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsWeekField['default'];
    }
  });
});
define('beerjs-moscow/components/form-for', ['exports', 'ember-form-for/components/form-for'], function (exports, _emberFormForComponentsFormFor) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFor['default'];
    }
  });
});
define('beerjs-moscow/components/form-hint', ['exports', 'ember-form-for/components/form-hint'], function (exports, _emberFormForComponentsFormHint) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormHint['default'];
    }
  });
});
define('beerjs-moscow/components/form-label', ['exports', 'ember-form-for/components/form-label'], function (exports, _emberFormForComponentsFormLabel) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormLabel['default'];
    }
  });
});
define('beerjs-moscow/components/geojson-layer', ['exports', 'ember-leaflet/components/geojson-layer'], function (exports, _emberLeafletComponentsGeojsonLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsGeojsonLayer['default'];
    }
  });
});
define('beerjs-moscow/components/image-layer', ['exports', 'ember-leaflet/components/image-layer'], function (exports, _emberLeafletComponentsImageLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsImageLayer['default'];
    }
  });
});
define('beerjs-moscow/components/leaflet-map', ['exports', 'ember-leaflet/components/leaflet-map'], function (exports, _emberLeafletComponentsLeafletMap) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsLeafletMap['default'];
    }
  });
});
define('beerjs-moscow/components/marker-layer', ['exports', 'ember-leaflet/components/marker-layer'], function (exports, _emberLeafletComponentsMarkerLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsMarkerLayer['default'];
    }
  });
});
define('beerjs-moscow/components/one-way-checkbox', ['exports', 'ember-one-way-controls/components/one-way-checkbox'], function (exports, _emberOneWayControlsComponentsOneWayCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayCheckbox['default'];
    }
  });
});
define('beerjs-moscow/components/one-way-color', ['exports', 'ember-one-way-controls/components/one-way-color'], function (exports, _emberOneWayControlsComponentsOneWayColor) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayColor['default'];
    }
  });
});
define('beerjs-moscow/components/one-way-date', ['exports', 'ember-one-way-controls/components/one-way-date'], function (exports, _emberOneWayControlsComponentsOneWayDate) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayDate['default'];
    }
  });
});
define('beerjs-moscow/components/one-way-datetime-local', ['exports', 'ember-one-way-controls/components/one-way-datetime-local'], function (exports, _emberOneWayControlsComponentsOneWayDatetimeLocal) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayDatetimeLocal['default'];
    }
  });
});
define('beerjs-moscow/components/one-way-email', ['exports', 'ember-one-way-controls/components/one-way-email'], function (exports, _emberOneWayControlsComponentsOneWayEmail) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayEmail['default'];
    }
  });
});
define('beerjs-moscow/components/one-way-file', ['exports', 'ember-one-way-controls/components/one-way-file'], function (exports, _emberOneWayControlsComponentsOneWayFile) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayFile['default'];
    }
  });
});
define('beerjs-moscow/components/one-way-hidden', ['exports', 'ember-one-way-controls/components/one-way-hidden'], function (exports, _emberOneWayControlsComponentsOneWayHidden) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayHidden['default'];
    }
  });
});
define('beerjs-moscow/components/one-way-input', ['exports', 'ember-one-way-controls/components/one-way-input'], function (exports, _emberOneWayControlsComponentsOneWayInput) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayInput['default'];
    }
  });
});
define('beerjs-moscow/components/one-way-month', ['exports', 'ember-one-way-controls/components/one-way-month'], function (exports, _emberOneWayControlsComponentsOneWayMonth) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayMonth['default'];
    }
  });
});
define('beerjs-moscow/components/one-way-number', ['exports', 'ember-one-way-controls/components/one-way-number'], function (exports, _emberOneWayControlsComponentsOneWayNumber) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayNumber['default'];
    }
  });
});
define('beerjs-moscow/components/one-way-password', ['exports', 'ember-one-way-controls/components/one-way-password'], function (exports, _emberOneWayControlsComponentsOneWayPassword) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayPassword['default'];
    }
  });
});
define('beerjs-moscow/components/one-way-radio', ['exports', 'ember-one-way-controls/components/one-way-radio'], function (exports, _emberOneWayControlsComponentsOneWayRadio) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayRadio['default'];
    }
  });
});
define('beerjs-moscow/components/one-way-range', ['exports', 'ember-one-way-controls/components/one-way-range'], function (exports, _emberOneWayControlsComponentsOneWayRange) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayRange['default'];
    }
  });
});
define('beerjs-moscow/components/one-way-search', ['exports', 'ember-one-way-controls/components/one-way-search'], function (exports, _emberOneWayControlsComponentsOneWaySearch) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWaySearch['default'];
    }
  });
});
define('beerjs-moscow/components/one-way-select', ['exports', 'ember-one-way-controls/components/one-way-select'], function (exports, _emberOneWayControlsComponentsOneWaySelect) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWaySelect['default'];
    }
  });
});
define('beerjs-moscow/components/one-way-select/option', ['exports', 'ember-one-way-controls/components/one-way-select/option'], function (exports, _emberOneWayControlsComponentsOneWaySelectOption) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWaySelectOption['default'];
    }
  });
});
define('beerjs-moscow/components/one-way-tel', ['exports', 'ember-one-way-controls/components/one-way-tel'], function (exports, _emberOneWayControlsComponentsOneWayTel) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayTel['default'];
    }
  });
});
define('beerjs-moscow/components/one-way-text', ['exports', 'ember-one-way-controls/components/one-way-text'], function (exports, _emberOneWayControlsComponentsOneWayText) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayText['default'];
    }
  });
});
define('beerjs-moscow/components/one-way-textarea', ['exports', 'ember-one-way-controls/components/one-way-textarea'], function (exports, _emberOneWayControlsComponentsOneWayTextarea) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayTextarea['default'];
    }
  });
});
define('beerjs-moscow/components/one-way-time', ['exports', 'ember-one-way-controls/components/one-way-time'], function (exports, _emberOneWayControlsComponentsOneWayTime) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayTime['default'];
    }
  });
});
define('beerjs-moscow/components/one-way-url', ['exports', 'ember-one-way-controls/components/one-way-url'], function (exports, _emberOneWayControlsComponentsOneWayUrl) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayUrl['default'];
    }
  });
});
define('beerjs-moscow/components/one-way-week', ['exports', 'ember-one-way-controls/components/one-way-week'], function (exports, _emberOneWayControlsComponentsOneWayWeek) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayWeek['default'];
    }
  });
});
define('beerjs-moscow/components/path-layer', ['exports', 'ember-leaflet/components/path-layer'], function (exports, _emberLeafletComponentsPathLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsPathLayer['default'];
    }
  });
});
define('beerjs-moscow/components/point-path-layer', ['exports', 'ember-leaflet/components/point-path-layer'], function (exports, _emberLeafletComponentsPointPathLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsPointPathLayer['default'];
    }
  });
});
define('beerjs-moscow/components/polygon-layer', ['exports', 'ember-leaflet/components/polygon-layer'], function (exports, _emberLeafletComponentsPolygonLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsPolygonLayer['default'];
    }
  });
});
define('beerjs-moscow/components/polyline-layer', ['exports', 'ember-leaflet/components/polyline-layer'], function (exports, _emberLeafletComponentsPolylineLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsPolylineLayer['default'];
    }
  });
});
define('beerjs-moscow/components/popup-layer', ['exports', 'ember-leaflet/components/popup-layer'], function (exports, _emberLeafletComponentsPopupLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsPopupLayer['default'];
    }
  });
});
define('beerjs-moscow/components/tile-layer', ['exports', 'ember-leaflet/components/tile-layer'], function (exports, _emberLeafletComponentsTileLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsTileLayer['default'];
    }
  });
});
define('beerjs-moscow/components/tooltip-layer', ['exports', 'ember-leaflet/components/tooltip-layer'], function (exports, _emberLeafletComponentsTooltipLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsTooltipLayer['default'];
    }
  });
});
define('beerjs-moscow/components/torii-iframe-placeholder', ['exports', 'torii/components/torii-iframe-placeholder'], function (exports, _toriiComponentsToriiIframePlaceholder) {
  exports['default'] = _toriiComponentsToriiIframePlaceholder['default'];
});
define('beerjs-moscow/components/wms-tile-layer', ['exports', 'ember-leaflet/components/wms-tile-layer'], function (exports, _emberLeafletComponentsWmsTileLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsWmsTileLayer['default'];
    }
  });
});
define('beerjs-moscow/helpers/and', ['exports', 'ember', 'ember-truth-helpers/helpers/and'], function (exports, _ember, _emberTruthHelpersHelpersAnd) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersAnd.andHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersAnd.andHelper);
  }

  exports['default'] = forExport;
});
define('beerjs-moscow/helpers/app-version', ['exports', 'ember', 'beerjs-moscow/config/environment'], function (exports, _ember, _beerjsMoscowConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _beerjsMoscowConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('beerjs-moscow/helpers/append', ['exports', 'ember-composable-helpers/helpers/append'], function (exports, _emberComposableHelpersHelpersAppend) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersAppend['default'];
    }
  });
  Object.defineProperty(exports, 'append', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersAppend.append;
    }
  });
});
define('beerjs-moscow/helpers/array', ['exports', 'ember-helper'], function (exports, _emberHelper) {
  exports.array = array;

  function array(params /*, hash*/) {
    return params;
  }

  exports['default'] = (0, _emberHelper.helper)(array);
});
define('beerjs-moscow/helpers/camelize', ['exports', 'ember-composable-helpers/helpers/camelize'], function (exports, _emberComposableHelpersHelpersCamelize) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCamelize['default'];
    }
  });
  Object.defineProperty(exports, 'camelize', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCamelize.camelize;
    }
  });
});
define('beerjs-moscow/helpers/capitalize', ['exports', 'ember-composable-helpers/helpers/capitalize'], function (exports, _emberComposableHelpersHelpersCapitalize) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCapitalize['default'];
    }
  });
  Object.defineProperty(exports, 'capitalize', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCapitalize.capitalize;
    }
  });
});
define('beerjs-moscow/helpers/changeset', ['exports', 'ember-changeset-validations/helpers/changeset'], function (exports, _emberChangesetValidationsHelpersChangeset) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberChangesetValidationsHelpersChangeset['default'];
    }
  });
  Object.defineProperty(exports, 'changeset', {
    enumerable: true,
    get: function get() {
      return _emberChangesetValidationsHelpersChangeset.changeset;
    }
  });
});
define('beerjs-moscow/helpers/chunk', ['exports', 'ember-composable-helpers/helpers/chunk'], function (exports, _emberComposableHelpersHelpersChunk) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersChunk['default'];
    }
  });
  Object.defineProperty(exports, 'chunk', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersChunk.chunk;
    }
  });
});
define('beerjs-moscow/helpers/classify', ['exports', 'ember-composable-helpers/helpers/classify'], function (exports, _emberComposableHelpersHelpersClassify) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersClassify['default'];
    }
  });
  Object.defineProperty(exports, 'classify', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersClassify.classify;
    }
  });
});
define('beerjs-moscow/helpers/compact', ['exports', 'ember-composable-helpers/helpers/compact'], function (exports, _emberComposableHelpersHelpersCompact) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCompact['default'];
    }
  });
  Object.defineProperty(exports, 'compact', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCompact.compact;
    }
  });
});
define('beerjs-moscow/helpers/compute', ['exports', 'ember-composable-helpers/helpers/compute'], function (exports, _emberComposableHelpersHelpersCompute) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCompute['default'];
    }
  });
  Object.defineProperty(exports, 'compute', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCompute.compute;
    }
  });
});
define('beerjs-moscow/helpers/contains', ['exports', 'ember-form-for/helpers/contains'], function (exports, _emberFormForHelpersContains) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForHelpersContains['default'];
    }
  });
  Object.defineProperty(exports, 'contains', {
    enumerable: true,
    get: function get() {
      return _emberFormForHelpersContains.contains;
    }
  });
});
define('beerjs-moscow/helpers/dasherize', ['exports', 'ember-composable-helpers/helpers/dasherize'], function (exports, _emberComposableHelpersHelpersDasherize) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersDasherize['default'];
    }
  });
  Object.defineProperty(exports, 'dasherize', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersDasherize.dasherize;
    }
  });
});
define('beerjs-moscow/helpers/dec', ['exports', 'ember-composable-helpers/helpers/dec'], function (exports, _emberComposableHelpersHelpersDec) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersDec['default'];
    }
  });
  Object.defineProperty(exports, 'dec', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersDec.dec;
    }
  });
});
define('beerjs-moscow/helpers/div-icon', ['exports', 'ember-leaflet/helpers/div-icon'], function (exports, _emberLeafletHelpersDivIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersDivIcon['default'];
    }
  });
  Object.defineProperty(exports, 'divIcon', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersDivIcon.divIcon;
    }
  });
});
define('beerjs-moscow/helpers/drop', ['exports', 'ember-composable-helpers/helpers/drop'], function (exports, _emberComposableHelpersHelpersDrop) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersDrop['default'];
    }
  });
  Object.defineProperty(exports, 'drop', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersDrop.drop;
    }
  });
});
define('beerjs-moscow/helpers/eq', ['exports', 'ember', 'ember-truth-helpers/helpers/equal'], function (exports, _ember, _emberTruthHelpersHelpersEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersEqual.equalHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersEqual.equalHelper);
  }

  exports['default'] = forExport;
});
define('beerjs-moscow/helpers/filter-by', ['exports', 'ember-composable-helpers/helpers/filter-by'], function (exports, _emberComposableHelpersHelpersFilterBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFilterBy['default'];
    }
  });
  Object.defineProperty(exports, 'filterBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFilterBy.filterBy;
    }
  });
});
define('beerjs-moscow/helpers/filter', ['exports', 'ember-composable-helpers/helpers/filter'], function (exports, _emberComposableHelpersHelpersFilter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFilter['default'];
    }
  });
  Object.defineProperty(exports, 'filter', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFilter.filter;
    }
  });
});
define('beerjs-moscow/helpers/find-by', ['exports', 'ember-composable-helpers/helpers/find-by'], function (exports, _emberComposableHelpersHelpersFindBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFindBy['default'];
    }
  });
  Object.defineProperty(exports, 'findBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFindBy.findBy;
    }
  });
});
define('beerjs-moscow/helpers/flatten', ['exports', 'ember-composable-helpers/helpers/flatten'], function (exports, _emberComposableHelpersHelpersFlatten) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFlatten['default'];
    }
  });
  Object.defineProperty(exports, 'flatten', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFlatten.flatten;
    }
  });
});
define('beerjs-moscow/helpers/form-for/humanize', ['exports', 'ember-form-for/helpers/form-for/humanize'], function (exports, _emberFormForHelpersFormForHumanize) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForHelpersFormForHumanize['default'];
    }
  });
  Object.defineProperty(exports, 'formForHumanize', {
    enumerable: true,
    get: function get() {
      return _emberFormForHelpersFormForHumanize.formForHumanize;
    }
  });
});
define('beerjs-moscow/helpers/form-for/merge-custom-form-field', ['exports', 'ember-form-for/helpers/form-for/merge-custom-form-field'], function (exports, _emberFormForHelpersFormForMergeCustomFormField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForHelpersFormForMergeCustomFormField['default'];
    }
  });
  Object.defineProperty(exports, 'formForMergeCustomFormField', {
    enumerable: true,
    get: function get() {
      return _emberFormForHelpersFormForMergeCustomFormField.formForMergeCustomFormField;
    }
  });
});
define('beerjs-moscow/helpers/group-by', ['exports', 'ember-composable-helpers/helpers/group-by'], function (exports, _emberComposableHelpersHelpersGroupBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersGroupBy['default'];
    }
  });
  Object.defineProperty(exports, 'groupBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersGroupBy.groupBy;
    }
  });
});
define('beerjs-moscow/helpers/gt', ['exports', 'ember', 'ember-truth-helpers/helpers/gt'], function (exports, _ember, _emberTruthHelpersHelpersGt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGt.gtHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGt.gtHelper);
  }

  exports['default'] = forExport;
});
define('beerjs-moscow/helpers/gte', ['exports', 'ember', 'ember-truth-helpers/helpers/gte'], function (exports, _ember, _emberTruthHelpersHelpersGte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGte.gteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGte.gteHelper);
  }

  exports['default'] = forExport;
});
define('beerjs-moscow/helpers/has-next', ['exports', 'ember-composable-helpers/helpers/has-next'], function (exports, _emberComposableHelpersHelpersHasNext) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersHasNext['default'];
    }
  });
  Object.defineProperty(exports, 'hasNext', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersHasNext.hasNext;
    }
  });
});
define('beerjs-moscow/helpers/has-previous', ['exports', 'ember-composable-helpers/helpers/has-previous'], function (exports, _emberComposableHelpersHelpersHasPrevious) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersHasPrevious['default'];
    }
  });
  Object.defineProperty(exports, 'hasPrevious', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersHasPrevious.hasPrevious;
    }
  });
});
define('beerjs-moscow/helpers/html-safe', ['exports', 'ember-composable-helpers/helpers/html-safe'], function (exports, _emberComposableHelpersHelpersHtmlSafe) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersHtmlSafe['default'];
    }
  });
  Object.defineProperty(exports, 'htmlSafe', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersHtmlSafe.htmlSafe;
    }
  });
});
define('beerjs-moscow/helpers/icon', ['exports', 'ember-leaflet/helpers/icon'], function (exports, _emberLeafletHelpersIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersIcon['default'];
    }
  });
  Object.defineProperty(exports, 'icon', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersIcon.icon;
    }
  });
});
define('beerjs-moscow/helpers/inc', ['exports', 'ember-composable-helpers/helpers/inc'], function (exports, _emberComposableHelpersHelpersInc) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersInc['default'];
    }
  });
  Object.defineProperty(exports, 'inc', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersInc.inc;
    }
  });
});
define('beerjs-moscow/helpers/intersect', ['exports', 'ember-composable-helpers/helpers/intersect'], function (exports, _emberComposableHelpersHelpersIntersect) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersIntersect['default'];
    }
  });
  Object.defineProperty(exports, 'intersect', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersIntersect.intersect;
    }
  });
});
define('beerjs-moscow/helpers/invoke', ['exports', 'ember-composable-helpers/helpers/invoke'], function (exports, _emberComposableHelpersHelpersInvoke) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersInvoke['default'];
    }
  });
  Object.defineProperty(exports, 'invoke', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersInvoke.invoke;
    }
  });
});
define('beerjs-moscow/helpers/is-array', ['exports', 'ember', 'ember-truth-helpers/helpers/is-array'], function (exports, _ember, _emberTruthHelpersHelpersIsArray) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  }

  exports['default'] = forExport;
});
define('beerjs-moscow/helpers/is-equal', ['exports', 'ember-form-for/helpers/is-equal'], function (exports, _emberFormForHelpersIsEqual) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForHelpersIsEqual['default'];
    }
  });
});
define('beerjs-moscow/helpers/join', ['exports', 'ember-composable-helpers/helpers/join'], function (exports, _emberComposableHelpersHelpersJoin) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersJoin['default'];
    }
  });
  Object.defineProperty(exports, 'join', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersJoin.join;
    }
  });
});
define('beerjs-moscow/helpers/lat-lng-bounds', ['exports', 'ember-leaflet/helpers/lat-lng-bounds'], function (exports, _emberLeafletHelpersLatLngBounds) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersLatLngBounds['default'];
    }
  });
  Object.defineProperty(exports, 'latLngBounds', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersLatLngBounds.latLngBounds;
    }
  });
});
define('beerjs-moscow/helpers/lt', ['exports', 'ember', 'ember-truth-helpers/helpers/lt'], function (exports, _ember, _emberTruthHelpersHelpersLt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLt.ltHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLt.ltHelper);
  }

  exports['default'] = forExport;
});
define('beerjs-moscow/helpers/lte', ['exports', 'ember', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersHelpersLte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLte.lteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = forExport;
});
define('beerjs-moscow/helpers/map-by', ['exports', 'ember-composable-helpers/helpers/map-by'], function (exports, _emberComposableHelpersHelpersMapBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersMapBy['default'];
    }
  });
  Object.defineProperty(exports, 'mapBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersMapBy.mapBy;
    }
  });
});
define('beerjs-moscow/helpers/map', ['exports', 'ember-composable-helpers/helpers/map'], function (exports, _emberComposableHelpersHelpersMap) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersMap['default'];
    }
  });
  Object.defineProperty(exports, 'map', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersMap.map;
    }
  });
});
define('beerjs-moscow/helpers/next', ['exports', 'ember-composable-helpers/helpers/next'], function (exports, _emberComposableHelpersHelpersNext) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersNext['default'];
    }
  });
  Object.defineProperty(exports, 'next', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersNext.next;
    }
  });
});
define('beerjs-moscow/helpers/not-eq', ['exports', 'ember', 'ember-truth-helpers/helpers/not-equal'], function (exports, _ember, _emberTruthHelpersHelpersNotEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  }

  exports['default'] = forExport;
});
define('beerjs-moscow/helpers/not', ['exports', 'ember', 'ember-truth-helpers/helpers/not'], function (exports, _ember, _emberTruthHelpersHelpersNot) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNot.notHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNot.notHelper);
  }

  exports['default'] = forExport;
});
define('beerjs-moscow/helpers/object-at', ['exports', 'ember-composable-helpers/helpers/object-at'], function (exports, _emberComposableHelpersHelpersObjectAt) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersObjectAt['default'];
    }
  });
  Object.defineProperty(exports, 'objectAt', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersObjectAt.objectAt;
    }
  });
});
define('beerjs-moscow/helpers/one-way-select/contains', ['exports', 'ember-one-way-controls/helpers/one-way-select/contains'], function (exports, _emberOneWayControlsHelpersOneWaySelectContains) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsHelpersOneWaySelectContains['default'];
    }
  });
  Object.defineProperty(exports, 'contains', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsHelpersOneWaySelectContains.contains;
    }
  });
});
define('beerjs-moscow/helpers/optional', ['exports', 'ember-composable-helpers/helpers/optional'], function (exports, _emberComposableHelpersHelpersOptional) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersOptional['default'];
    }
  });
  Object.defineProperty(exports, 'optional', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersOptional.optional;
    }
  });
});
define('beerjs-moscow/helpers/or', ['exports', 'ember', 'ember-truth-helpers/helpers/or'], function (exports, _ember, _emberTruthHelpersHelpersOr) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersOr.orHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersOr.orHelper);
  }

  exports['default'] = forExport;
});
define('beerjs-moscow/helpers/pipe-action', ['exports', 'ember-composable-helpers/helpers/pipe-action'], function (exports, _emberComposableHelpersHelpersPipeAction) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersPipeAction['default'];
    }
  });
});
define('beerjs-moscow/helpers/pipe', ['exports', 'ember-composable-helpers/helpers/pipe'], function (exports, _emberComposableHelpersHelpersPipe) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersPipe['default'];
    }
  });
  Object.defineProperty(exports, 'pipe', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersPipe.pipe;
    }
  });
});
define('beerjs-moscow/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('beerjs-moscow/helpers/point', ['exports', 'ember-leaflet/helpers/point'], function (exports, _emberLeafletHelpersPoint) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersPoint['default'];
    }
  });
  Object.defineProperty(exports, 'point', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersPoint.point;
    }
  });
});
define('beerjs-moscow/helpers/previous', ['exports', 'ember-composable-helpers/helpers/previous'], function (exports, _emberComposableHelpersHelpersPrevious) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersPrevious['default'];
    }
  });
  Object.defineProperty(exports, 'previous', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersPrevious.previous;
    }
  });
});
define('beerjs-moscow/helpers/queue', ['exports', 'ember-composable-helpers/helpers/queue'], function (exports, _emberComposableHelpersHelpersQueue) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersQueue['default'];
    }
  });
  Object.defineProperty(exports, 'queue', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersQueue.queue;
    }
  });
});
define('beerjs-moscow/helpers/range', ['exports', 'ember-composable-helpers/helpers/range'], function (exports, _emberComposableHelpersHelpersRange) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRange['default'];
    }
  });
  Object.defineProperty(exports, 'range', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRange.range;
    }
  });
});
define('beerjs-moscow/helpers/reduce', ['exports', 'ember-composable-helpers/helpers/reduce'], function (exports, _emberComposableHelpersHelpersReduce) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersReduce['default'];
    }
  });
  Object.defineProperty(exports, 'reduce', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersReduce.reduce;
    }
  });
});
define('beerjs-moscow/helpers/reject-by', ['exports', 'ember-composable-helpers/helpers/reject-by'], function (exports, _emberComposableHelpersHelpersRejectBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRejectBy['default'];
    }
  });
  Object.defineProperty(exports, 'rejectBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRejectBy.rejectBy;
    }
  });
});
define('beerjs-moscow/helpers/repeat', ['exports', 'ember-composable-helpers/helpers/repeat'], function (exports, _emberComposableHelpersHelpersRepeat) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRepeat['default'];
    }
  });
  Object.defineProperty(exports, 'repeat', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRepeat.repeat;
    }
  });
});
define('beerjs-moscow/helpers/reverse', ['exports', 'ember-composable-helpers/helpers/reverse'], function (exports, _emberComposableHelpersHelpersReverse) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersReverse['default'];
    }
  });
  Object.defineProperty(exports, 'reverse', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersReverse.reverse;
    }
  });
});
define('beerjs-moscow/helpers/route-action', ['exports', 'ember-route-action-helper/helpers/route-action'], function (exports, _emberRouteActionHelperHelpersRouteAction) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRouteActionHelperHelpersRouteAction['default'];
    }
  });
});
define('beerjs-moscow/helpers/shuffle', ['exports', 'ember-composable-helpers/helpers/shuffle'], function (exports, _emberComposableHelpersHelpersShuffle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersShuffle['default'];
    }
  });
  Object.defineProperty(exports, 'shuffle', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersShuffle.shuffle;
    }
  });
});
define('beerjs-moscow/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('beerjs-moscow/helpers/slice', ['exports', 'ember-composable-helpers/helpers/slice'], function (exports, _emberComposableHelpersHelpersSlice) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersSlice['default'];
    }
  });
  Object.defineProperty(exports, 'slice', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersSlice.slice;
    }
  });
});
define('beerjs-moscow/helpers/sort-by', ['exports', 'ember-composable-helpers/helpers/sort-by'], function (exports, _emberComposableHelpersHelpersSortBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersSortBy['default'];
    }
  });
  Object.defineProperty(exports, 'sortBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersSortBy.sortBy;
    }
  });
});
define('beerjs-moscow/helpers/take', ['exports', 'ember-composable-helpers/helpers/take'], function (exports, _emberComposableHelpersHelpersTake) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersTake['default'];
    }
  });
  Object.defineProperty(exports, 'take', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersTake.take;
    }
  });
});
define('beerjs-moscow/helpers/titleize', ['exports', 'ember-composable-helpers/helpers/titleize'], function (exports, _emberComposableHelpersHelpersTitleize) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersTitleize['default'];
    }
  });
  Object.defineProperty(exports, 'titleize', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersTitleize.titleize;
    }
  });
});
define('beerjs-moscow/helpers/toggle-action', ['exports', 'ember-composable-helpers/helpers/toggle-action'], function (exports, _emberComposableHelpersHelpersToggleAction) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersToggleAction['default'];
    }
  });
});
define('beerjs-moscow/helpers/toggle', ['exports', 'ember-composable-helpers/helpers/toggle'], function (exports, _emberComposableHelpersHelpersToggle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersToggle['default'];
    }
  });
  Object.defineProperty(exports, 'toggle', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersToggle.toggle;
    }
  });
});
define('beerjs-moscow/helpers/truncate', ['exports', 'ember-composable-helpers/helpers/truncate'], function (exports, _emberComposableHelpersHelpersTruncate) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersTruncate['default'];
    }
  });
  Object.defineProperty(exports, 'truncate', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersTruncate.truncate;
    }
  });
});
define('beerjs-moscow/helpers/underscore', ['exports', 'ember-composable-helpers/helpers/underscore'], function (exports, _emberComposableHelpersHelpersUnderscore) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersUnderscore['default'];
    }
  });
  Object.defineProperty(exports, 'underscore', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersUnderscore.underscore;
    }
  });
});
define('beerjs-moscow/helpers/union', ['exports', 'ember-composable-helpers/helpers/union'], function (exports, _emberComposableHelpersHelpersUnion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersUnion['default'];
    }
  });
  Object.defineProperty(exports, 'union', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersUnion.union;
    }
  });
});
define('beerjs-moscow/helpers/w', ['exports', 'ember-composable-helpers/helpers/w'], function (exports, _emberComposableHelpersHelpersW) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersW['default'];
    }
  });
  Object.defineProperty(exports, 'w', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersW.w;
    }
  });
});
define('beerjs-moscow/helpers/without', ['exports', 'ember-composable-helpers/helpers/without'], function (exports, _emberComposableHelpersHelpersWithout) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersWithout['default'];
    }
  });
  Object.defineProperty(exports, 'without', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersWithout.without;
    }
  });
});
define('beerjs-moscow/helpers/xor', ['exports', 'ember', 'ember-truth-helpers/helpers/xor'], function (exports, _ember, _emberTruthHelpersHelpersXor) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersXor.xorHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersXor.xorHelper);
  }

  exports['default'] = forExport;
});
define('beerjs-moscow/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'beerjs-moscow/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _beerjsMoscowConfigEnvironment) {
  var _config$APP = _beerjsMoscowConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('beerjs-moscow/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('beerjs-moscow/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('beerjs-moscow/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('beerjs-moscow/initializers/emberfire', ['exports', 'emberfire/initializers/emberfire'], function (exports, _emberfireInitializersEmberfire) {
  exports['default'] = _emberfireInitializersEmberfire['default'];
});
define('beerjs-moscow/initializers/export-application-global', ['exports', 'ember', 'beerjs-moscow/config/environment'], function (exports, _ember, _beerjsMoscowConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_beerjsMoscowConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _beerjsMoscowConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_beerjsMoscowConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('beerjs-moscow/initializers/initialize-torii-callback', ['exports', 'torii/redirect-handler'], function (exports, _toriiRedirectHandler) {
  exports['default'] = {
    name: 'torii-callback',
    before: 'torii',
    initialize: function initialize(application) {
      if (arguments[1]) {
        // Ember < 2.1
        application = arguments[1];
      }
      application.deferReadiness();
      _toriiRedirectHandler['default'].handle(window)['catch'](function () {
        application.advanceReadiness();
      });
    }
  };
});
define('beerjs-moscow/initializers/initialize-torii-session', ['exports', 'torii/bootstrap/session', 'torii/configuration'], function (exports, _toriiBootstrapSession, _toriiConfiguration) {
  exports['default'] = {
    name: 'torii-session',
    after: 'torii',

    initialize: function initialize(application) {
      if (arguments[1]) {
        // Ember < 2.1
        application = arguments[1];
      }
      var configuration = (0, _toriiConfiguration.getConfiguration)();
      if (!configuration.sessionServiceName) {
        return;
      }

      (0, _toriiBootstrapSession['default'])(application, configuration.sessionServiceName);

      var sessionFactoryName = 'service:' + configuration.sessionServiceName;
      application.inject('adapter', configuration.sessionServiceName, sessionFactoryName);
    }
  };
});
define('beerjs-moscow/initializers/initialize-torii', ['exports', 'torii/bootstrap/torii', 'torii/configuration', 'beerjs-moscow/config/environment'], function (exports, _toriiBootstrapTorii, _toriiConfiguration, _beerjsMoscowConfigEnvironment) {

  var initializer = {
    name: 'torii',
    initialize: function initialize(application) {
      if (arguments[1]) {
        // Ember < 2.1
        application = arguments[1];
      }
      (0, _toriiConfiguration.configure)(_beerjsMoscowConfigEnvironment['default'].torii || {});
      (0, _toriiBootstrapTorii['default'])(application);
      application.inject('route', 'torii', 'service:torii');
    }
  };

  exports['default'] = initializer;
});
define('beerjs-moscow/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('beerjs-moscow/initializers/leaflet-assets', ['exports', 'beerjs-moscow/config/environment'], function (exports, _beerjsMoscowConfigEnvironment) {
  exports.initialize = initialize;

  /* global L */

  function initialize() /* container, application */{
    L.Icon.Default.imagePath = (_beerjsMoscowConfigEnvironment['default'].rootURL || _beerjsMoscowConfigEnvironment['default'].baseURL || '/') + 'assets/images/';
  }

  exports['default'] = {
    name: 'leaflet-assets',
    initialize: initialize
  };
});
define('beerjs-moscow/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('beerjs-moscow/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('beerjs-moscow/initializers/truth-helpers', ['exports', 'ember', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersUtilsRegisterHelper, _emberTruthHelpersHelpersAnd, _emberTruthHelpersHelpersOr, _emberTruthHelpersHelpersEqual, _emberTruthHelpersHelpersNot, _emberTruthHelpersHelpersIsArray, _emberTruthHelpersHelpersNotEqual, _emberTruthHelpersHelpersGt, _emberTruthHelpersHelpersGte, _emberTruthHelpersHelpersLt, _emberTruthHelpersHelpersLte) {
  exports.initialize = initialize;

  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (_ember['default'].Helper) {
      return;
    }

    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('and', _emberTruthHelpersHelpersAnd.andHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('or', _emberTruthHelpersHelpersOr.orHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('eq', _emberTruthHelpersHelpersEqual.equalHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not', _emberTruthHelpersHelpersNot.notHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('is-array', _emberTruthHelpersHelpersIsArray.isArrayHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not-eq', _emberTruthHelpersHelpersNotEqual.notEqualHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gt', _emberTruthHelpersHelpersGt.gtHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gte', _emberTruthHelpersHelpersGte.gteHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lt', _emberTruthHelpersHelpersLt.ltHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lte', _emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define("beerjs-moscow/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('beerjs-moscow/instance-initializers/form-for-initializer', ['exports', 'ember', 'beerjs-moscow/config/environment'], function (exports, _ember, _beerjsMoscowConfigEnvironment) {
  exports.initialize = initialize;
  var merge = _ember['default'].merge;
  var set = _ember['default'].set;

  var DEFAULT_CONFIG = {
    buttonClasses: ['form-button'],
    fieldClasses: ['form-field'],
    fieldHasErrorClasses: ['form-field--has-errors'],
    errorClasses: ['form-field--errors'],
    hintClasses: ['form-field--hint'],
    inputClasses: ['form-field--control'],
    labelClasses: ['form-field--label'],
    resetClasses: ['form-button--reset'],
    submitClasses: ['form-button--submit']
  };

  function initialize(application) {
    var formForConfig = merge(DEFAULT_CONFIG, _beerjsMoscowConfigEnvironment['default']['ember-form-for']);
    var configService = application.lookup('service:ember-form-for/config');

    Object.keys(formForConfig).forEach(function (key) {
      set(configService, key, formForConfig[key]);
    });
  }

  exports['default'] = {
    name: 'form-for-initializer',
    initialize: initialize
  };
});
define('beerjs-moscow/instance-initializers/setup-routes', ['exports', 'torii/bootstrap/routing', 'torii/configuration', 'torii/router-dsl-ext'], function (exports, _toriiBootstrapRouting, _toriiConfiguration, _toriiRouterDslExt) {
  exports['default'] = {
    name: 'torii-setup-routes',
    initialize: function initialize(applicationInstance, registry) {
      var configuration = (0, _toriiConfiguration.getConfiguration)();

      if (!configuration.sessionServiceName) {
        return;
      }

      var router = applicationInstance.get('router');
      var setupRoutes = function setupRoutes() {
        var authenticatedRoutes = router.router.authenticatedRoutes;
        var hasAuthenticatedRoutes = !Ember.isEmpty(authenticatedRoutes);
        if (hasAuthenticatedRoutes) {
          (0, _toriiBootstrapRouting['default'])(applicationInstance, authenticatedRoutes);
        }
        router.off('willTransition', setupRoutes);
      };
      router.on('willTransition', setupRoutes);
    }
  };
});
define('beerjs-moscow/instance-initializers/walk-providers', ['exports', 'torii/lib/container-utils', 'torii/configuration'], function (exports, _toriiLibContainerUtils, _toriiConfiguration) {
  exports['default'] = {
    name: 'torii-walk-providers',
    initialize: function initialize(applicationInstance) {
      var configuration = (0, _toriiConfiguration.getConfiguration)();
      // Walk all configured providers and eagerly instantiate
      // them. This gives providers with initialization side effects
      // like facebook-connect a chance to load up assets.
      for (var key in configuration.providers) {
        if (configuration.providers.hasOwnProperty(key)) {
          (0, _toriiLibContainerUtils.lookup)(applicationInstance, 'torii-provider:' + key);
        }
      }
    }
  };
});
define('beerjs-moscow/models/bar', ['exports', 'ember-data/model', 'ember-data/attr', 'ember-computed-decorators'], function (exports, _emberDataModel, _emberDataAttr, _emberComputedDecorators) {
  function _createDecoratedObject(descriptors) { var target = {}; for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = true; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } } if (descriptor.initializer) { descriptor.value = descriptor.initializer.call(target); } Object.defineProperty(target, key, descriptor); } return target; }

  exports['default'] = _emberDataModel['default'].extend(_createDecoratedObject([{
    key: 'name',

    // ----- Attributes -----
    initializer: function initializer() {
      return (0, _emberDataAttr['default'])('string');
    }
  }, {
    key: 'address',
    initializer: function initializer() {
      return (0, _emberDataAttr['default'])('string');
    }
  }, {
    key: 'description',
    initializer: function initializer() {
      return (0, _emberDataAttr['default'])('string');
    }
  }, {
    key: 'lat',
    initializer: function initializer() {
      return (0, _emberDataAttr['default'])('number');
    }
  }, {
    key: 'lng',
    initializer: function initializer() {
      return (0, _emberDataAttr['default'])('number');
    }
  }, {
    key: 'popupOpen',

    // ----- Static properties -----
    initializer: function initializer() {
      return false;
    }
  }, {
    key: 'marker',
    decorators: [(0, _emberComputedDecorators['default'])('lat', 'lng')],
    value: function marker(lat, lng) {
      return L.marker([lat, lng]);
    }
  }]));
});

// ----- Computed properties -----
define('beerjs-moscow/pods/application/route', ['exports', 'ember-route'], function (exports, _emberRoute) {
  exports['default'] = _emberRoute['default'].extend({

    // ----- Services -----

    // ----- Overridden properties -----

    // ----- Static properties -----

    // ----- Computed properties -----

    // ----- Overridden Methods -----
    beforeModel: function beforeModel() {
      return this.get('session').fetch('firebase')['catch'](function () {});
    },

    // ----- Custom Methods -----

    // ----- Events and observers -----

    // ----- Tasks -----

    // ----- Actions -----
    actions: {
      authenticate: function authenticate(provider) {
        return this.get('session').open('firebase', { provider: provider });
      },

      invalidateSession: function invalidateSession() {
        return this.get('session').close('firebase');
      },

      accessDenied: function accessDenied() {
        this.transitionTo('bars');
      }
    }
  });
});
define("beerjs-moscow/pods/application/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "RDakViQB", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"BeerJS Moscow\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"session\",\"isAuthenticated\"]]],null,3,2],[\"text\",\"\\n\"],[\"open-element\",\"hr\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Menu\"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"index\"],null,1],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"bars\"],null,0],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"hr\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\\n\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"https://github.com/lolmaus/beerjs-moscow\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"style\",\"position: absolute; top: 0; right: 0; border: 0;\"],[\"static-attr\",\"src\",\"https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67\"],[\"static-attr\",\"alt\",\"Fork me on GitHub\"],[\"static-attr\",\"data-canonical-src\",\"https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Bars\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Index\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"button\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"authenticate\",\"github\"]],[\"flush-element\"],[\"text\",\"Sign in with GitHub\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  Logged in as \"],[\"append\",[\"unknown\",[\"session\",\"currentUser\",\"displayName\"]],false],[\"text\",\"\\n  \"],[\"open-element\",\"button\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"invalidateSession\"]],[\"flush-element\"],[\"text\",\"Sign out\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "beerjs-moscow/pods/application/template.hbs" } });
});
define('beerjs-moscow/pods/bars/bar/controller', ['exports', 'ember-controller', 'ember-changeset', 'ember-changeset-validations', 'ember-computed-decorators', 'ember-runloop', 'rsvp', 'beerjs-moscow/validations/bar', 'ember-computed', 'ember-awesome-macros/conditional'], function (exports, _emberController, _emberChangeset, _emberChangesetValidations, _emberComputedDecorators, _emberRunloop, _rsvp, _beerjsMoscowValidationsBar, _emberComputed, _emberAwesomeMacrosConditional) {
  function _createDecoratedObject(descriptors) { var target = {}; for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = true; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } } if (descriptor.initializer) { descriptor.value = descriptor.initializer.call(target); } Object.defineProperty(target, key, descriptor); } return target; }

  exports['default'] = _emberController['default'].extend(_createDecoratedObject([{
    key: 'isNew',

    // ----- Services -----

    // ----- Overridden properties -----

    // ----- Static properties -----

    // ----- Computed properties -----
    initializer: function initializer() {
      return (0, _emberComputed.equal)('model.barId', 'new');
    }
  }, {
    key: 'bar',
    initializer: function initializer() {
      return (0, _emberAwesomeMacrosConditional['default'])('isNew', 'newBar', 'model.currentBar');
    }
  }, {
    key: 'newBar',
    decorators: [_emberComputedDecorators['default']],
    value: function newBar() {
      return this._newBar();
    }
  }, {
    key: 'changeset',
    decorators: [(0, _emberComputedDecorators['default'])('bar')],
    value: function changeset(bar) {
      console.log('bar', bar);
      return new _emberChangeset['default'](bar, (0, _emberChangesetValidations['default'])(_beerjsMoscowValidationsBar['default']), _beerjsMoscowValidationsBar['default']);
    }
  }, {
    key: '_newBar',

    // ----- Overridden Methods -----

    // ----- Custom Methods -----
    value: function _newBar() {
      var store = this.get('store');
      return store.createRecord('bar');
    }
  }, {
    key: '_resetNewBar',
    value: function _resetNewBar() {
      this.set('newBar', this._newBar());
    }
  }, {
    key: '_resetExistingBar',
    value: function _resetExistingBar() {
      this.get('model.currentBar').rollbackAttributes();
    }
  }, {
    key: 'reset',
    value: function reset() {
      console.log("this.get('isNew')", this.get('isNew'));
      this.get('isNew') ? this._resetNewBar() : this._resetExistingBar();
    }
  }, {
    key: 'actions',

    // ----- Events and observers -----

    // ----- Tasks -----

    // ----- Actions -----
    initializer: function initializer() {
      return {
        save: function save() {
          var _this = this;

          var changeset = this.get('changeset');

          return changeset.validate().then(function () {
            if (changeset.get('isInvalid')) return _rsvp['default'].reject();
            changeset.save();
          }).then(function () {
            (0, _emberRunloop.next)(function () {
              _this.reset();
              _this.transitionToRoute('bars');
            });
          });
        },

        reset: function reset() {
          this.reset();
        }
      };
    }
  }]));
});
define('beerjs-moscow/pods/bars/bar/route', ['exports', 'ember-route', 'rsvp'], function (exports, _emberRoute, _rsvp) {
  exports['default'] = _emberRoute['default'].extend({

    // ----- Services -----

    // ----- Overridden properties -----

    // ----- Static properties -----

    // ----- Computed properties -----

    // ----- Overridden Methods -----
    model: function model(_ref) {
      var barId = _ref.barId;

      var store = this.get('store');

      return _rsvp['default'].hash({
        barId: barId,
        currentBar: barId === 'new' ? null : store.findRecord('bar', barId)
      });
    }

  });
});
// ----- Custom Methods -----

// ----- Events and observers -----

// ----- Tasks -----

// ----- Actions -----
// actions: {
// }
define("beerjs-moscow/pods/bars/bar/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "aw76NL6A", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"append\",[\"helper\",[\"if\"],[[\"get\",[\"isNew\"]],\"New\",\"Edit\"],null],false],[\"text\",\" bar\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"link-to\"],[\"bars\"],null,0],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"edit-bar\"],null,[[\"bar\",\"saveAction\",\"resetAction\"],[[\"get\",[\"changeset\"]],[\"helper\",[\"action\"],[[\"get\",[null]],\"save\"],null],[\"helper\",[\"action\"],[[\"get\",[null]],\"reset\"],null]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Back to the list\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "beerjs-moscow/pods/bars/bar/template.hbs" } });
});
define('beerjs-moscow/pods/bars/index/controller', ['exports', 'ember-controller', 'ember-computed', 'ember-computed-decorators', 'ember-awesome-macros/conditional'], function (exports, _emberController, _emberComputed, _emberComputedDecorators, _emberAwesomeMacrosConditional) {
  function _createDecoratedObject(descriptors) { var target = {}; for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = true; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } } if (descriptor.initializer) { descriptor.value = descriptor.initializer.call(target); } Object.defineProperty(target, key, descriptor); } return target; }

  exports['default'] = _emberController['default'].extend(_createDecoratedObject([{
    key: 'mapCenter',

    // ----- Services -----

    // ----- Overridden properties -----

    // ----- Static properties -----
    initializer: function initializer() {
      return [55.755826, 37.6173];
    }
  }, {
    key: 'moscowBounds',
    decorators: [_emberComputedDecorators['default']],
    value: function moscowBounds() {
      return L.featureGroup([L.marker([56.061303, 37.033539]), L.marker([55.452384, 38.162384])]).getBounds();
    }
  }, {
    key: 'minMarkersForBounds',
    initializer: function initializer() {
      return 2;
    }
  }, {
    key: 'existingBars',

    // ----- Computed properties -----
    initializer: function initializer() {
      return (0, _emberComputed.filterBy)('model.bars', 'isNew', false);
    }
  }, {
    key: 'markers',
    initializer: function initializer() {
      return (0, _emberComputed.mapBy)('existingBars', 'marker');
    }
  }, {
    key: 'featureGroup',
    decorators: [(0, _emberComputedDecorators['default'])('markers.[]')],
    value: function featureGroup(markers) {
      return L.featureGroup(markers);
    }
  }, {
    key: 'boundsFromBars',
    decorators: [(0, _emberComputedDecorators['default'])('featureGroup')],
    value: function boundsFromBars(featureGroup) {
      return featureGroup.getBounds();
    }
  }, {
    key: 'enoughBarsForBounds',
    decorators: [(0, _emberComputedDecorators['default'])('existingBars.length')],
    value: function enoughBarsForBounds(length) {
      return length >= 2;
    }
  }, {
    key: 'bounds',
    initializer: function initializer() {
      return (0, _emberAwesomeMacrosConditional['default'])('enoughBarsForBounds', 'boundsFromBars', 'moscowBounds');
    }
  }, {
    key: 'actions',

    // ----- Overridden Methods -----

    // ----- Custom Methods -----

    // ----- Events and observers -----

    // ----- Tasks -----

    // ----- Actions -----
    initializer: function initializer() {
      return {
        remove: function remove(bar) {
          return bar.destroyRecord();
        },

        centerMap: function centerMap(bar) {
          var _bar$getProperties = bar.getProperties('lat', 'lng');

          var lat = _bar$getProperties.lat;
          var lng = _bar$getProperties.lng;

          this.set('mapCenter', [lat, lng]);
          bar.set('popupOpen', true);
        },

        closeAllPopups: function closeAllPopups() {
          this.get('model.bars').forEach(function (bar) {
            return bar.set('popupOpen', false);
          });
        }
      };
    }
  }]));
});
define('beerjs-moscow/pods/bars/index/route', ['exports', 'ember-route', 'rsvp'], function (exports, _emberRoute, _rsvp) {
  exports['default'] = _emberRoute['default'].extend({

    // ----- Services -----

    // ----- Overridden properties -----

    // ----- Static properties -----

    // ----- Computed properties -----

    // ----- Overridden Methods -----
    model: function model() {
      var store = this.get('store');

      return _rsvp['default'].hash({
        bars: store.findAll('bar')
      });
    }

  });
});
// ----- Custom Methods -----

// ----- Events and observers -----

// ----- Tasks -----

// ----- Actions -----
// actions: {
// }
define("beerjs-moscow/pods/bars/index/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "evwsFrRj", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Bars\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"session\",\"isAuthenticated\"]]],null,10],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"style\",\"position: relative; height: 400px;\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"leaflet-map\"],null,[[\"bounds\",\"scrollWheelZoom\",\"onClick\"],[[\"get\",[\"bounds\"]],false,[\"helper\",[\"action\"],[[\"get\",[null]],\"closeAllPopups\"],null]]],8],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"existingBars\"]]],null,2],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"edit\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"block\",[\"link-to\"],[\"bars.bar\",[\"get\",[\"bar\",\"id\"]]],null,0],[\"text\",\"\\n        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"remove\",[\"get\",[\"bar\"]]]],[\"flush-element\"],[\"text\",\"×\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"centerMap\",[\"get\",[\"bar\"]]]],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"unknown\",[\"bar\",\"name\"]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"unknown\",[\"bar\",\"address\"]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"session\",\"isAuthenticated\"]]],null,1],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"bar\"]},{\"statements\":[[\"text\",\"Edit\"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n              \"],[\"block\",[\"link-to\"],[\"bars.bar\",[\"get\",[\"bar\",\"id\"]]],null,3],[\"text\",\"\\n              \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"remove\",[\"get\",[\"bar\"]]]],[\"flush-element\"],[\"text\",\"Delete\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"          \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"bar\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"bar\",\"address\"]],false],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"bar\",\"description\"]],false],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"session\",\"isAuthenticated\"]]],null,4]],\"locals\":[]},{\"statements\":[[\"block\",[\"popup-layer\"],null,[[\"popupOpen\"],[[\"get\",[\"bar\",\"popupOpen\"]]]],5]],\"locals\":[]},{\"statements\":[[\"block\",[\"marker-layer\"],null,[[\"location\"],[[\"helper\",[\"array\"],[[\"get\",[\"bar\",\"lat\"]],[\"get\",[\"bar\",\"lng\"]]],null]]],6]],\"locals\":[\"bar\"]},{\"statements\":[[\"text\",\"    \"],[\"append\",[\"helper\",[\"tile-layer\"],null,[[\"url\"],[\"http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png\"]]],false],[\"text\",\"\\n\\n\"],[\"block\",[\"each\"],[[\"get\",[\"existingBars\"]]],null,7]],\"locals\":[]},{\"statements\":[[\"text\",\"Add a bar\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"block\",[\"link-to\"],[\"bars.bar\",\"new\"],null,9],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "beerjs-moscow/pods/bars/index/template.hbs" } });
});
define("beerjs-moscow/pods/bars/loading/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "5yi++QBA", "block": "{\"statements\":[[\"text\",\"Loading...\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "beerjs-moscow/pods/bars/loading/template.hbs" } });
});
define('beerjs-moscow/pods/components/edit-bar/component', ['exports', 'ember-component', 'ember-service/inject', 'ember-computed-decorators'], function (exports, _emberComponent, _emberServiceInject, _emberComputedDecorators) {
  function _createDecoratedObject(descriptors) { var target = {}; for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = true; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } } if (descriptor.initializer) { descriptor.value = descriptor.initializer.call(target); } Object.defineProperty(target, key, descriptor); } return target; }

  exports['default'] = _emberComponent['default'].extend(_createDecoratedObject([{
    key: 'bar',

    // ----- Arguments -----
    initializer: function initializer() {
      return undefined;
    }
  }, {
    key: 'saveAction',
    initializer: function initializer() {
      return undefined;
    }
  }, {
    key: 'resetAction',
    initializer: function initializer() {
      return undefined;
    }
  }, {
    key: 'yandexMaps',

    // ----- Services -----
    initializer: function initializer() {
      return (0, _emberServiceInject['default'])();
    }
  }, {
    key: 'googleMaps',
    initializer: function initializer() {
      return (0, _emberServiceInject['default'])();
    }
  }, {
    key: 'classNames',

    // ----- Overridden properties -----
    initializer: function initializer() {
      return ['editBar'];
    }
  }, {
    key: 'foundAddresses',

    // ----- Static properties -----
    initializer: function initializer() {
      return null;
    }
  }, {
    key: 'mapCenterLat',
    decorators: [_emberComputedDecorators['default']],
    value: function mapCenterLat() {
      return this.get('bar.lat');
    }
  }, {
    key: 'mapCenterLng',
    decorators: [_emberComputedDecorators['default']],
    value: function mapCenterLng() {
      return this.get('bar.lng');
    }
  }, {
    key: '_applyFoundAddresses',

    // ----- Computed properties -----

    // ----- Overridden Methods -----

    // ----- Custom Methods -----
    value: function _applyFoundAddresses(foundAddresses) {
      if (foundAddresses.length === 1) {
        this.send('fillCoordsAndAddress', foundAddresses[0]);
        return;
      }

      this.setProperties({ foundAddresses: foundAddresses });
    }
  }, {
    key: 'actions',

    // ----- Events and observers -----

    // ----- Tasks -----

    // ----- Actions -----
    initializer: function initializer() {
      return {
        fillCoordsAndAddress: function fillCoordsAndAddress(_ref) {
          var name = _ref.name;
          var lat = _ref.lat;
          var lng = _ref.lng;
          var address = _ref.address;
          var _ref$useAddress = _ref.useAddress;
          var useAddress = _ref$useAddress === undefined ? true : _ref$useAddress;

          var bar = this.get('bar');

          if (lat && lng) {
            bar.setProperties({ lat: lat, lng: lng });
            this.setProperties({ mapCenterLat: lat, mapCenterLng: lng });
          }

          if (address && useAddress) bar.setProperties({ address: address });
          if (name) bar.setProperties({ name: name });

          this.set('foundAddresses', null);
        },

        fillCoordsFromAddress: function fillCoordsFromAddress() {
          var _this = this;

          var address = this.get('bar.address');
          if (!address.length) return;

          var yandexMaps = this.get('yandexMaps');

          yandexMaps.find(address, false).then(function (foundAddresses) {
            return _this._applyFoundAddresses(foundAddresses);
          });
        },

        fillCoordsFromMap: function fillCoordsFromMap(_ref2) {
          var _ref2$latlng = _ref2.latlng;
          var lat = _ref2$latlng.lat;
          var lng = _ref2$latlng.lng;

          this.send('fillCoordsAndAddress', { lat: lat, lng: lng });
        },

        fillAddressFromCoords: function fillAddressFromCoords() {
          var bar = this.get('bar');
          var lat = bar.get('lat');
          var lng = bar.get('lng');

          this.get('yandexMaps').find([lat, lng]).then(function (result) {
            if (!result || !result.length) return;
            bar.set('address', result[0].name);
          });
        },

        closeAddresses: function closeAddresses() {
          this.set('foundAddresses', null);
        },

        fillAddressAndCoordsFromName: function fillAddressAndCoordsFromName() {
          var _this2 = this;

          var name = this.get('bar.name');

          this.get('googleMaps').findBar(name).then(function (foundAddresses) {
            return _this2._applyFoundAddresses(foundAddresses);
          });
        }
      };
    }
  }]));
});
define("beerjs-moscow/pods/components/edit-bar/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "VhnN1iCD", "block": "{\"statements\":[[\"block\",[\"form-for\"],[[\"get\",[\"bar\"]]],[[\"submit\",\"reset\"],[[\"get\",[\"saveAction\"]],[\"get\",[\"resetAction\"]]]],5],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"style\",\"position: relative; height: 400px;\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"leaflet-map\"],null,[[\"center\",\"zoom\",\"onClick\",\"scrollWheelZoom\"],[[\"helper\",[\"array\"],[[\"helper\",[\"or\"],[[\"get\",[\"mapCenterLat\"]],55.755826],null],[\"helper\",[\"or\"],[[\"get\",[\"mapCenterLng\"]],37.6173],null]],null],12,[\"helper\",[\"action\"],[[\"get\",[null]],\"fillCoordsFromMap\"],null],false]],1],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"      \"],[\"append\",[\"helper\",[\"marker-layer\"],null,[[\"location\",\"draggable\",\"onDrag\"],[[\"helper\",[\"array\"],[[\"get\",[\"bar\",\"lat\"]],[\"get\",[\"bar\",\"lng\"]]],null],true,[\"helper\",[\"action\"],[[\"get\",[null]],\"fillCoordsFromMap\"],null]]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"append\",[\"helper\",[\"tile-layer\"],null,[[\"url\"],[\"http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png\"]]],false],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"helper\",[\"and\"],[[\"get\",[\"bar\",\"lat\"]],[\"get\",[\"bar\",\"lng\"]]],null]],null,0]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"fillCoordsAndAddress\",[\"get\",[\"address\"]]]],[\"flush-element\"],[\"text\",\"\\n                \"],[\"append\",[\"unknown\",[\"address\",\"name\"]],false],[\"text\",\" (\"],[\"append\",[\"unknown\",[\"address\",\"address\"]],false],[\"text\",\")\\n              \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"address\"]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"\"],[\"static-attr\",\"style\",\"text-align: right;\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"closeAddresses\"]],[\"flush-element\"],[\"text\",\"\\n          ×\\n        \"],[\"close-element\"],[\"text\",\"\\n\\n        \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"style\",\"\\n          position:         absolute;\\n          top:              100%;\\n          left:             0;\\n          background-color: white;\\n          border:           1px solid black;\\n          padding:          1rem;\\n          max-height:       70vh;\\n          overflow-x:       auto;\\n          z-index:          100000;\\n        \"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"foundAddresses\"]]],null,2],[\"text\",\"        \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"click-outside\"],null,[[\"action\"],[[\"helper\",[\"action\"],[[\"get\",[null]],\"closeAddresses\"],null]]],3]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"append\",[\"helper\",[\"f\",\"text-field\"],[\"name\"],null],false],[\"text\",\"\\n\\n  \"],[\"open-element\",\"button\",[]],[\"dynamic-attr\",\"disabled\",[\"helper\",[\"not\"],[[\"get\",[\"bar\",\"name\",\"length\"]]],null],null],[\"modifier\",[\"action\"],[[\"get\",[null]],\"fillAddressAndCoordsFromName\"]],[\"flush-element\"],[\"text\",\"Fill address and coords from bar name (Google)\"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"append\",[\"helper\",[\"f\",\"text-field\"],[\"address\"],null],false],[\"text\",\"\\n\\n  \"],[\"append\",[\"helper\",[\"f\",\"number-field\"],[\"lat\"],null],false],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"f\",\"number-field\"],[\"lng\"],null],false],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"style\",\"position: relative\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"dynamic-attr\",\"disabled\",[\"helper\",[\"not\"],[[\"get\",[\"bar\",\"address\",\"length\"]]],null],null],[\"modifier\",[\"action\"],[[\"get\",[null]],\"fillCoordsFromAddress\"]],[\"flush-element\"],[\"text\",\"Fill coords from address (Yandex)\"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"button\",[]],[\"dynamic-attr\",\"disabled\",[\"helper\",[\"or\"],[[\"helper\",[\"not\"],[[\"get\",[\"bar\",\"lat\"]]],null],[\"helper\",[\"not\"],[[\"get\",[\"bar\",\"lng\"]]],null]],null],null],[\"modifier\",[\"action\"],[[\"get\",[null]],\"fillAddressFromCoords\"]],[\"flush-element\"],[\"text\",\"Fill address from coords (Yandex)\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"foundAddresses\"]]],null,4],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"append\",[\"helper\",[\"f\",\"submit\"],[\"Save\"],null],false],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"f\",\"reset\"],[\"Clear\"],null],false],[\"text\",\"\\n\"]],\"locals\":[\"f\"]}],\"hasPartials\":false}", "meta": { "moduleName": "beerjs-moscow/pods/components/edit-bar/template.hbs" } });
});
define("beerjs-moscow/pods/index/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "mnEEWd60", "block": "{\"statements\":[[\"text\",\"Welcome. ^_^\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "beerjs-moscow/pods/index/template.hbs" } });
});
define('beerjs-moscow/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('beerjs-moscow/router', ['exports', 'ember', 'beerjs-moscow/config/environment'], function (exports, _ember, _beerjsMoscowConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _beerjsMoscowConfigEnvironment['default'].locationType,
    rootURL: _beerjsMoscowConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('bars', function () {
      this.authenticatedRoute('bar', { path: ':barId' });
    });
  });

  exports['default'] = Router;
});
define('beerjs-moscow/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('beerjs-moscow/services/ember-form-for/config', ['exports', 'ember-form-for/services/ember-form-for/config'], function (exports, _emberFormForServicesEmberFormForConfig) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForServicesEmberFormForConfig['default'];
    }
  });
});
define('beerjs-moscow/services/firebase-app', ['exports', 'emberfire/services/firebase-app'], function (exports, _emberfireServicesFirebaseApp) {
  exports['default'] = _emberfireServicesFirebaseApp['default'];
});
define('beerjs-moscow/services/firebase', ['exports', 'emberfire/services/firebase'], function (exports, _emberfireServicesFirebase) {
  exports['default'] = _emberfireServicesFirebase['default'];
});
define('beerjs-moscow/services/google-maps', ['exports', 'ember-service', 'ember-computed-decorators', 'rsvp'], function (exports, _emberService, _emberComputedDecorators, _rsvp) {
  function _createDecoratedObject(descriptors) { var target = {}; for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = true; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } } if (descriptor.initializer) { descriptor.value = descriptor.initializer.call(target); } Object.defineProperty(target, key, descriptor); } return target; }

  exports['default'] = _emberService['default'].extend(_createDecoratedObject([{
    key: 'moscow',
    decorators: [_emberComputedDecorators['default']],
    value: function moscow() {
      return new google.maps.LatLng(55.755826, 37.6173);
    }
  }, {
    key: '_service',
    decorators: [(0, _emberComputedDecorators['default'])('moscow')],
    value: function _service(moscow) {
      var map = new google.maps.Map(document.createElement('div'), {
        center: moscow,
        zoom: 15
      });
      return new google.maps.places.PlacesService(map);
    }
  }, {
    key: '_wrapInPromise',

    // ----- Computed properties -----

    // ----- Overridden Methods -----

    // ----- Custom Methods -----
    value: function _wrapInPromise(callback) {
      return new _rsvp['default'].Promise(function (resolve, reject) {
        callback(function (results, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) resolve(results);else reject(results);
        });
      });
    }
  }, {
    key: 'findBar',
    value: function findBar(query) {
      var _service = this.get('_service');
      var location = this.get('moscow');

      return this._wrapInPromise(function (callback) {
        return _service.textSearch({
          query: query,
          type: 'bar',
          location: location,
          radius: 50000
        }, callback);
      }).then(function (results) {
        return results.map(function (result) {
          return {
            name: result.name,
            address: result.formatted_address,
            lat: result.geometry.location.lat(),
            lng: result.geometry.location.lng()
          };
        });
      });
    }
  }]));
});

// ----- Services -----

// ----- Overridden properties -----

// ----- Static properties -----

// ----- Events and observers -----

// ----- Tasks -----
define('beerjs-moscow/services/popup', ['exports', 'torii/services/popup'], function (exports, _toriiServicesPopup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _toriiServicesPopup['default'];
    }
  });
});
define('beerjs-moscow/services/torii-session', ['exports', 'torii/services/session'], function (exports, _toriiServicesSession) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _toriiServicesSession['default'];
    }
  });
});
define('beerjs-moscow/services/torii', ['exports', 'torii/services/torii'], function (exports, _toriiServicesTorii) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _toriiServicesTorii['default'];
    }
  });
});
define('beerjs-moscow/services/yandex-maps', ['exports', 'ember-service', 'rsvp'], function (exports, _emberService, _rsvp) {
  var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

  exports['default'] = _emberService['default'].extend({

    // ----- Services -----

    // ----- Overridden properties -----

    // ----- Static properties -----

    // ----- Computed properties -----

    // ----- Overridden Methods -----

    // ----- Custom Methods -----
    find: function find(input) {
      var useAddress = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

      return this._wrapInRSVP(ymaps.geocode(input, {
        boundedBy: [[56.061303, 37.033539], [55.452384, 38.162384]], // Moscow
        json: true,
        results: 999
      })).then(function (result) {
        return result.GeoObjectCollection.featureMember.map(function (_ref) {
          var GeoObject = _ref.GeoObject;
          var name =
          // boundedBy: {Envelope: {lowerCorner, upperCorner}}
          GeoObject.name;
          var address = GeoObject.description;
          var pos = GeoObject.Point.pos;

          var _pos$split$map = pos.split(" ").map(function (item) {
            return parseFloat(item, 10);
          });

          var _pos$split$map2 = _slicedToArray(_pos$split$map, 2);

          var lng = _pos$split$map2[0];
          var lat = _pos$split$map2[1];

          // const [lowerLng, lowerLat] = lowerCorner.split(" ").map(item => parseFloat(item, 10))
          // const [upperLng, upperLat] = upperCorner.split(" ").map(item => parseFloat(item, 10))

          return {
            name: name,
            address: address,
            lat: lat,
            lng: lng,
            useAddress: useAddress
            // lowerLat,
            // lowerLng,
            // upperLat,
            // upperLng,
          };
        });
      });
    },

    _wrapInRSVP: function _wrapInRSVP(promise) {
      return new _rsvp['default'].Promise(function (resolve, reject) {
        return promise.then(resolve, reject);
      });
    }

  });
});
// ----- Events and observers -----

// ----- Tasks -----
define('beerjs-moscow/torii-adapters/firebase', ['exports', 'emberfire/torii-adapters/firebase'], function (exports, _emberfireToriiAdaptersFirebase) {
  exports['default'] = _emberfireToriiAdaptersFirebase['default'].extend({});
});
define('beerjs-moscow/torii-providers/firebase', ['exports', 'emberfire/torii-providers/firebase'], function (exports, _emberfireToriiProvidersFirebase) {
  exports['default'] = _emberfireToriiProvidersFirebase['default'];
});
define('beerjs-moscow/utils/titleize', ['exports', 'ember-composable-helpers/utils/titleize'], function (exports, _emberComposableHelpersUtilsTitleize) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersUtilsTitleize['default'];
    }
  });
});
define('beerjs-moscow/validations/bar', ['exports', 'ember-changeset-validations/validators'], function (exports, _emberChangesetValidationsValidators) {
  exports['default'] = {
    name: [(0, _emberChangesetValidationsValidators.validatePresence)(true)],

    address: [(0, _emberChangesetValidationsValidators.validatePresence)(true)],

    lat: [(0, _emberChangesetValidationsValidators.validatePresence)(true), (0, _emberChangesetValidationsValidators.validateNumber)({ gte: -90, lte: 90 })],

    lng: [(0, _emberChangesetValidationsValidators.validatePresence)(true), (0, _emberChangesetValidationsValidators.validateNumber)({ gte: -180, lte: 180 })]
  };
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('beerjs-moscow/config/environment', ['ember'], function(Ember) {
  var prefix = 'beerjs-moscow';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("beerjs-moscow/app")["default"].create({"name":"beerjs-moscow","version":"0.0.0+0f964d4e"});
}

/* jshint ignore:end */
//# sourceMappingURL=beerjs-moscow.map
