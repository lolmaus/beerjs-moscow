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



  // ----- Overridden properties -----
  classNames: ['editBar'],



  // ----- Static properties -----
  foundAddresses: null,

  @computed
  mapCenterLat () { return this.get('bar.lat') },

  @computed
  mapCenterLng () { return this.get('bar.lng') },



  // ----- Computed properties -----



  // ----- Overridden Methods -----



  // ----- Custom Methods -----



  // ----- Events and observers -----



  // ----- Tasks -----



  // ----- Actions -----
  actions: {
    fillCoords ({lat, lng}) {
      this
        .get('bar')
        .setProperties({lat, lng})

      this.set('foundAddresses', null)
    },

    fillCoordsFromAddress () {
      const address = this.get('bar.address')
      if (!address.length) return

      const yandexMaps = this.get('yandexMaps')

      yandexMaps
        .find(address)
        .then(foundAddresses => {

          if (foundAddresses.length === 1) {
            const {lat, lng} = foundAddresses[0]
            this.send('fillCoords', {lat, lng})
            this.setProperties({mapCenterLat: lat, mapCenterLng: lng})
            return
          }

          this.setProperties({foundAddresses})
        })
    },

    fillCoordsFromMap ({latlng: {lat, lng}}) {
      this.send('fillCoords', {lat, lng})
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
    }
  }
})
