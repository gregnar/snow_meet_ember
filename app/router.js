import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('splash', { path: '/'} );
  this.resource('users', function() {});

  this.resource('group', { path: '/groups/:group_id' }, function() {
    this.route('trip', { path: '/trips/:trip_id' });
  });

  this.route('trip', {path: '/trips/:trip_id'}, function() {
    this.resource('tweets', { path: '/tweets' });
  });
  this.route('tweet');
});

export default Router;
