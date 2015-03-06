import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {

    saveTrip: function () {
      var name     = this.get('name');
      var id       = this.get('id');
      var city     = this.get('city');
      var state    = this.get('state');
      var group    = this.get('group_id');
      var return_time    = this.get('return_time');
      var departure_time = this.get('departure_time');

      this.store.createRecord('trip', {
        name: name,
        city: city,
        state: state,
        id: id,
        group: group,
        return_time: return_time ,
        departure_time: departure_time
      }).save().then(function (trip) {
        this.transitionToRoute('group.trip', trip);
      }.bind(this));
    }
  }

});
