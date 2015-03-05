import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
      console.log("Got Logout Model hook");
      $.removeCookie('authToken');
      this.transitionTo("splash");
    }
});
