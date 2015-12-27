// http://backbonejs.org/#Router
var AppRouter = Backbone.Router.extend({

  routes: {
    '': 'landing',
    'students?id=:id': 'studentById',
    'students?name=:name': 'studentByName',
    'students?image=:imageUrl': 'studentByImage',
    'students?cohort=:number': 'showCohort',
    'students/:id': 'studentById',
    'students': 'allStudents',
    'cohort/:number': 'showCohort'
  },

  triggerOption: {
    trigger: true
  },

  landing: function() {
    this.navigate('');
  },

  allStudents: function(){
    this.navigate('students/', this.triggerOption);
  },

  studentById: function(id){
    this.navigate('students/' + encodeURIComponent(id), this.triggerOption);
  },

  studentByName: function(name){
    this.navigate('students?name=' + encodeURIComponent(name), this.triggerOption);
  },

  studentByImage: function(imageUrl){
    this.navigate('students?image=' + encodeURIComponent(imageUrl), this.triggerOption);
  },

  showCohort: function(params){
    this.navigate('cohort/' + encodeURIComponent(params), this.triggerOption);
  }

});
