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
      "name": "Group A",
      "description": "this good description",
      "trips": [1, 3, 4, 5],
      "users": [1, 2, 3]
    },
    {
      "id": 1,
      "name": "this terrible name",
      "description": "this better description",
      "trips": [2],
      "users": [2, 3]
    }
  ]
});

export default Group;
