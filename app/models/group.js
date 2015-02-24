import DS from 'ember-data';

let Group = DS.Model.extend({
  name: DS.attr("string"),
  description: DS.attr("string"),
  admin_id: DS.attr("number"),
  users: DS.hasMany("user", {async: true}),
  trips: DS.hasMany("trip", {async: true})
});

Group.reopenClass({
  FIXTURES: [
    {
      "id": 2,
      "name": "this good name",
      "description": "this good description",
      "trips": [3],
      "users": [1]
    }
  ]
});

export default Group;
