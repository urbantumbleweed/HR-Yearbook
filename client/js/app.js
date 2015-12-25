var students = new Students();
var app = new AppModel({
  currentStudents: students
});

var appview = new AppView({
  router: new AppRouter(),
  navbar: new NavBarView(),
  model: app
});

// http://backbonejs.org/#History
Backbone.history.start();
