import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

// this.get('controller').get('target').transitionToRoute('user', user);


Router.map(function() {
  // this.resource('splash', { path: '/'} );
  this.route('login', {path: '/'});

  this.resource('user', {path: '/users/:user_id'});

  this.resource('group', { path: '/groups/:group_id' }, function() {
    this.route('trip', { path: '/trips/:trip_id' });
    this.route('new-trip');
  });

  this.resource('groups', function() {
    this.route('new');
  });

  this.route('trip', {path: '/trips/:trip_id'}, function() {
    this.resource('tweets', { path: '/tweets' });
  });

  this.route('tweet');
});

export default Router;
