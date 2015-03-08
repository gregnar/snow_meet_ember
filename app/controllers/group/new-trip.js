import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {

    saveTrip: function () {
      var name     = this.get('name');
      var city     = this.get('city');
      var state    = this.get('state');
      var return_time    = this.get('return_time');
      var departure_time = this.get('departure_time');

      var new_trip = this.store.createRecord('trip', {
        name: name,
        city: city,
        state: state,
        return_time: return_time ,
        departure_time: departure_time
      });

      var group = this.get('model');
      new_trip.set('group', group);

      new_trip.save().then(function (trip) {
        this.transitionToRoute('group.trip', trip);
      }.bind(this));
    }
  }
});
