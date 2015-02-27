import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return trip = this.store.find('trip', params.trip_id);
  }
});