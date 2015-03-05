import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('trip', params.trip_id);
  }
  // ,
  // afterModel: function(trip) {
  //   console.log("this is the trip" , trip)
  //   this.transitionTo('trip.instagrams', trip.get('instagrams'));
  // }
});