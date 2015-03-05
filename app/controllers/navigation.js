import Ember from 'ember';

var NavigationController = Ember.ArrayController.extend({
  needs: ['session'],
  session: Ember.computed.alias('controllers.session'),
  model: Ember.A([
    Ember.Object.create({title: "Groups", location: 'group', active: null}),
    Ember.Object.create({title: "Trips", location: 'trip', active: null})
  ]),
  currentUser: Ember.computed.alias('controllers.session.currentUser'),
  title: "SnowMeet"
});

export default NavigationController;