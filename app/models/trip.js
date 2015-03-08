import DS from 'ember-data';

let Trip = DS.Model.extend({
  name: DS.attr("string"),
  city: DS.attr("string"),
  state: DS.attr("string"),
  departure_time: DS.attr("string"),
  return_time: DS.attr("string"),
  rsvps: DS.hasMany("rsvp", {async: true}),
  tweets: DS.hasMany("tweet", {async: true}),
  group: DS.belongsTo("group", {async: true}),
  instagrams: DS.hasMany("instagram", {async: true}),
});

export default Trip;
