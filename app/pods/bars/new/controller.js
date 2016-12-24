import Controller from 'ember-controller'
import Changeset from 'ember-changeset'
import computed from 'ember-computed-decorators'



export default Controller.extend({

  // ----- Services -----



  // ----- Overridden properties -----



  // ----- Static properties -----



  // ----- Computed properties -----
  @computed()
  newBar () { return this._newBar() },

  @computed('newBar')
  changeset (newBar) { return new Changeset(newBar) },



  // ----- Overridden Methods -----



  // ----- Custom Methods -----
  _newBar () {
    const store = this.get('store')
    return store.createRecord('bar')
  },

  resetNewBar () {
    this.set('newBar', this._newBar())
  },



  // ----- Events and observers -----



  // ----- Tasks -----



  // ----- Actions -----
  actions: {
    save () {
      return this
        .get('changeset')
        .save()
        .then(() => {
          this.resetNewBar()
          this.transitionToRoute('bars')
        })
    },

    reset () {},
  }
})
