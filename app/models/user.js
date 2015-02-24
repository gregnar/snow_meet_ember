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

User.reopenClass({
  FIXTURES: [
    {
      "id": 1,
      "twitter_name": "IamRealLyFucKiNC00l",
      "insta_name": "IamRealLyFucKiNC00l2",
      "email": "IamRealLyFucKiNC00l@example.com",
      "first_name": "Pat",
      "last_name": "Mee",
      "password_digest": "thisisapassword",
      "groups": [2]
    }
  ]
});

export default User;
