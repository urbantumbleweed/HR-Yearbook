var StudentEntryView = Backbone.View.extend({

  tagName: 'div',

  className: 'student',

  template: _.template('<div class="student-image" style="background-image: url(<%- image %>)"></div>' +
    '<h2 class="student-name"><%- name %></h2>' +
    '<p class="student-nickname"><%=nickname %></p>' +
    '<p class="student-cohort" >Cohort: <span class="student-cohort__number"><%- cohort %></span></p>'),

  events: {
    'click': 'handleClick'
  },

  initialize: function(params){
    this.listenTo(this.model, 'sync', this.render);
  },

  handleClick: function(e){
    e.preventDefault();
    this.model.highlight(e);
  },

  render: function(){
    return this.$el
      .html(this.template(this.model.attributes));
  }
});
