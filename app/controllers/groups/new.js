import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    saveGroup: function () {
      var name        = this.get('name');
      var description = this.get('description');
      var id = this.get('id');

      this.store.createRecord('group', {
        name: name,
        description: description,
        id: id
      }).save().then(function (group) {
        this.transitionToRoute('group', group);
      }.bind(this));
    }
  }

});