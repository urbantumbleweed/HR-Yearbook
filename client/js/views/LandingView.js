var LandingView = Backbone.View.extend({

  tagName: 'div',

  collection: Students,

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
    this.render();
  },

  render: function() {
    return this.$el.html('<h1>We will callback you</h1>');
  }

});
