var NavBarView = Backbone.View.extend({

  el: '#navbar-container',

  baseTemplate: _.template(['<nav class="navbar">',
      '<form>',
      '<input class="find-student" type="textbox" placeholder="Fullname">',
      '<button class="find-student--submit" type="submit">Get</button>',
      '</form>',
      '<ul class="navbar-link-group">',
      '</ul>',
      '</nav>'].join('')),

  linkTemplate: _.template('<li class="navbar-link"><a href="#/cohort/<%- cohort %>"><%- cohort %></a></li>'),

  events: {
    'click .find-student--submit': 'handleSubmit'
  },

  initialize: function() {
    this.render();
    $('.find-student--submit').submit(this.handleSubmit.bind(this));
  },

  handleSubmit: function(){
    var name = $('.find-student');
    this.trigger('submit', name.val());
    $('.find-student').val('');
  },

  render: function() {
    this.$el.html('<img class="navbar-logo" src="assets/hr-logo.png" /><h1 class="navbar-title">HR Yearbook</h1>')
      .append(this.baseTemplate());
  },

  renderLinks: function(cohorts){
    var links = cohorts.map(function(cohort){
      return this.linkTemplate({cohort: cohort});
    }.bind(this));

    this.render();

    $('.navbar-link-group').html('<li class="navbar-link"><a href="#/students">All</a></li>').append(links);
  }

});

