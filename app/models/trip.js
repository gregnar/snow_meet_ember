import DS from 'ember-data';

let Trip = DS.Model.extend({
  name: DS.attr("string"),
  location: DS.attr("string"),
  departure_time: DS.attr("date"),
  return_time: DS.attr("date"),
  group_id: DS.attr("number"),
  group: DS.belongsTo("group", {async: true}),
  rsvps: DS.hasMany("rsvp", {async: true})
});

Trip.reopenClass({
  FIXTURES: [
    {
      "id": 3,
      "name": "nice trip",
      "location": "the moon",
      "departure_time": "1/1/15",
      "return_time": "2/1/15",
      "group_id": 2,
      "rsvps": [1]
    }
  ]
});

export default Trip;
