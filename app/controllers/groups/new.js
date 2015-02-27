import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    saveGroup: function () {
      var name        = this.get('name');
      var description = this.get('description');

      this.store.createRecord('group', {
        name: name,
        description: description
      }).save().then(function (group) {
        this.transitionToRoute('group', group);
      }.bind(this));
    }
  }

});