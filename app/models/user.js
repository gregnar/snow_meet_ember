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
  FIXTURES: [
    {
      "id": 1,
      "twitter_name": "@superCool",
      "insta_name": "superCool",
      "email": "superCool@example.com",
      "first_name": "Pat",
      "last_name": "Mee",
      "password_digest": "password",
      "groups": [2]
    },
    {
      "id": 2,
      "twitter_name": "@McDonalds",
      "insta_name": "Yamhumgry",
      "email": "burger@example.com",
      "first_name": "Bandof",
      "last_name": "Brothers",
      "password_digest": "password",
      "groups": [2,1]
    },
    {
      "id": 3,
      "twitter_name": "@inotalk",
      "insta_name": "noseeeither",
      "email": "internet@example.com",
      "first_name": "EMANTSRIF",
      "last_name": "SWIMS",
      "password_digest": "password",
      "groups": [1,2]
    }
  ]
});

export default User;
