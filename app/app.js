import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

App.ready = function() {
  console.log("app is ready wooo")
}

Ember.Application.initializer({
  name: 'login-check',
  initialize: function(container, application) {
      window.config = config;
  }
});


loadInitializers(App, config.modulePrefix);

export default App;
