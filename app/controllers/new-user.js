import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {

    saveUser: function () {
      var first_name   = this.get('first_name');
      var last_name    = this.get('last_name');
      var email        = this.get('email');
      var insta_name   = this.get('insta_name');
      var twitter_name = this.get('twitter_name');
      var password              = this.get('password');
      var password_confirmation = this.get('password_confirmation');

      var new_user = this.store.createRecord('user', {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password_confirmation: password_confirmation,
        password: password,
        insta_name: insta_name,
        twitter_name: twitter_name,
       });

      new_user.save().then(function (user) {
        this.transitionToRoute('user', user);
      }.bind(this));
    }
  }

});