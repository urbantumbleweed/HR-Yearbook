var Students = Backbone.Collection.extend({

  model: Student,

  url: 'https://hr-yearbook.herokuapp.com/api/',

  initialize: function () {
    this.url = this.url + 'students';
    this.on('highlight', this.handleHighlight, this);
    this.getStudents();
  },
  getStudents: function() {
    // debugger;
    this.fetch()
      .then(function(){
        return new StudentsView({collection: this}).render();
      }.bind(this))
      .catch(function(err){
        console.err('Your shit is busted in the Students collection');
      });
    // Use .fetch to populate your Students collection from the API
    // The method incredibly useful (and flexible!) – you can even pass AJAX success/error/complete handlers to it!
  },
  handleHighlight: function(student){
    console.log('got the event in the collection');
    this.trigger('ugabuga');

  }
});
