import {
  validatePresence,
  validateNumber
} from 'ember-changeset-validations/validators'

export default {
  name: [
    validatePresence(true),
  ],

  lat: [
    validatePresence(true),
    validateNumber({ gte: -90, lte: 90, }),
  ],

  lng: [
    validatePresence(true),
    validateNumber({ gte: -180, lte: 180, }),
  ],
}
