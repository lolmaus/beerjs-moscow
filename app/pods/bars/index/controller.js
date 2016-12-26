import Controller from 'ember-controller'
import {filterBy, mapBy} from 'ember-computed'
import computed from 'ember-computed-decorators'
import conditional from "ember-awesome-macros/conditional"



export default Controller.extend({

  // ----- Services -----



  // ----- Overridden properties -----



  // ----- Static properties -----
  mapCenter: [55.755826, 37.6173],

  @computed
  moscowBounds () {
    return L.featureGroup([
      L.marker([56.061303, 37.033539]),
      L.marker([55.452384, 38.162384]),
    ]).getBounds()
  },

  minMarkersForBounds: 2,



  // ----- Computed properties -----
  existingBars: filterBy('model.bars', 'isNew', false),
  markers:      mapBy('existingBars', 'marker'),

  @computed('markers.[]')
  featureGroup (markers) {
    return L.featureGroup(markers)
  },

  @computed('featureGroup')
  boundsFromBars (featureGroup) {
    return featureGroup.getBounds()
  },

  @computed('existingBars.length')
  enoughBarsForBounds (length) {
    return length >= 2
  },

  bounds: conditional('enoughBarsForBounds', 'boundsFromBars', 'moscowBounds'),



  // ----- Overridden Methods -----



  // ----- Custom Methods -----



  // ----- Events and observers -----



  // ----- Tasks -----



  // ----- Actions -----
  actions: {
    remove (bar) {
      return bar.destroyRecord()
    },

    centerMap (bar) {
      const {lat, lng} = bar.getProperties('lat', 'lng')
      this.set('mapCenter', [lat, lng])
      bar.set('popupOpen', true)
    },

    closeAllPopups () {
      this
        .get('model.bars')
        .forEach(bar => bar.set('popupOpen', false))
    }
  }
})
