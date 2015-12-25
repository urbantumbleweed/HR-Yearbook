// The root model of the application
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.on('currentStudents:reset', this.handleReset, this);
    this.on('currentStudents:sync', this.handleSync, this);
    // this.set('infoPane', new Student());
    // this.set('students', new Students());
    this.get('currentStudents').fetch().then(function(){
      this.handleSync();
      this.set('cohorts',_.uniq(this.get('currentStudents').pluck('cohort')));
      this.trigger('cohortLinksCreated');
    }.bind(this))
  },

  handleReset: function(){
    this.stopListening(this.get('currentStudents'));
  },

  handleSync: function(){
    this.listenTo(this.get('currentStudents'), 'highlight', this.handleHighlight);
  },

  changeUrl: function(url){
    var baseUrl= 'https://hr-yearbook.herokuapp.com/api/';
    var students = this.get('currentStudents');
    students.url = baseUrl + url;
    students.reset();
    return students;
  },

  handleHighlight: function(student){
    this.set('highlightedStudent', student);
  }




});
