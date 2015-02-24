import DS from 'ember-data';

let RSVP = DS.Model.extend({
  trip_id: DS.attr("number"),
  user_id: DS.attr("number"),
  status:  DS.attr("string"),
  user: DS.belongsTo("user", {async: true}),
  trip: DS.belongsTo("trip", {async: true})
});

RSVP.reopenClass({
  FIXTURES: [
    {
      "id": 1,
      "trip_id": 3,
      "user_id": 1,
      "status": "yes"
    }
  ]
});

export default RSVP;
