import Ember from 'ember';
import SimpleAuthApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';


export default Ember.Route.extend(SimpleAuthApplicationRouteMixin, {

  beforeModel: function() {
    this._super()
    return this.csrf.fetchToken();
  },


});
