import Ember from 'ember';


var NavigationController = Ember.ArrayController.extend({
  model: Ember.A([
    Ember.Object.create({title: "Groups", location: 'group', active: null}),
    Ember.Object.create({title: "Trips", location: 'trip', active: null})
  ]),
  title: "SnowMeet"
  });

export default NavigationController;