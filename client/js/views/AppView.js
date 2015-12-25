var AppView = Backbone.View.extend({

  el: '#app-container',

  baseUrl: 'https://hr-yearbook.herokuapp.com/api/',

  event: {
    'click .student': 'handleHighlight'
  },

  initialize: function(options) {

    options.router.on('route:landing', this.showLanding.bind(this));
    options.router.on('route:showCohort', this.showCohort.bind(this));
    options.router.on('route:allStudents', this.showAllStudents.bind(this));
    options.router.on('route:studentById', this.showStudentById.bind(this));
    this.navbar = options.navbar;
    this.listenTo(this.model, 'change:highlightedStudent', this.handleHighlight.bind(this));
    this.listenTo(this.model, 'cohortLinksCreated', this.renderCohortLinks.bind(this));
    // this.students.on('highlight', this.handleHighlight, this);
    // var that = this;
  },

  showCohort: function(number) {
    return this.model.changeUrl('cohort/' + number).populate();
  },

  showLanding: function() {
    this.$el.find('#page-content-container')
      .html(new LandingView().render());
  },

  showAllStudents: function(){
    return this.model.changeUrl('students/').populate();
  },

  showStudentById: function(id){
    return this.model.changeUrl('students/' + id).populate();
  },

  clearContentContainer: function(){
    $('#page-content-container').html('');
  },

  handleHighlight: function(){
    return new InfoWindowView({model: this.model.get('highlightedStudent') }).render();
  },

  renderCohortLinks: function(){
    this.navbar.renderLinks(this.model.get('cohorts'));
  }

  // renderStudents: function(students){
  //   spinnerInit();
  //   return this.$el.find('#page-content-container')
  //     .append(students.populate(renderHtml(students)));
  // },

  // renderHtml: function(collection){
  //   return new StudentsView({collection: collection}).render()
  // }


})
