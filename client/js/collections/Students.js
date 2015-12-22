var Students = Backbone.Collection.extend({

  model: Student,

  url: 'https://hr-yearbook.herokuapp.com/api/',

  initialize: function () {
    this.url = this.url + 'students';
    this.getStudents();
  },
  getStudents: function() {
    debugger;
    this.fetch().then(function(){
      console.log('Got students');
    });
    // Use .fetch to populate your Students collection from the API
    // The method incredibly useful (and flexible!) – you can even pass AJAX success/error/complete handlers to it!
  }
});
