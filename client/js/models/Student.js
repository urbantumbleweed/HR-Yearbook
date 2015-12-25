var Student = Backbone.Model.extend({

  defaults: {
    id: 0,
    name: '',
    cohort: 0,
    image: '',
    first: '',
    last: '',
    nickname: ''
  },

  initialize: function(params){
    if (params) {
      var fullName = params.name.split(' ');
      this.set('first', fullName[0].trim());
      this.set('last', fullName[1].trim());
      this.set('nickname', generateNickname());
    }
  },

  highlight: function(e){
    this.trigger('highlight', this);
  }

});
