import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var group = this.store.find('group', params.group_id);
    return group;
  }
});
