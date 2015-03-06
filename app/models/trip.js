import DS from 'ember-data';

let Trip = DS.Model.extend({
  name: DS.attr("string"),
  city: DS.attr("string"),
  state: DS.attr("string"),
  departure_time: DS.attr("date"),
  // admin_id: DS.attr("number"),
  return_time: DS.attr("date"),
  group: DS.belongsTo("group", {async: true}),
  rsvps: DS.hasMany("rsvp", {async: true}),
  instagrams: DS.hasMany("instagram", {async: true})
});

export default Trip;
