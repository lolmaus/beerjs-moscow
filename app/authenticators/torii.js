import ToriiAuthenticator from 'ember-simple-auth/authenticators/torii'
import service from 'ember-service/inject'
// import {getProperties} from 'ember-metal/get'
// import RSVP from 'rsvp'



export default ToriiAuthenticator.extend({

  // ----- Services -----
  torii: service(),



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
})
