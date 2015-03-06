import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {

    saveTrip: function () {
      var name     = this.get('name');
      var id       = this.get('id');
      var city     = this.get('city');
      var state    = this.get('state');
      var return_time    = this.get('return_time');
      var departure_time = this.get('departure_time');

      var new_trip = this.store.createRecord('trip', {
        name: name,
        city: city,
        state: state,
        id: id,
        return_time: return_time ,
        departure_time: departure_time
      });

      var group    = this.get('model');
      new_trip.set('group', group);

      new_trip.save().then(function (trip) {
        this.transitionToRoute('group.trip', trip);
      }.bind(this));
    }
  }

});


      // var post = this.store.createRecord('post', {
      //   title: 'Rails is Omakase',
      //   body: 'Lorem ipsum'
      // });

      // this.store.find('user', 1).then(function(user) {
      //   post.set('author', user);
      // });

      // debugger;

            // new_trip.set('group', group.id);
            // new_trip.set('group.id', null);
