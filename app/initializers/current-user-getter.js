import Ember from 'ember';

export function initialize(container, application) {
  var CurrentUserGetter = Ember.Object.extend({
    currentUser: function() {
      if (this.get('session')) {
        return this.store.find('user', { email: this.get('session').email });
      } else {
        return "no this.get('session')!!!";
      }
    },
  });

  application.register('currentUserGetter:main', CurrentUserGetter);
  application.inject('route', 'currentUserGetter', 'currentUserGetter:main');

}

export default {
  name: 'current-user-getter',
  initialize: initialize
};
