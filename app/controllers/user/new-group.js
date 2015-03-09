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

      new_group.save().then(function (group) {
        this.transitionToRoute('group', group);
      }.bind(this));
    }
  }

});