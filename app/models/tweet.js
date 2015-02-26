import DS from 'ember-data';

export default DS.Model.extend({
  user_name: DS.attr("string"),
  created_at: DS.attr("date"),
  text: DS.attr("string"),
  trip: DS.belongsTo("trip", {async: true}),
  user: DS.belongsTo("user", {async: true}),
});

Tweet.reopenClass({
  FIXTURES: [
    {
      "user_name": "j3",
      "created_at": "1/1/15",
      "text": "Hey guys check out this awesome job you're not gonna get",
      "trip": 1,
      "user": 1,
    }
  ]

})
