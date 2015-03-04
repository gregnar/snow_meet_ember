import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function (controller, model) {
    console.log("hi");
  },
  afterModel: function() {
    console.log("user after model hook")
  },
  beforeModel: function() {
  },
  model: function(something) {
    console.log('user model hook got something ', something);
    console.log("user model hook");
  }
});
