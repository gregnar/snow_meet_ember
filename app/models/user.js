import DS from "ember-data";

let User = DS.Model.extend({
  twitter_name: DS.attr("string"),
  insta_name: DS.attr("string"),
  email: DS.attr("string"),
  first_name: DS.attr("string"),
  last_name: DS.attr("string"),
  // password_digest: DS.attr("string"),
  groups: DS.hasMany("group", {async: true}),
  rsvps: DS.hasMany("rsvp", {async: true})
});

User.reopenClass({
  find_by_email: function (desired_email) {
    return this.store.find('user', { email: desired_email });
  },
});

export default User;
