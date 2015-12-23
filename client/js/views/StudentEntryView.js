var StudentEntryView = Backbone.View.extend({

  tagName: 'div',

  attributes: {
    className: 'student'
  },

  template: _.template('<img src"<%= image %>" />' +
    '<h2 class="student-name"><%= name %></h2>' +
    '<p class="student-cohort" ><%= cohort %></p>'),

  events: {
    'mouseover': 'handleMouseOver',
    'click': 'handleClick'
  },

  initialize: function(params){
    this.attributes['data-id'] = params.id;
    this.listenTo(this.model, 'change', this.render);
    this.render();
    // initializing doesn't return anything, so:
    return this.render();
  },

  render: function(){
    return this.$el
      .html(this.template(this.model.attributes));
  }
});
