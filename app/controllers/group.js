import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {

    addUser: function () {

      var group = this.get('model');

      var groupId = this.get('model').get('id');
      var userId = this.session.get('user_id');

      var newGroupsUser = this.store.createRecord('groupsUser', {
        group_id: groupId,
        user_id: userId,
      });

      newGroupsUser.save().then(function (group) {
        this.transitionToRoute('group', group);
      }.bind(this));
    }
  }
});