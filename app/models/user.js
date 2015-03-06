import DS from "ember-data";

let User = DS.Model.extend({
  twitter_name: DS.attr("string"),
  insta_name: DS.attr("string"),
  email: DS.attr("string"),
  first_name: DS.attr("string"),
  last_name: DS.attr("string"),
  password_digest: DS.attr("string"),
  groups: DS.hasMany("group", {async: true}),
  rsvps: DS.hasMany("rsvp", {async: true})
});

export default User;
