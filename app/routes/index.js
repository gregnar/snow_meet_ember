import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.transitionTo('user', this.session.get('user_id'));
  }

});
