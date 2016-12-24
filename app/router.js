import Ember from 'ember'
import config from './config/environment'

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
})

Router.map(function () {
  this.route('bars', function () {
    this.route('bar', {path: ':barId'})
    this.authenticatedRoute('new')
  })


})

export default Router
