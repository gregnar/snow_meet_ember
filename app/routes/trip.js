import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    console.log("trips model hook with params", params.trip_id);
    var trip = this.store.find('trip', params.trip_id);
    return trip;
  }
});