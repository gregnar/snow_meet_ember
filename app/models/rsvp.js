import DS from 'ember-data';

let RSVP = DS.Model.extend({
  trip_id: DS.attr("number"),
  user_id: DS.attr("number"),
  status:  DS.attr("string"),
  user: DS.belongsTo("user", {async: true}),
  trip: DS.belongsTo("trip", {async: true})
});

export default RSVP;
