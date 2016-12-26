import Model from 'ember-data/model'
import attr from 'ember-data/attr'
import computed from 'ember-computed-decorators'



export default Model.extend({

  // ----- Attributes -----
  name:        attr('string'),
  address:     attr('string'),
  description: attr('string'),
  lat:         attr('number'),
  lng:         attr('number'),



  // ----- Static properties -----
  popupOpen: false,



  // ----- Computed properties -----
  @computed('lat', 'lng')
  marker    (lat,   lng) {
    return L.marker([lat, lng])
  },
})
