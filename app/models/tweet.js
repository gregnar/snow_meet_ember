import DS from 'ember-data';

let Tweet = DS.Model.extend({
  user_name: DS.attr("string"),
  created_at: DS.attr("date"),
  text: DS.attr("string"),
  user: DS.belongsTo("user", {async: true}),
});


export default Tweet;
