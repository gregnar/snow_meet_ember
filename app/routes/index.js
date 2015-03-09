import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel: function () {
    this.transitionTo('user', this.session.get('user_id'));
  },
});
