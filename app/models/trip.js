import DS from 'ember-data';

let Trip = DS.Model.extend({
  name: DS.attr("string"),
  location: DS.attr("string"),
  departure_time: DS.attr("date"),
  admin_id: DS.attr("number"),
  return_time: DS.attr("date"),
  group: DS.belongsTo("group", {async: true}),
  rsvps: DS.hasMany("rsvp", {async: true}),
  instagrams: DS.hasMany("instagram", {async: true})
});

Trip.reopenClass({
  FIXTURES: [
    {
      "id": 1,
      "name": "Vail Ski Resort",
      "location": "because we're awesome",
      "departure_time": "1/1/15",
      "return_time": "2/5/15",
      "group": 2,
      "rsvps": [1],
      "admin_id": 1,
      "instagrams": [1]
    },
    {
      "id": 2,
      "name": "Breckenridge Ski Resort",
      "location": "off a road, there's a bus",
      "departure_time": "3/3/15",
      "return_time": "3/5/15",
      "group": 1,
      "rsvps": [1],
      "admin_id": 1
    },
    {
      "id": 3,
      "name": "A Basin",
      "location": "somewhere west of here",
      "departure_time": "1/4/15",
      "return_time": "2/12/15",
      "group": 2,
      "rsvps": [1],
      "admin_id": 2
    },
    {
      "id": 4,
      "name": "SOME AWESOME PLACE",
      "location": "not mars",
      "departure_time": "1/24/15",
      "return_time": "2/1/15",
      "group": 2,
      "rsvps": [1],
      "admin_id": 3
    }
  ]
});

export default Trip;
