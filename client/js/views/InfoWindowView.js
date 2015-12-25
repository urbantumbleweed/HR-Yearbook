var InfoWindowView = Backbone.View.extend({

  el: '#info-window-container',

  model: Student,

  template: _.template('<h1><%- first %> the "<%- nickname %>" <%- last %></h1>'),

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    setTimeout(function(){
      this.$el.html('');
    }.bind(this), 2000);
  }

});
