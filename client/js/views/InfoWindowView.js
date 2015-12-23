var InfoWindowView = Backbone.View.extend({

  el: '#info-window-container',

  model: Student,

  template: _.template('<h1><%- nickname %></h1>'),

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html('');
  },

  highlight: function(student){
    console.log('got click event', student);
    this.$el.html(this.template(student.attributes));
  }

});
