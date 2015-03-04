import Ember from 'ember';

var SplashController = Ember.ObjectController.extend({
  model: function() {
    console.log("splash controller model hook");
    return this.currentUser();
  },
  actions: {
    logIn: function() {
      $.ajax({url: "http://lvh.me:3000/api/v1/sessions.json",
              type: "POST",
              data: {password: this.get("password"), email: this.get("email")}}
      ).done(function(data) {
        console.log("auth data ", data);
        $.cookie("authToken", data.authentication_token);
      });
    }
  },
  token: function() {
    return $.cookie("authToken");
  },
  currentUser: function() {
    if(this.get('user')) {
      return this.get('user');
    } else {
      if(this.token()) {
        return this.fetchUser();
      } else {
        //show login screen or something??
      }
    }
  },
  password: "pizza",
  email: "horace@turing.io"
});


export default SplashController;

