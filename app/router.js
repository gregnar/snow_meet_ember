import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('users', function() {});
  this.resource('groups', function() {
    this.resource('group', { path: '/:group_id' }, function() {
      this.resource('trip', { path: 'trips/:trip_id' });
    });
  });
});

export default Router;