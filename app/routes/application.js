import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';


export default Ember.Route.extend(ApplicationRouteMixin, {

  beforeModel: function() {
      return this.csrf.fetchToken();
    },

  sessionAuthenticationSucceeded: function () {
    this.transitionTo("user");
  }

});
