import Ember from 'ember';

export default Ember.Controller.extend({
  cosole.log("hit")
  actions: {

    saveTrip: function () {
      console.log('hit')
      var name     = this.get('name');
      var location = this.get('location');
      var group    = this.get('group');
      var return_time    = this.get('return_time');
      var departure_time = this.get('departure_time');

      this.store.createRecord('trip', {
        name: name,
        location: location,
        group: group,
        return_time: return_time ,
        departure_time: departure_time
      }).save().then(function (trip) {
        this.transitionToRoute('group.trip', trip);
      }.bind(this));
    }
  }

});