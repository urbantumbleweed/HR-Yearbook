// http://backbonejs.org/#Router
var AppRouter = Backbone.Router.extend({

  routes: {
    '': 'landing',
    'students': 'allStudents',
    'students/:id': 'studentById',
    'students/id=:id': 'studentById',
    'students/name=:nameString': 'studentByName',
    'students/image=:imageUrl': 'studentByImage',
    'students/cohort=:number': 'showCohort',
    'cohort/:number': 'showCohort'
  },

  landing: function() {
    debugger;
    this.trigger('landing');
    this.navigate('');
  },

  allStudents: function(){
    debugger;
    this.trigger('allStudents');
    this.navigate('students/');
  },

  studentById: function(id){
    debugger;
    this.trigger('studentById', decodeURIComponent(id));
    this.navigate('students/' + encodeURIComponent(id));
  },

  studentByName: function(nameString){
    debugger;
    this.trigger('studentByName', decodeURIComponent(nameString));
    this.navigate('students/name=' + encodeURIComponent(nameString));
  },

  studentByImage: function(imageUrl){
    debugger;
    this.trigger('studentByImage', decodeURIComponent(imageUrl));
    this.navigate('students/image=' + encodeURIComponent(imageUrl));
  },

  showCohort: function(params){
    debugger;
    this.trigger('showCohort', decodeURIComponent(params));
    this.navigate('cohort/' + encodeURIComponent(params));
  }

});
