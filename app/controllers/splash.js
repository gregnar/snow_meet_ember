import Ember from 'ember';

var SplashController = Ember.ObjectController.extend({
  actions: {
    logIn: function() {
      var controller = this;
      $.ajax({url: "http://lvh.me:3000/api/v1/sessions.json",
              type: "POST",
              data: {password: this.get("password"), email: this.get("email")}}
      ).done(function(data) {
        console.log("auth data ", data);
        $.cookie("authToken", data.authentication_token);
        console.log("got controller, ", controller);
        controller.transitionToRoute("user", data);
      }).bind(this);
    }
  },
  token: function() {
    return $.cookie("authToken");
  },
  password: "pizza",
  email: "horace@turing.io"
});


export default SplashController;

