import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('splash', { path: '/'} );

  this.route('login', { path: '/login'});

  this.route('user', { path: '/users/:user_id'});

  this.resource('group', { path: '/groups/:group_id' }, function() {
    this.route('trip', { path: '/trips/:trip_id' });
    this.route('new-trip');
  });

  this.resource('groups', function() {
    this.route('new');
  });

  this.route('trip', {path: '/trips/:trip_id'});
});

export default Router;