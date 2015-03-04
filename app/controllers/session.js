var SessionController = Ember.ObjectController.extend({
  init: function() {
    console.log("session cont init");
    this.logIn();
  },
  setupController: function(controller, model) {
    console.log("setting up session cotnroller");
  },
  logIn: function() {
    if(this.token()) {
      return $.ajax({url: "http://lvh.me:3000/api/v1/sessions.json",
                      type: "GET",
                      data: {token: this.token()}}
              ).done(function(data) {
                console.log("logged in user using token, got data ", data);
                this.currentUser = data;
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
export default SessionController;
