var NavBarView = Backbone.View.extend({

  el: '#navbar-container',

  baseTemplate: _.template('<nav class="navbar"><ul class="navbar-link-group"></ul></nav>'),

  linkTemplate: _.template('<li class="navbar-link"><a href="#/cohort/<%- cohort %>"><%- cohort %></a></li>'),

  initialize: function() {
    this.render();
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

