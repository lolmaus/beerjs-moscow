import Component from 'ember-component'
import service from 'ember-service/inject'
import computed from 'ember-computed-decorators'



export default Component.extend({

  // ----- Arguments -----
  bar:         undefined,
  saveAction:  undefined,
  resetAction: undefined,



  // ----- Services -----
  yandexMaps: service(),
  googleMaps: service(),



  // ----- Overridden properties -----
  classNames: ['editBar'],



  // ----- Static properties -----
  foundAddresses:     null,

  @computed
  mapCenterLat () { return this.get('bar.lat') },

  @computed
  mapCenterLng () { return this.get('bar.lng') },



  // ----- Computed properties -----



  // ----- Overridden Methods -----



  // ----- Custom Methods -----
  _applyFoundAddresses (foundAddresses) {
    if (foundAddresses.length === 1) {
      this.send('fillCoordsAndAddress', foundAddresses[0])
      return
    }

    this.setProperties({foundAddresses})
  },



  // ----- Events and observers -----



  // ----- Tasks -----



  // ----- Actions -----
  actions: {
    fillCoordsAndAddress ({name, lat, lng, address, useAddress = true}) {
      const bar = this.get('bar')

      if (lat && lng) {
        bar.setProperties({lat, lng})
        this.setProperties({mapCenterLat: lat, mapCenterLng: lng})
      }

      if (address && useAddress) bar.setProperties({address})
      if (name)                  bar.setProperties({name})

      this.set('foundAddresses', null)
    },

    fillCoordsFromAddress () {
      const address = this.get('bar.address')
      if (!address.length) return

      const yandexMaps = this.get('yandexMaps')

      yandexMaps
        .find(address, false)
        .then(foundAddresses => this._applyFoundAddresses(foundAddresses))
    },

    fillCoordsFromMap ({latlng: {lat, lng}}) {
      this.send('fillCoordsAndAddress', {lat, lng})
    },

    fillAddressFromCoords () {
      const bar = this.get('bar')
      const lat = bar.get('lat')
      const lng = bar.get('lng')

      this
        .get('yandexMaps')
        .find([lat, lng])
        .then(result => {
          if (!result || !result.length) return
          bar.set('address', result[0].name)
        })
    },

    closeAddresses () {
      this.set('foundAddresses', null)
    },

    fillAddressAndCoordsFromName () {
      const name = this.get('bar.name')

      this
        .get('googleMaps')
        .findBar(name)
        .then(foundAddresses => this._applyFoundAddresses(foundAddresses))
    }
  }
})
