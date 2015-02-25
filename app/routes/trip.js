import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var trip = this.store.find('trip', params.trip_id);
    return trip;
  }
});