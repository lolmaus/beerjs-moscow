import Route from 'ember-route'



export default Route.extend({

  // ----- Services -----



  // ----- Overridden properties -----



  // ----- Static properties -----



  // ----- Computed properties -----



  // ----- Overridden Methods -----
  beforeModel () {
    return this
      .get('session')
      .fetch('firebase')
      .catch(() => {})
  },



  // ----- Custom Methods -----



  // ----- Events and observers -----



  // ----- Tasks -----



  // ----- Actions -----
  actions: {
    authenticate (provider) {
      return this.get('session').open('firebase', {provider})
    },

    invalidateSession () {
      return this.get('session').close('firebase')
    },
  }
})
