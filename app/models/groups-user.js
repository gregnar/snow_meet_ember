import DS from 'ember-data';

let GroupsUser = DS.Model.extend({
  group_id: DS.attr("number"),
  user_id: DS.attr("number"),
});

export default GroupsUser;

