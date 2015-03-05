import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {

    saveTrip: function () {
      var name     = this.get('name');
      var city     = this.get('city');
      var state    = this.get('state');
      var group_id       = parseInt($('#group_id').val());
      var return_time    = this.get('return_time');
      var departure_time = this.get('departure_time');
      debugger;

      this.store.createRecord('trip', {
        name: name,
        city: city,
        state: state,
        group_id: group_id,
        return_time: return_time ,
        departure_time: departure_time
      }).save().then(function (trip) {
        console.log(trip);
        this.transitionToRoute('group.trip', trip);
      }.bind(this));
    }
  }

});