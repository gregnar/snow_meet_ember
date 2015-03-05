import Ember from 'ember';

var NavigationController = Ember.ArrayController.extend({
  needs: ['session'],
  session: Ember.computed.alias('controllers.session'),
  init: function() {
    console.log("NAV INIT");
    //console.log("session ", controllers.session);
    console.log(this.currentUser);
  },
  model: Ember.A([
    Ember.Object.create({title: "Groups", location: 'group', active: null}),
    Ember.Object.create({title: "Trips", location: 'trip', active: null})
  ]),
  currentUser: Ember.computed.alias('controllers.session.currentUser'),
  title: "SnowMeet"
});

export default NavigationController;