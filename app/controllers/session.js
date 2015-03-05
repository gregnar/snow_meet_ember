var SessionController = Ember.ObjectController.extend({
  init: function() {
    this.logIn();
  },
  logIn: function() {
    if(this.token()) {
      var controller = this;
      this.currentUser = this.get("store").createRecord("user", {first_name: "Placeholder"});
      $.ajax({url: "http://lvh.me:3000/api/v1/sessions.json",
              type: "GET",
              data: {token: this.token()}}
      ).done(function(data) {
        controller.currentUser.setProperties(data);
      }).fail(function(data) {
        controller.currentUser = null
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
