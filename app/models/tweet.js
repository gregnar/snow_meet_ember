import DS from 'ember-data';

let Tweet = DS.Model.extend({
  user_name: DS.attr("string"),
  created_at: DS.attr("date"),
  text: DS.attr("string"),
  user: DS.belongsTo("user", {async: true}),
});

Tweet.reopenClass({
  FIXTURES: [
    {
      "id": 1,
      "user_name": "j3",
      "created_at": "1/1/15",
      "text": "Hey guys check out this awesome job you're not gonna get",
      "user": 1,
    }
  ]

})

export default Tweet;
