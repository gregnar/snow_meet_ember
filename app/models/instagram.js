import DS from 'ember-data';

let Instagram =DS.Model.extend({
  user_name:   DS.attr("string"),
  capition:    DS.attr("string"),
  profile_pic: DS.attr("string"),
  image_url:   DS.attr("string"),
  user: DS.belongsTo("user", {async: true}),
  trip: DS.belongsTo("trip", {async: true})
});

export default Instagram;