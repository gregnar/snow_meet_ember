import DS from 'ember-data';

let GroupsUsers =DS.Model.extend({
  user_id:  DS.attr("string"),
  group_id: DS.attr("string"),
  user:  DS.belongsTo("user"),
  group: DS.belongsTo("group")
});

export default GroupsUsers;