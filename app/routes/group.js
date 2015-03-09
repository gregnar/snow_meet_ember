import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  model: function(params) {
    return this.store.find('group', params.group_id);
  },
  
  afterModel: function(group) {
    this.transitionTo('group.trip', group.get('trips.firstObject'));
  }
});
