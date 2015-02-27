import Ember from 'ember';

export default Ember.ArrayController.extend({

  actions: {

    deleteGroup: function(params) {
      store.find('group', params.group_id).then(function (group) {
        group.destroyRecord();
      });
    }
  }
});
