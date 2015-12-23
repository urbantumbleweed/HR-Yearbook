var AppView = Backbone.View.extend({

  el: '#app-container',

  initialize: function(options) {

    options.router.on('route:landing', this.showLanding.bind(this));
    options.router.on('route:showCohort', this.showCohort.bind(this));
    options.router.on('route:allStudents', this.showAllStudents.bind(this));
    options.router.on('route:studentById', this.showStudentById.bind(this));

  },

  showCohort: function(number) {
    var cohort = new Cohort({ cohort: number});
    this.clearContentContainer();

    return this.$el.find('#page-content-container')
      .append(new StudentsView({
        collection: cohort,
        el: '#page-content-container'
      }))
  },

  showLanding: function() {
    debugger;
    this.$el.find('#page-content-container')
      .html(new LandingView().render());
  },

  showAllStudents: function(){

  },

  showStudentById: function(id){

  },

  clearContentContainer: function(){
    $('#page-content-container').html('');
  }


})
