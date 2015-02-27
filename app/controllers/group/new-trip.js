import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {

    saveTrip: function () {
      console.log('hit action')
      var name     = this.get('name');
      var id       = this.get('id');
      var location = this.get('location');
      var return_time    = this.get('return_time');
      var departure_time = this.get('departure_time');

      this.store.createRecord('trip', {
        name: name,
        location: location,
        return_time: return_time ,
        departure_time: departure_time
      }).save().then(function (trip) {
        this.transitionToRoute('group.trip', trip);
      }.bind(this));
    }
  }

});