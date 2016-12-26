import Service from 'ember-service'
import RSVP from 'rsvp'



export default Service.extend({

  // ----- Services -----



  // ----- Overridden properties -----



  // ----- Static properties -----



  // ----- Computed properties -----



  // ----- Overridden Methods -----



  // ----- Custom Methods -----
  find (str) {
    const geocodePromise = ymaps.geocode(str, {
      boundedBy: [[56.061303, 37.033539], [55.452384, 38.162384]], // Moscow
      json:      true,
      results:   999,
    })

    return this._wrapInRSVP(geocodePromise)
      .then(result =>
        result
          .GeoObjectCollection
          .featureMember
          .map(({GeoObject}) => {
            const {
              name,
              description,
              Point: {pos},
              boundedBy: {Envelope: {lowerCorner, upperCorner}}
            } = GeoObject

            const [lat, lng]           = pos        .split(" ").map(item => parseFloat(item, 10))
            const [lowerLat, lowerLng] = lowerCorner.split(" ").map(item => parseFloat(item, 10))
            const [upperLat, upperLng] = upperCorner.split(" ").map(item => parseFloat(item, 10))

            return {
              name,
              description,
              lat,
              lng,
              lowerLat,
              lowerLng,
              upperLat,
              upperLng,
            }
          })
      )
  },

  _wrapInRSVP (promise) {
    return new RSVP.Promise((resolve, reject) => promise.then(resolve, reject))
  },



  // ----- Events and observers -----



  // ----- Tasks -----

})
