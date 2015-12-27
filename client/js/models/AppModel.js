// The root model of the application
var AppModel = Backbone.Model.extend({

  url: 'https://hr-yearbook.herokuapp.com/api/',


  initialize: function(params){
    this.on('currentStudents:reset', this.handleReset, this);
    this.on('currentStudents:sync', this.handleSync, this);
    this.get('currentStudents').fetch().then(function(){
      this.handleSync();
      this.getCohorts();
    }.bind(this))
  },

  handleReset: function(){
    this.stopListening(this.get('currentStudents'));
  },

  handleSync: function(){
    this.listenTo(this.get('currentStudents'), 'highlight', this.handleHighlight);
  },

  changeUrl: function(url){
    var students = this.get('currentStudents');
    students.url = this.url + url;
    students.reset();
    return students;
  },

  getCohorts: function(){
    this.set('cohorts',_.uniq(this.get('currentStudents').pluck('cohort')));
    this.trigger('cohortLinksCreated');
  },

  handleHighlight: function(student){
    this.set('highlightedStudent', student);
  }
});
