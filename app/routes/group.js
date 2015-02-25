import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    console.log("groups model hook with params", params);
    var group = this.store.find('group', params.group_id)
    console.log("group..................");
    window.group = group;
    return group;
  }
});
