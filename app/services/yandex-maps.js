import Service from 'ember-service'
import RSVP from 'rsvp'



export default Service.extend({

  // ----- Services -----



  // ----- Overridden properties -----



  // ----- Static properties -----



  // ----- Computed properties -----



  // ----- Overridden Methods -----



  // ----- Custom Methods -----
  find (input, useAddress = true) {
    return this
      ._wrapInRSVP(ymaps.geocode(input, {
        boundedBy: [[56.061303, 37.033539], [55.452384, 38.162384]], // Moscow
        json:      true,
        results:   999,
      }))

      .then(result =>
        result
          .GeoObjectCollection
          .featureMember
          .map(({GeoObject}) => {
            const {
              name,
              description: address,
              Point: {pos},
              // boundedBy: {Envelope: {lowerCorner, upperCorner}}
            } = GeoObject

            const [lng, lat] = pos.split(" ").map(item => parseFloat(item, 10))
            // const [lowerLng, lowerLat] = lowerCorner.split(" ").map(item => parseFloat(item, 10))
            // const [upperLng, upperLat] = upperCorner.split(" ").map(item => parseFloat(item, 10))

            return {
              name,
              address,
              lat,
              lng,
              useAddress
              // lowerLat,
              // lowerLng,
              // upperLat,
              // upperLng,
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
