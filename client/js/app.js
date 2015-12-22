var students = new Students();
// var app = new AppModel();
var cohort = new Backbone.Model.extend({
  model: Student,

  initialize: function(){
    this.url = 'https://hr-yearbook.herokuapp.com/api/students?cohort=' + options.cohort;
  }
});

var appview = new AppView({
  // model: app,
  router: new AppRouter(),
  navbar: new NavBarView({
    el: '#navbar-container'
  }),
  infoPane: new InfoWindowView({
    el: "#info-window-container",

  }),
  students: new StudentsView({ collection: students})
});

// http://backbonejs.org/#History
Backbone.history.start({ pushState: true });
