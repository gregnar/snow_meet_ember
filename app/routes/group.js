import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('group', params.group_id);
  },
  afterModel: function(group) {
    this.transitionTo('group.trip', group.get('trips.firstObject'));
  }
});
