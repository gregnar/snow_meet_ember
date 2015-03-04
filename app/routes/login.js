import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function (controller, model) {
    //     if (!this.controllerFor('auth').get('userIsLoggedIn')) {
    //   var loginController = this.controllerFor('login');
    //   loginController.set('previousTransition', transition);
    //   this.transitionTo('login');
    // }

    this.transitionTo("user", window.currentUser);

        // console.log(this.controllerFor('user'));


    console.log(controller);
    console.log(model);
    console.log("hi");
  },
  afterModel: function() {
    console.log("login after model hook")
  },
  beforeModel: function(transition) {
    console.log("got transition" + transition);
    console.log("login before model");
    return $.ajax({
      url: config.apiHost + "/me",
      crossDomain: true,
      xhrFields: { withCredentials: true }
    }).done(function(data){
      console.log("server responded with login info");
      if (data.logged_in) {
        //if logged in -- transition to user#show
        // console.log(this.get("controller"));
        window.currentUser = data;
        console.log(data);
        console.log("logged in wooo")
      } else {
        //otherwise -- transition to splash page
      }
    });
  },
  model: function() {
    console.log("login model hook");
  }
});
