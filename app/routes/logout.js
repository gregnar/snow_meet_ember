import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
      $.removeCookie("authToken", {path: "/"});
      this.transitionTo("splash");
    }
});
