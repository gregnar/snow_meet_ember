import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
      var instagrams = this.store.find('instagram');
      return instagrams;
    }
});