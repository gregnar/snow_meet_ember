import Ember from 'ember';

export default Ember.Route.extend({
  afterModel: function(user) {
    console.log("after model got user ", user);
    this.transitionTo("user", user);
  },
  goToUserShow: function() {
  },
  token: function() {
    return $.cookie("authToken");
  },
});
