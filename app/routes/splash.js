import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    if(this.token()) {
      var controller = this;
      return $.ajax({url: "http://lvh.me:3000/api/v1/sessions.json",
                      type: "GET",
                      data: {token: this.token()}}
              ).done(function(data) {
                console.log("logged in user using token, got data ", data);
                controller.transitionTo("user", data);
                return data;
              }).fail(function(data) {
                console.log("failed to log in, got data", data);
                return null;
              });
    } else {
      return null;
    }
  },
  token: function() {
    return $.cookie("authToken");
  },
});
