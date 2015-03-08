import DS from 'ember-data';

let Tweet = DS.Model.extend({
  user_name: DS.attr("string"),
  text: DS.attr("string"),
  twitter_time: DS.attr("string"),
  user: DS.belongsTo("user", {async: true}),
  trip: DS.belongsTo("trip", {async: true}),
});

export default Tweet;
