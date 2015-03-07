import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {

    saveGroup: function () {
      var name              = this.get('name');
      var description       = this.get('description');

      var new_group = this.store.createRecord('group', {
        name: name,
        description: description,
       });

      var user = this.get('model');
      new_group.set('user', user);

      new_group.save().then(function (group) {
        this.transitionToRoute('user.group', group);
      }.bind(this));
    }
  }

});