import Service from 'ember-service'
import computed from 'ember-computed-decorators'
import RSVP from 'rsvp'



export default Service.extend({

  // ----- Services -----



  // ----- Overridden properties -----



  // ----- Static properties -----
  @computed
  moscow () {
    return new google.maps.LatLng(55.755826, 37.6173)
  },

  @computed('moscow')
  _service (moscow) {
    const map    = new google.maps.Map(document.createElement('div'), {
      center: moscow,
      zoom: 15
    })
    return new google.maps.places.PlacesService(map)
  },



  // ----- Computed properties -----



  // ----- Overridden Methods -----



  // ----- Custom Methods -----
  _wrapInPromise (callback) {
    return new RSVP.Promise((resolve, reject) => {
      callback((results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) resolve(results)
        else reject(results)
      })
    })
  },

  findBar (query) {
    const _service = this.get('_service')
    const location = this.get('moscow')

    return this
      ._wrapInPromise(
        callback => _service.textSearch({
          query,
          type: 'bar',
          location,
          radius: 50000
        }, callback)
      )
      .then(results => results.map(result => ({
        name:    result.name,
        address: result.formatted_address,
        lat:     result.geometry.location.lat(),
        lng:     result.geometry.location.lng(),
      })))
  },



  // ----- Events and observers -----



  // ----- Tasks -----

})
