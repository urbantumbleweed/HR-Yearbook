var AppView = Backbone.View.extend({

  el: '#app-container',

  baseUrl: 'https://hr-yearbook.herokuapp.com/api/',

  event: {
    'click .student': 'handleHighlight'
  },

  initialize: function(options) {
    this.router = options.router;
    this.router.on('route:landing', this.showLanding.bind(this));
    this.router.on('route:showCohort', this.showCohort.bind(this));
    this.router.on('route:allStudents', this.showAllStudents.bind(this));
    this.router.on('route:studentById', this.showStudentById.bind(this));
    this.router.on('route:studentByName', this.showStudentByName.bind(this));
    this.router.on('route:studentByImage', this.showStudentByImage.bind(this));
    this.navbar = options.navbar;
    this.navbar.on('submit', this.showStudentByName, this);
    this.listenTo(this.model, 'change:highlightedStudent', this.handleHighlight.bind(this));
    this.listenTo(this.model, 'cohortLinksCreated', this.renderCohortLinks.bind(this));
    // this.students.on('highlight', this.handleHighlight, this);
    // var that = this;
  },

  showCohort: function(number) {
    var fragment = 'cohort/' + number;
    return this.goTo(fragment);
  },

  showLanding: function() {
    this.$el.find('#page-content-container')
      .html(new LandingView().render());
  },

  showAllStudents: function(){
    return this.goTo('students/');
  },

  showStudentById: function(id){
    var fragment = 'students/' + id;
    return this.goTo(fragment);
  },

  showStudentByName: function(name){
    var fragment = 'students?name=' + decodeURIComponent(name);
    return this.goTo(fragment);
  },

  showStudentByImage: function(url){
    var fragment = 'students?image=' + decodeURIComponent(url);
    return this.goTo(fragment);
  },

  clearContentContainer: function(){
    $('#page-content-container').html('');
  },

  goTo: function(url){
    this.router.navigate(url);
    return this.model.changeUrl(url).populate();
  },

  handleHighlight: function(){
    return new InfoWindowView({model: this.model.get('highlightedStudent') }).render();
  },

  renderCohortLinks: function(){
    this.navbar.renderLinks(this.model.get('cohorts'));
  }
})
