import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    console.log("HELLOOOOOO", this.get('currentUserGetter').currentUser());
    return this.store.find('group', params.group_id);
  },
  afterModel: function(group) {
    this.transitionTo('group.trip', group.get('trips.firstObject'));
  }
});
