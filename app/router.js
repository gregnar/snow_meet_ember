import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('splash', { path: '/'} );

  this.route('login', { path: '/login' });

  this.route('index', { path: '/index' } );

  this.resource('user', { path: '/users/:user_id'}, function() {
    this.route('new-group');
  });

  this.resource('group', { path: '/groups/:group_id' }, function() {
    this.route('trip', { path: '/trips/:trip_id' });
    this.route('new-trip');
  });

  this.route('trip', {path: '/trips/:trip_id'});
});

export default Router;
