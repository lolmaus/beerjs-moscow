import Controller from 'ember-controller'
import Changeset from 'ember-changeset'
import lookupValidator from 'ember-changeset-validations'
import computed from 'ember-computed-decorators'
import {next} from 'ember-runloop'
import RSVP from 'rsvp'
import BarValidations from 'beerjs-moscow/validations/bar'
import {equal} from 'ember-computed'
import conditional from "ember-awesome-macros/conditional"



export default Controller.extend({

  // ----- Services -----



  // ----- Overridden properties -----



  // ----- Static properties -----



  // ----- Computed properties -----
  isNew: equal('model.barId', 'new'),
  bar:   conditional('isNew', 'newBar', 'model.currentBar'),

  @computed
  newBar () { return this._newBar() },

  @computed('bar')
  changeset (bar) {
    console.log('bar', bar)
    return new Changeset(bar, lookupValidator(BarValidations), BarValidations)
  },



  // ----- Overridden Methods -----



  // ----- Custom Methods -----
  _newBar () {
    const store = this.get('store')
    return store.createRecord('bar')
  },

  _resetNewBar () {
    this.set('newBar', this._newBar())
  },

  _resetExistingBar () {
    this
      .get('model.currentBar')
      .rollbackAttributes()
  },

  reset () {
    console.log("this.get('isNew')",this.get('isNew'))
    this.get('isNew')
      ? this._resetNewBar()
      : this._resetExistingBar()
  },



  // ----- Events and observers -----



  // ----- Tasks -----



  // ----- Actions -----
  actions: {
    save () {
      const changeset = this.get('changeset')

      return changeset
        .validate()
        .then(() => {
          if (changeset.get('isInvalid')) return RSVP.reject()
          changeset.save()
        })
        .then(() => {
          next(() => {
            this.reset()
            this.transitionToRoute('bars')
          })
        })
    },

    reset () {
      this.reset()
    },
  }
})
