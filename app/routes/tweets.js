import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
      var tweets = this.store.find('tweet');
      return tweets;
    }
});
