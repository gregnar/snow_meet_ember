import Ember from 'ember';

export default Ember.Object.extend({
  currentUser: function() {
    return this.store.find('user', { email: this.session.get('email') } );
  },
});
