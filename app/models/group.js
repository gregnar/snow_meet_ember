import DS from 'ember-data';

let Group = DS.Model.extend({
  name: DS.attr("string"),
  description: DS.attr("string"),
  admin_id: DS.attr("number"),
  users: DS.hasMany("user", {async: true}),
  trips: DS.hasMany("trip", {async: true})
});

export default Group;
