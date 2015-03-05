import DS from 'ember-data';

let Instagram =DS.Model.extend({
  user_name:   DS.attr("string"),
  capition:    DS.attr("string"),
  profile_pic: DS.attr("string"),
  image_url:   DS.attr("string"),
  user: DS.belongsTo("user", {async: true}),
  trip: DS.belongsTo("trip", {async: true}),
});

Instagram.reopenClass({
  FIXTURES: [
    {
        "id": 1,
        "user_name": "timtim",
        "capition": "I am wicked cool",
        "profile_pic": "http://news.bbcimg.co.uk/media/images/72015000/jpg/_72015753_72015747.jpg",
        "image_url": "http://tong.visitkorea.or.kr/cms/resource/45/693245_image2_1.jpg",
        "user": 1,
        "trip": 1,
      }
    ]
  });

  export default Instagram;