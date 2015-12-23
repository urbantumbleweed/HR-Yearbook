var AppView = Backbone.View.extend({

  el: '#app-container',

  event: {
    'click .student': 'handleHighlight'
  },

  initialize: function(options) {

    options.router.on('route:landing', this.showLanding.bind(this));
    options.router.on('route:showCohort', this.showCohort.bind(this));
    options.router.on('route:allStudents', this.showAllStudents.bind(this));
    options.router.on('route:studentById', this.showStudentById.bind(this));
    this.students = options.students;
    this.infoPane = options.infoPane;
    this.students.on('highlight', this.handleHighlight, this);
    var that = this;
    console.log('initialize', this)
  },

  showCohort: function(number) {
    console.log('in the showCohort', this);
    that.students = new Cohort({ cohort: number});
    return this.$el.find('#page-content-container')
      .append(this.students.populateCohort());
  },

  showLanding: function() {
    this.$el.find('#page-content-container')
      .html(new LandingView().render());
  },

  showAllStudents: function(){
    return this.$el.find('#page-content-container')
      .append(this.students.getStudents());
  },

  showStudentById: function(id){

  },

  clearContentContainer: function(){
    $('#page-content-container').html('');
  },

  handleHighlight: function(student){
    console.log("Appview got the event", student);
    debugger;
    this.infoPane.highlight(student);
  }


})
