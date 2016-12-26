import Component from 'ember-component'
import service from 'ember-service/inject'



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
          console.log({foundAddresses})

          if (foundAddresses.length === 1) {
            this.send('fillCoords', foundAddresses[0])
            return
          }

          this.setProperties({foundAddresses})
        })
    }
  }
})
